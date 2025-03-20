const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// GET /?username=<username>
// Returns a folder list relevant to the provided username.
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
