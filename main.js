var $sound1 = document.querySelector('#sound1')
var $sound2 = document.querySelector('#sound2')
var $start = document.querySelector('#start')

$sound1.addEventListener('click', function() {
  var $sound1 = new Audio('sounds/kick1.wav')
  $sound1.play()
}, false)

document.getElementById('pads').addEventListener('click', function(event){
  if(event.target && event.target.matches('button')) {
    event.target.classList.toggle('play')
  }
})
