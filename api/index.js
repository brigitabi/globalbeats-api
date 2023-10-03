const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.send('App is running!');
});

app.listen(process.env.PORT || 4000, () => {
  console.log('App running on port ' + process.env.PORT);
});
