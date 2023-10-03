const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv');

const app = express();

app.get('/bri', (req, res) => {
  res.send('BRI is running!');
});

app.listen(process.env.PORT || 4000, () => {
  console.log('App running on port ' + process.env.PORT);
});
