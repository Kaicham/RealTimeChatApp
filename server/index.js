const express = require('express');
const socketio = require('socket.io');
const http = require('http');

//Configuring the socket.io instance
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const router = require('./router')
const PORT = 8000

io.on('connection', (socket) => {
    console.log('We have a new connection!');

    socket.on('disconnect', () => {
        console.log('User has left!')
    })
})

app.use(router)

server.listen(PORT, () => console.log(`Server started at port ${PORT}`))