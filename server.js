const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use("/wiki", express.static(path.join(__dirname, "website", "wiki")));
app.use(express.static(path.join(__dirname, "website")));

app.get("/wiki*", (req, res) => {
  res.sendFile(path.join(__dirname, "website", "wiki", "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "website", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
