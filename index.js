const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Define the base path that Choreo uses (should match component.yaml)
const basePath = '/folder-fetch-api/v1';

// Middleware to remove the base path if present
app.use((req, res, next) => {
  if (req.url.startsWith(basePath)) {
    req.url = req.url.slice(basePath.length) || '/';
  }
  next();
});

// GET /?username=<username>
app.get('/', (req, res) => {
  const username = req.query.username;
  let folderList = [];

  // Hard-coded folder mappings for each user.
  switch (username) {
    case 'rain@wso2.com':
      folderList = ['project A', 'project B'];
      break;
    case 'user2@wso2.com':
      folderList = ['project c', 'project A'];
      break;
    case 'alex@wso2.com':
      folderList = ['project D', 'project B'];
      break;
    case 'jimy@wso2.com':
      folderList = ['project E'];
      break;
    default:
      folderList = [];
  }

  res.json(folderList);
});

app.listen(port, () => {
  console.log(`Folder fetch API is listening on port ${port}`);
});
