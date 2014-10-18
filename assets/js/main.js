$(document).ready(function () {
    var socket = io.connect('://mjolken.se:7000');
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