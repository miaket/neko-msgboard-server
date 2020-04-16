const app = require('./src/config/custom-express');
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

io.on('connection', function (socket) {
  console.log(socket.id, ' just got in?');

  socket.on('disconnect', function () {
    console.log('someone just got out', socket.id);
  });

  socket.on('newChatMessage', function (msg) {
    console.log('msg: ', msg);
    io.emit('newChatMessage', msg);
  });
});

