const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv');

const app = express();

app.get('/test', (req, res) => {
  res.send('TESTTT is running!');
});

app.listen(process.env.PORT || 4000, () => {
  console.log('App running on port ' + process.env.PORT);
});
