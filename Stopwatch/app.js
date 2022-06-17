var btnStart = document.getElementById('button-start')
var btnStop = document.getElementById('button-stop')
var btnReset = document.getElementById('button-reset')
var minute = document.getElementById('minutes')
var second = document.getElementById('seconds')
var startInterval

btnStart.addEventListener('click', start)
btnStop.addEventListener('click', stop)
btnReset.addEventListener('click', reset)

function start() {
    btnStart.disabled = true
    startInterval = setInterval(function () {
        second.innerText = (parseInt(second.innerText) + 1).toString().padStart(2, '0')
        if (second.innerText == 60) {
            minute.innerText = (parseInt(minute.innerText) + 1).toString().padStart(2, '0')
            second.innerText = "00"
        }
    }, 1000)
}

function stop(){
    btnStart.disabled = false
    clearInterval(startInterval)
}

function reset(){
    btnStart.disabled = false
    minute.innerText = "00"
    second.innerText = "00"
    clearInterval(startInterval)
}

