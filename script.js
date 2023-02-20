const snare = document.getElementById('snare');
const bass = document.getElementById('bass');
const cymbal = document.getElementById('cymbal');
const hiHat = document.getElementById('hiHat');
const highTom = document.getElementById('highTom');
const midTom = document.getElementById('midTom');
const floorTom = document.getElementById('floorTom');

snare.addEventListener('click', () => {
  new Audio('sounds/snare.mp3').play();
})

bass.addEventListener('click', () => {
  new Audio('sounds/bass.mp3').play();
})

cymbal.addEventListener('click', () => {
  new Audio('sounds/cymbal.mp3').play();
})

hiHat.addEventListener('click', () => {
  new Audio('sounds/hiHat.mp3').play();
})

highTom.addEventListener('click', () => {
  new Audio('sounds/smallTom.mp3').play();
})

midTom.addEventListener('click', () => {
  new Audio('sounds/MidTom.mp3').play();
})

floorTom.addEventListener('click', () => {
  new Audio('sounds/floorTom.mp3').play();
})