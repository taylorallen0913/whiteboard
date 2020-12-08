const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('Hello World!');
})

io.on('connection', (socket) => {
    console.log('User connected to socket successfully.')
})

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
})