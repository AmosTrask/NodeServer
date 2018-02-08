const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());

const formations = require('./json_files/formations');
const formation0 = require('./json_files/formation0');
const formation1 = require('./json_files/formation1');
const formation2 = require('./json_files/formation2');
const chapter0 =  require('./json_files/chapter0');
const chapter1 =  require('./json_files/chapter1');
const chapter2 =  require('./json_files/chapter2');

const chaptersForm0 = require('./json_files/chaptersForm0');

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

app.get('/api/chapters/0', function (req, res) {
  res.send(chaptersForm0);
});

app.get('/api/chapter/0', function (req, res) {
  res.send(chapter0);
});

app.get('/api/chapter/1', function (req, res) {
  res.send(chapter1);
});

app.get('/api/chapter/2', function (req, res) {
  res.send(chapter2);
});

app.post('/api/formation/add', function (req, res){
  res.send(formation1);
});

app.put('/api/formation/1/edit', function (req, res){
  res.send(formation1);
});

app.post('/api/formation/1/addChapter', function (req, res){
  res.send(chapter2);
});

app.delete('/api/chapter/2', function (req, res){
  res.send('');
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!')
});
