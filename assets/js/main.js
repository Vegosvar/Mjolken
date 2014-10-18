var socket = io.connect('http://localhost:7000');
socket.on('votes', function (data) {
    console.log(data)
});
socket.emit('vote', { vote: 'yes' })