const express = require('express')
const app = express()

const payload = require('./payload')

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.send(payload)
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!')
})
