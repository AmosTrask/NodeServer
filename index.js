const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());

const formations = require('./formations');
const formation0 = require('./formation0');
const formation1 = require('./formation1');
const formation2 = require('./formation2');

app.set('port', (process.env.PORT || 3000));

app.get('/api/formations', function (req, res) {
  res.send(formations);
});

app.get('/api/formation/0', function (req, res) {
  res.send(formation0);
});

app.get('/api/formation/1', function (req, res) {
  res.send(formation1);
});

app.get('/api/formation/2', function (req, res) {
  res.send(formation2);
});


app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!')
});
