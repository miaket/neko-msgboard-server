// const express = require('express');
const app = require('./src/config/custom-express');

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening to: ', host, port);
});
