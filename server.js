// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Hardcoded mapping: each username maps to a specific folder list
const folderMapping = {
  "rain@wso2.com": ["project A", "project B"],
  "user2@wso2.com": ["project c", "project A"],
  "alex@wso2.com": ["project D", "project B"],
  "jimy@wso2.com": ["project E"]
};

// GET /folders endpoint; expects a query parameter "username"
app.get('/folders', (req, res) => {
  const username = req.query.username;
  if (!username) {
    return res.status(400).json({ error: "username query parameter is required" });
  }
  // Look up folder list for the provided username; return empty array if not found.
  const folders = folderMapping[username] || [];
  res.json(folders);
});

app.listen(port, () => {
  console.log(`Folder Fetch API is running on port ${port}`);
});
