const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let themePreference = "light"; // Default theme

app.get("/api/theme", (req, res) => {
  res.json({ theme: themePreference });
});

app.post("/api/theme", (req, res) => {
  const { theme } = req.body;
  if (theme === "light" || theme === "dark") {
    themePreference = theme;
    res.json({ message: "Theme updated successfully" });
  } else {
    res.status(400).json({ error: "Invalid theme" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
