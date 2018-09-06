require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database-mongo');
const { searchWalmart } = require('../helpers/walmart.js');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', (req, res) => {
  items.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/search', (req, res) => {
  searchWalmart(req.body.searchInput, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/addItem', (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});

