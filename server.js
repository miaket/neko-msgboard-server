const app = require('./src/config/custom-express');
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

io.on('connection', function (socket) {
  console.log(socket.id, 'did someone just get in?');

  socket.on('disconnect', function () {
    console.log('someone just got out');
  });

  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
  });
});

