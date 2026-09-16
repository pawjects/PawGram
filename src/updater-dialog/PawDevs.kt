package com.pawdevs

import android.annotation.SuppressLint
import android.app.Activity
import android.app.Dialog
import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.graphics.Color
import android.graphics.Typeface
import android.graphics.drawable.ColorDrawable
import android.graphics.drawable.GradientDrawable
import android.net.Uri
import android.os.AsyncTask
import android.util.TypedValue
import android.view.Gravity
import android.view.MotionEvent
import android.view.ViewGroup
import android.view.Window
import android.widget.FrameLayout
import android.widget.LinearLayout
import android.widget.TextView
import org.json.JSONObject
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL

/**
 * Manages the in-app presentation logic for PawGram's updates and welcome dialogs.
 * Constructs dynamic, stock-Android-styled UI elements programmatically (without XML)
 * to ensure it runs independently inside the patched host application context.
 */
@SuppressLint("StaticFieldLeak")
object PawDevs {
    private const val COLOR_BG = "#202124"
    private const val COLOR_ACCENT = "#8AB4F8"
    private const val COLOR_TEXT_PRIMARY = "#E8EAED"
    private const val COLOR_TEXT_SECONDARY = "#9AA0A6"
    private const val COLOR_BTN_RIPPLE = "#1A8AB4F8"
    
    private const val PREFS_NAME = "PawGramPrefs"
    private const val PREF_HIDE_WELCOME = "hide_welcome"
    private const val PREF_LAST_CHECK = "last_check"
    private const val UPDATE_CHECK_INTERVAL_MS = 100_000_000L
    
    private const val JSON_URL = "https://raw.githubusercontent.com/pawjects/PawGram/refs/heads/main/updater/vX.json"
    private const val GITHUB_URL = "https://github.com/pawjects/PawGram"

    fun init(activity: Activity) {
        val prefs = getPrefs(activity)
        val hideWelcome = prefs.getBoolean(PREF_HIDE_WELCOME, false)
        val lastCheck = prefs.getLong(PREF_LAST_CHECK, 0L)

        if (!hideWelcome) {
            showWelcomeDialog(activity)
        } else if (System.currentTimeMillis() - lastCheck > UPDATE_CHECK_INTERVAL_MS) { 
            FetchDialogDataTask(activity).execute(JSON_URL)
        }
    }

    private fun getPrefs(context: Context): SharedPreferences {
        return context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    }

    private fun showWelcomeDialog(activity: Activity) {
        val dialog = createBaseDialog(activity, forceModal = true)
        val card = createStockCard(activity)
        
        val title = createTextView(activity, "Welcome", COLOR_TEXT_PRIMARY, 22f, "sans-serif-medium").apply {
            setPadding(0, 0, 0, applyDimension(activity, 16f))
        }

        val message = createTextView(activity, "Join Community", COLOR_TEXT_SECONDARY, 14f, "sans-serif").apply {
            setLineSpacing(applyDimension(activity, 4f).toFloat(), 1.2f)
        }

        val btnContainer = createButtonContainer(activity)
        
        val btnGitHub = createStockButton(activity, "GitHub") { 
            openLink(activity, GITHUB_URL) 
        }
        
        val btnDismiss = createStockButton(activity, "Dismiss") {
            getPrefs(activity).edit().putBoolean(PREF_HIDE_WELCOME, true).apply()
            dialog.dismiss()
        }

        btnContainer.addView(btnGitHub)
        btnContainer.addView(btnDismiss)

        card.addView(title)
        card.addView(message)
        card.addView(btnContainer)

        dialog.setContentView(card)
        dialog.show()
    }

    private fun showUpdateDialog(activity: Activity, data: JSONObject) {
        val forceUpdate = data.optBoolean("ForceUpdate", false)
        val dialog = createBaseDialog(activity, forceModal = forceUpdate)
        val card = createStockCard(activity)

        val titleText = data.optString("Title", "Update available")
        val title = createTextView(activity, titleText, COLOR_TEXT_PRIMARY, 22f, "sans-serif-medium")

        val versionText = "Version " + data.optString("Version", "")
        val version = createTextView(activity, versionText, COLOR_ACCENT, 14f).apply {
            setPadding(0, applyDimension(activity, 4f), 0, applyDimension(activity, 16f))
        }

        val messageText = data.optString("Changelog", data.optString("Message", ""))
        val message = createTextView(activity, messageText, COLOR_TEXT_SECONDARY, 14f, "sans-serif")

        val btnContainer = createButtonContainer(activity)

        if (!forceUpdate) {
            val btnLater = createStockButton(activity, "Later") { dialog.dismiss() }
            btnContainer.addView(btnLater)
        }

        val btnUpdate = createStockButton(activity, "Update") {
            openLink(activity, data.optString("UpdateLink", ""))
        }.apply {
            setTextColor(Color.parseColor(COLOR_BG))
            background = GradientDrawable().apply {
                setColor(Color.parseColor(COLOR_ACCENT))
                cornerRadius = applyDimension(activity, 8f).toFloat()
            }
        }

        btnContainer.addView(btnUpdate)

        card.addView(title)
        card.addView(version)
        card.addView(message)
        card.addView(btnContainer)

        dialog.setContentView(card)
        dialog.show()
    }

