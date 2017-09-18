var $sound1 = document.querySelector('#c-note')
var $sound2 = document.querySelector('#cs-note')
var $sound3 = document.querySelector('#d-note')
var $start = document.querySelector('#startbutton')
var $stop = document.querySelector('#stopbutton')
var sound1 = new Audio('sounds/kick1.wav')
var sound2 = new Audio('sounds/snare1.wav')
var sound3 = new Audio('sounds/hihat.wav')

$sound1.addEventListener('click', function () {
  sound1.play()
}, false)
$sound2.addEventListener('click', function () {
  sound2.play()
}, false)
$sound3.addEventListener('click', function () {
  sound3.play()
}, false)

document.getElementById('pads').addEventListener('click', function(event){
  if(event.target && event.target.matches('button')) {
    event.target.classList.toggle('play')
  }
})

var currentCol = 0
var interval = 0
var $buttons = document.querySelectorAll('button')
var started = false

function columnReader() {

  for (var i = 0; i < $buttons.length; i++) {
    var $row1 = $buttons[currentCol]
    var $row2 = $buttons[currentCol + 16]
    var $row3 = $buttons[currentCol + 32]
    if ($row1 !== undefined && $row1.classList.contains('play')) {
        sound1.play()
    }
    if ($row2 !== undefined && $row2.classList.contains('play')) {
        sound2.play()
    }
    if ($row3 !== undefined && $row3.classList.contains('play')) {
        sound3.play()
    }
  }
  if (currentCol === 15) {
    currentCol = 0
  } else {
    currentCol++
  }
}

function play() {
  if (started === false) {
    started = true
    interval = setInterval(columnReader, 250)
  }
}

function stop() {
  started = false
  clearInterval(interval)
  currentCol = 0
}

$start.addEventListener('click', play, false)
$stop.addEventListener('click', stop, false)
