$(document).ready(function () {
    var socket = io.connect('https://voting.mjolken.se');
    var votes = null
    var displayError = function () {

    }
    var displayError = function (error) {

    }
    socket.on('initial', function (data) {
        if (data.voted) {
            displayResults()
        }
    })

    socket.on('votes', function (data) {
        votes = data
    })

    socket.on('voteresult', function (data) {
        if (data.error) {
            displayError(data.error)
        }
        displayResults()
    })
})