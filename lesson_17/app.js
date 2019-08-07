const express = require('express');
const request = require('request');
const app = express();

app.get('/currency', function(req, res) {
  res.send('Hi currency');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000');
});