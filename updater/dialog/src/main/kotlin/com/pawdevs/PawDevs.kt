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
import android.util.DisplayMetrics
import android.util.TypedValue
import android.view.Gravity
import android.view.MotionEvent
import android.view.View
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

@SuppressLint("StaticFieldLeak")
object pawdevs {

    private const val COLOR_BG = "#202124"
    private const val COLOR_ACCENT = "#8AB4F8"
    private const val COLOR_TEXT_PRIMARY = "#E8EAED"
    private const val COLOR_TEXT_SECONDARY = "#9AA0A6"
    
    private const val PREFS_NAME = "PawGramPrefs"
    private const val JSON_URL = "https://raw.githubusercontent.com/pawjects/PawGram/refs/heads/main/updater/vX.json"

    fun init(activity: Activity) {
        val prefs: SharedPreferences = activity.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        val hideWelcome = prefs.getBoolean("hide_welcome", false)
        val lastCheck = prefs.getLong("last_check", 0L)

        // Basic time check logic (simplified from the timestamp hints in the dump)
        if (!hideWelcome) {
            showStockWelcomeDialog(activity)
        } else if (System.currentTimeMillis() - lastCheck > 100000000) { 
            FetchDialogDataTask(activity).execute(JSON_URL)
        }
    }

    private fun showStockWelcomeDialog(activity: Activity) {
        val dialog = Dialog(activity)
        dialog.requestWindowFeature(Window.FEATURE_NO_TITLE)
        dialog.window?.setBackgroundDrawable(ColorDrawable(Color.TRANSPARENT))
        dialog.setCancelable(false)
        dialog.setCanceledOnTouchOutside(false)

        val card = createStockCard(activity)
        
        val title = TextView(activity).apply {
            text = "Welcome"
            setTextColor(Color.parseColor(COLOR_TEXT_PRIMARY))
            textSize = 22f
            typeface = Typeface.create("sans-serif-medium", Typeface.NORMAL)
            setPadding(0, 0, 0, applyDimension(activity, 16f))
        }

        val message = TextView(activity).apply {
            text = "Join Community"
            setTextColor(Color.parseColor(COLOR_TEXT_SECONDARY))
            textSize = 14f
            typeface = Typeface.create("sans-serif", Typeface.NORMAL)
            setLineSpacing(applyDimension(activity, 4f).toFloat(), 1.2f)
        }

        val btnContainer = LinearLayout(activity).apply {
            orientation = LinearLayout.HORIZONTAL
            gravity = Gravity.END
            setPadding(0, applyDimension(activity, 24f), 0, 0)
        }

        val btnGitHub = createStockButton(activity, "GitHub").apply {
            setOnClickListener { openLink(activity, "https://github.com/pawjects/PawGram") }
        }

        val btnDismiss = createStockButton(activity, "Dismiss").apply {
            setOnClickListener {
                activity.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).edit().putBoolean("hide_welcome", true).apply()
                dialog.dismiss()
            }
        }

        btnContainer.addView(btnGitHub)
        btnContainer.addView(btnDismiss)

        card.addView(title)
        card.addView(message)
        card.addView(btnContainer)

        dialog.setContentView(card)
        dialog.show()
    }

    private fun showStockUpdateDialog(activity: Activity, data: JSONObject) {
        val dialog = Dialog(activity)
        dialog.requestWindowFeature(Window.FEATURE_NO_TITLE)
        dialog.window?.setBackgroundDrawable(ColorDrawable(Color.TRANSPARENT))
        
        val forceUpdate = data.optBoolean("ForceUpdate", false)
        dialog.setCancelable(!forceUpdate)
        dialog.setCanceledOnTouchOutside(!forceUpdate)

        val card = createStockCard(activity)

        val title = TextView(activity).apply {
            text = data.optString("Title", "Update available")
            setTextColor(Color.parseColor(COLOR_TEXT_PRIMARY))
            textSize = 22f
            typeface = Typeface.create("sans-serif-medium", Typeface.NORMAL)
        }

        val version = TextView(activity).apply {
            text = "Version " + data.optString("Version", "")
            setTextColor(Color.parseColor(COLOR_ACCENT))
            textSize = 14f
            setPadding(0, applyDimension(activity, 4f), 0, applyDimension(activity, 16f))
        }

        val message = TextView(activity).apply {
            text = data.optString("Changelog", data.optString("Message", ""))
            setTextColor(Color.parseColor(COLOR_TEXT_SECONDARY))
            textSize = 14f
            typeface = Typeface.create("sans-serif", Typeface.NORMAL)
        }

        val btnContainer = LinearLayout(activity).apply {
            orientation = LinearLayout.HORIZONTAL
            gravity = Gravity.END
            setPadding(0, applyDimension(activity, 24f), 0, 0)
        }

        if (!forceUpdate) {
            val btnLater = createStockButton(activity, "Later").apply {
                setOnClickListener { dialog.dismiss() }
            }
            btnContainer.addView(btnLater)
        }

        val btnUpdate = createStockButton(activity, "Update").apply {
            setTextColor(Color.parseColor(COLOR_BG))
            background = GradientDrawable().apply {
                setColor(Color.parseColor(COLOR_ACCENT))
                cornerRadius = applyDimension(activity, 8f).toFloat()
            }
            setOnClickListener { openLink(activity, data.optString("UpdateLink", "")) }
        }

        btnContainer.addView(btnUpdate)

        card.addView(title)
        card.addView(version)
        card.addView(message)
        card.addView(btnContainer)

        dialog.setContentView(card)
        dialog.show()
    }

    private fun createStockCard(context: Context): LinearLayout {
        return LinearLayout(context).apply {
            orientation = LinearLayout.VERTICAL
            val pad = applyDimension(context, 24f)
            setPadding(pad, pad, pad, pad)
            background = GradientDrawable().apply {
                setColor(Color.parseColor(COLOR_BG))
                cornerRadius = applyDimension(context, 16f).toFloat()
                setStroke(applyDimension(context, 1f), Color.parseColor("#1A8AB4F8"))
            }
            layoutParams = FrameLayout.LayoutParams(
                applyDimension(context, 320f), 
                ViewGroup.LayoutParams.WRAP_CONTENT
            ).apply {
                gravity = Gravity.CENTER
            }
        }
    }

    @SuppressLint("ClickableViewAccessibility")
    private fun createStockButton(context: Context, textVal: String): TextView {
        return TextView(context).apply {
            text = textVal
            setTextColor(Color.parseColor(COLOR_ACCENT))
            textSize = 14f
            typeface = Typeface.create("sans-serif-medium", Typeface.NORMAL)
            val padX = applyDimension(context, 16f)
            val padY = applyDimension(context, 8f)
            setPadding(padX, padY, padX, padY)
            
            val defaultBg = GradientDrawable().apply {
                setColor(Color.TRANSPARENT)
                cornerRadius = applyDimension(context, 8f).toFloat()
            }
            background = defaultBg

            setOnTouchListener { v, event ->
                when (event.action) {
                    MotionEvent.ACTION_DOWN -> {
                        (v.background as GradientDrawable).setColor(Color.parseColor("#1A8AB4F8"))
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
    private class FetchDialogDataTask(val activity: Activity) : AsyncTask<String, Void, String>() {
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
                } else null
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
                    
                    activity.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
                        .edit()
                        .putLong("last_check", System.currentTimeMillis())
                        .apply()
                        
                    showStockUpdateDialog(activity, jsonObject)
                } catch (e: Exception) {
                    e.printStackTrace()
                }
            }
        }
    }
}
