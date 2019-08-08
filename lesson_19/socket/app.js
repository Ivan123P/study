// const app = require('express')();
// const http = require('http').Server(app);

// app.get('/', (req, res) => {
//   res.sendFile( __dirname + '/index.html' );
// });

// http.listen(3000, () => {
//   console.log('Server at localhost:3000');
// })

const app = require('express')();
const http = require('http').Server(app);
const socketIo = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

socketIo.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

http.listen(3000, () => {
  console.log('Server at localhost:3000');
})