const snare = document.getElementById('snare');
const bass = document.getElementById('bass');
const cymbal = document.getElementById('cymbal');
const hiHat = document.getElementById('hiHat');
const highTom = document.getElementById('highTom');
const midTom = document.getElementById('midTom');
const floorTom = document.getElementById('floorTom');
const drumSticks = document.getElementById('drumSticks')
const sampleBeat1 = document.getElementById('sampleBeat1');
const sampleBeat2 = document.getElementById('sampleBeat2');
const sampleBeat3 = document.getElementById('sampleBeat3');
const sampleBeat4 = document.getElementById('sampleBeat4');
const electonicBeat1 = document.getElementById('electronicBeat1');
const electonicBeat2 = document.getElementById('electronicBeat2');
const electonicBeat3 = document.getElementById('electronicBeat3');
const electonicBeat4 = document.getElementById('electronicBeat4');

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

drumSticks.addEventListener('click', () => {
  new Audio('sounds/drumSticks.mp3').play();
})

sampleBeat1.addEventListener('click', () => {
  new Audio('sounds/sampleOne.mp3').play();
})

sampleBeat2.addEventListener('click', () => {
  new Audio('sounds/sampleTwo.mp3').play();
})

sampleBeat3.addEventListener('click', () => {
  new Audio('sounds/sampleThree.mp3').play();
})

sampleBeat4.addEventListener('click', () => {
  new Audio('sounds/sampleFour.mp3').play();
})

electonicBeat1.addEventListener('click', () => {
  new Audio('sounds/electronicOne.mp3').play();
})

electonicBeat2.addEventListener('click', () => {
  new Audio('sounds/electronicTwo.mp3').play();
})

electonicBeat3.addEventListener('click', () => {
  new Audio('sounds/electronicThree.mp3').play();
})

electonicBeat4.addEventListener('click', () => {
  new Audio('sounds/electronicFour.mp3').play();
})