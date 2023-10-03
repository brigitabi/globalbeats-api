const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv');

const app = express();

const apiKey = process.env.REACT_APP_API_KEY;

const requests = {
  topHeadlines: `https://newsapi.org/v2/top-headlines`,
  everything: `https://newsapi.org/v2/everything`,
};

app.use(cors());

app.get('/', (req, res) => {
  res.send('App is running!');
});

app.get('/topheadlines', async (req, res) => {
  try {
    const response = await axios.get(requests.topHeadlines, {
      params: { apiKey, ...req.query },
    });
    res.status(response.status);
    res.set(response.headers);
    res.send(response.data);
  } catch (e) {
    res.status(500).send('There was an error fetching Top Headlines');
  }
});

app.get('/everything', async (req, res) => {
  try {
    const response = await axios.get(requests.everything, {
      params: { apiKey, ...req.query },
    });
    res.status(response.status);
    res.set(response.headers);
    res.send(response.data);
  } catch (e) {
    res.status(500).send('There was an error fetching Everything');
  }
});

app.listen(4000, () => {
  console.log('App running on port 4000');
});