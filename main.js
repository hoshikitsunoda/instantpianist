var $start = document.querySelector('#startbutton')
var $stop = document.querySelector('#stopbutton')

var $sound1 = document.querySelector('#c-note')
var $sound2 = document.querySelector('#d-note')
var $sound3 = document.querySelector('#e-note')
var $sound4 = document.querySelector('#f-note')
var $sound5 = document.querySelector('#g-note')
var $sound6 = document.querySelector('#a-note')
var $sound7 = document.querySelector('#b-note')
var $sound8 = document.querySelector('#kick-note')
var $sound9 = document.querySelector('#snare-note')
var $sound10 = document.querySelector('#hihat-note')
var $sound11 = document.querySelector('#clap-note')
var $sound12 = document.querySelector('#shaker-note')

var sound1 = new Audio('sounds/synth/C.mp3')
var sound2 = new Audio('sounds/synth/D.mp3')
var sound3 = new Audio('sounds/synth/E.mp3')
var sound4 = new Audio('sounds/synth/F.mp3')
var sound5 = new Audio('sounds/synth/G.mp3')
var sound6 = new Audio('sounds/synth/A.mp3')
var sound7 = new Audio('sounds/synth/B.mp3')
var sound8 = new Audio('sounds/drums/909BD_Sweet01.wav')
var sound9 = new Audio('sounds/drums/909SD_T1T3S6V2_X.wav')
var sound10 = new Audio('sounds/drums/909HH_amp02.wav')
var sound11 = new Audio('sounds/drums/909ClapV1_Orig.wav')
var sound12 = new Audio('sounds/drums/shaker.mp3')

$sound1.addEventListener('click', function () {
  sound1.play()
}, false)
$sound2.addEventListener('click', function () {
  sound2.play()
}, false)
$sound3.addEventListener('click', function () {
  sound3.play()
}, false)
$sound4.addEventListener('click', function () {
  sound4.play()
}, false)
$sound5.addEventListener('click', function () {
  sound5.play()
}, false)
$sound6.addEventListener('click', function () {
  sound6.play()
}, false)
$sound7.addEventListener('click', function () {
  sound7.play()
}, false)
$sound8.addEventListener('click', function () {
  sound8.play()
}, false)
$sound9.addEventListener('click', function () {
  sound9.play()
}, false)
$sound10.addEventListener('click', function () {
  sound10.play()
}, false)
$sound11.addEventListener('click', function () {
  sound11.play()
}, false)
$sound12.addEventListener('click', function () {
  sound12.play()
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
    var $row4 = $buttons[currentCol + 48]
    var $row5 = $buttons[currentCol + 64]
    var $row6 = $buttons[currentCol + 80]
    var $row7 = $buttons[currentCol + 96]
    var $row8 = $buttons[currentCol + 112]
    var $row9 = $buttons[currentCol + 128]
    var $row10 = $buttons[currentCol + 144]
    var $row11 = $buttons[currentCol + 160]
    var $row12 = $buttons[currentCol + 176]

    if ($row1 !== undefined && $row1.classList.contains('play')) {
        sound1.play()
    }
    if ($row2 !== undefined && $row2.classList.contains('play')) {
        sound2.play()
    }
    if ($row3 !== undefined && $row3.classList.contains('play')) {
        sound3.play()
    }
    if ($row4 !== undefined && $row4.classList.contains('play')) {
        sound4.play()
    }
    if ($row5 !== undefined && $row5.classList.contains('play')) {
        sound5.play()
    }
    if ($row6 !== undefined && $row6.classList.contains('play')) {
        sound6.play()
    }
    if ($row7 !== undefined && $row7.classList.contains('play')) {
        sound7.play()
    }
    if ($row8 !== undefined && $row8.classList.contains('play')) {
        sound8.play()
    }
    if ($row9 !== undefined && $row9.classList.contains('play')) {
        sound9.play()
    }
    if ($row10 !== undefined && $row10.classList.contains('play')) {
        sound10.play()
    }
    if ($row11 !== undefined && $row11.classList.contains('play')) {
        sound11.play()
    }
    if ($row12 !== undefined && $row12.classList.contains('play')) {
        sound12.play()
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

var $sphere = document.querySelector('nav')

function spark() {
  $sphere.classList.add('spark')
}

function sparkStop() {
  $sphere.classList.remove('spark')
}

function spinToggle(event) {
  var $spins = document.querySelectorAll('.add')
  for (var i = 0; i < $spins.length; i++) {
    var $spin = $spins[i]
    $spin.classList.toggle('spin')
  }
}

function spin(event) {
  var $spins = document.querySelectorAll('.add')
  for (var i = 0; i < $spins.length; i++) {
    var $spin = $spins[i]
    $spin.classList.add('spin')
  }
}

function spinStop(event) {
  var $spins = document.querySelectorAll('.add')
  for (var i = 0; i < $spins.length; i++) {
    var $spin = $spins[i]
    $spin.classList.remove('spin')
  }
}

$sphere.addEventListener('click', spinToggle, false)

$start.addEventListener('click', play, false)
$start.addEventListener('click', spark, false)
$stop.addEventListener('click', stop, false)
$stop.addEventListener('click', sparkStop, false)
$stop.addEventListener('click', spinStop, false)
