const express = require('express');
const app = express();
const sass = require('sass');
const path = require('path');
const { exec } = require('child_process');

exec('npm run compile:css', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(stdout);
});

app.use(express.static('public'));
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});