var $sound1 = document.querySelector('#sound1')
var $sound2 = document.querySelector('#sound2')
var $td = document.querySelector('td')

$sound1.addEventListener('click', function() {
  var $sound1 = new Audio('sounds/kick1.wav')
  $sound1.play()
}, false)

$sound2.addEventListener('click', function() {
  var $sound2 = new Audio('sounds/snare1.wav')
  $sound2.play()
}, false)

function createPlay() {
  $td.classList.toggle('play')
}

$td.addEventListener('click', createPlay)
