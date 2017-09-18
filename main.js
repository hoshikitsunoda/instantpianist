var $sound1 = document.querySelector('#c-note')
var $sound2 = document.querySelector('#sound2')
var $start = document.querySelector('#startbutton')
var $stop = document.querySelector('#stopbutton')

function sound1() {
  var $sound1 = new Audio('sounds/kick1.wav')
  $sound1.play()
}

$sound1.addEventListener('click', sound1, false)

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
  var $button = $buttons[currentCol]
  if ($button !== undefined) {
    if ($button.classList.contains('play')) {
      sound1()
    }
    if (currentCol === 15) {
      currentCol = 0
    } else {
      currentCol++
    }
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