    private fun createBaseDialog(activity: Activity, forceModal: Boolean): Dialog {
        return Dialog(activity).apply {
            requestWindowFeature(Window.FEATURE_NO_TITLE)
            window?.setBackgroundDrawable(ColorDrawable(Color.TRANSPARENT))
            setCancelable(!forceModal)
            setCanceledOnTouchOutside(!forceModal)
        }
    }

    private fun createStockCard(context: Context): LinearLayout {
        return LinearLayout(context).apply {
            orientation = LinearLayout.VERTICAL
            val pad = applyDimension(context, 24f)
            setPadding(pad, pad, pad, pad)
            background = GradientDrawable().apply {
                setColor(Color.parseColor(COLOR_BG))
                cornerRadius = applyDimension(context, 16f).toFloat()
                setStroke(applyDimension(context, 1f), Color.parseColor(COLOR_BTN_RIPPLE))
            }
            layoutParams = FrameLayout.LayoutParams(
                applyDimension(context, 320f), 
                ViewGroup.LayoutParams.WRAP_CONTENT
            ).apply {
                gravity = Gravity.CENTER
            }
        }
    }

    private fun createTextView(
        context: Context, 
        textVal: String, 
        colorHex: String, 
        sizeSp: Float, 
        fontFamily: String = "sans-serif"
    ): TextView {
        return TextView(context).apply {
            text = textVal
            setTextColor(Color.parseColor(colorHex))
            textSize = sizeSp
            typeface = Typeface.create(fontFamily, Typeface.NORMAL)
        }
    }

    private fun createButtonContainer(context: Context): LinearLayout {
        return LinearLayout(context).apply {
            orientation = LinearLayout.HORIZONTAL
            gravity = Gravity.END
            setPadding(0, applyDimension(context, 24f), 0, 0)
        }
    }

    @SuppressLint("ClickableViewAccessibility")
    private fun createStockButton(context: Context, textVal: String, onClick: () -> Unit): TextView {
        return TextView(context).apply {
            text = textVal
            setTextColor(Color.parseColor(COLOR_ACCENT))
            textSize = 14f
            typeface = Typeface.create("sans-serif-medium", Typeface.NORMAL)
            val padX = applyDimension(context, 16f)
            val padY = applyDimension(context, 8f)
            setPadding(padX, padY, padX, padY)
            
            background = GradientDrawable().apply {
                setColor(Color.TRANSPARENT)
                cornerRadius = applyDimension(context, 8f).toFloat()
            }

            setOnClickListener { onClick() }

            setOnTouchListener { v, event ->
                when (event.action) {
                    MotionEvent.ACTION_DOWN -> {
                        (v.background as GradientDrawable).setColor(Color.parseColor(COLOR_BTN_RIPPLE))
                    }
                    MotionEvent.ACTION_UP, MotionEvent.ACTION_CANCEL -> {
                        (v.background as GradientDrawable).setColor(Color.TRANSPARENT)
                    }
                }
                false
            }
        }
    }

    private fun openLink(context: Context, url: String) {
        if (url.isNotEmpty()) {
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
            context.startActivity(intent)
        }
    }

    private fun applyDimension(context: Context, dp: Float): Int {
        return TypedValue.applyDimension(
            TypedValue.COMPLEX_UNIT_DIP,
            dp,
            context.resources.displayMetrics
        ).toInt()
    }

    @Suppress("DEPRECATION")
    private class FetchDialogDataTask(private val activity: Activity) : AsyncTask<String, Void, String>() {
        override fun doInBackground(vararg params: String): String? {
            return try {
                val url = URL(params[0])
                val connection = url.openConnection() as HttpURLConnection
                connection.requestMethod = "GET"
                connection.connectTimeout = 5000
                
                if (connection.responseCode == HttpURLConnection.HTTP_OK) {
                    val reader = BufferedReader(InputStreamReader(connection.inputStream))
                    val response = StringBuilder()
                    var line: String?
                    while (reader.readLine().also { line = it } != null) {
                        response.append(line)
                    }
                    reader.close()
                    response.toString()
                } else {
                    null
                }
            } catch (e: Exception) {
                e.printStackTrace()
                null
            }
        }

        override fun onPostExecute(result: String?) {
            super.onPostExecute(result)
            if (result != null && !activity.isFinishing) {
                try {
                    val jsonObject = JSONObject(result)
                    
                    getPrefs(activity)
                        .edit()
                        .putLong(PREF_LAST_CHECK, System.currentTimeMillis())
                        .apply()
                        
                    showUpdateDialog(activity, jsonObject)
                } catch (e: Exception) {
                    e.printStackTrace()
                }
            }
        }
    }
}
