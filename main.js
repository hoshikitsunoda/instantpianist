var $sound1 = document.querySelector('#sound1')
var $sound2 = document.querySelector('#sound2')
var $start = document.querySelector('#start')

$sound1.addEventListener('click', function() {
  var $sound1 = new Audio('sounds/kick1.wav')
  $sound1.play()
}, false)

/*

$sound2.addEventListener('click', function() {
  var $sound2 = new Audio('sounds/snare1.wav')
  $sound2.play()
}, false)

var column = {
  current: 0,
  id: null
}

function play() {
  var trs = document.getElementsByTagName("tr")
  for(var i = 0; i < trs.length; i++){
    if(trs.getElementsByTagName("td").className.matches('play')){
      setInterval()
    }
  }
}

*/

document.getElementById('pads').addEventListener('click', function(event){
  if(event.target && event.target.matches('li')) {
    event.target.classList.toggle('play')
  }
})

/*

$start.addEventListener('click', play)

*/
