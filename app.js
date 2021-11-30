const lapBtn = document.getElementById('lapBtn');
// const timerMilliSec = document.getElementById('timerMillisec');
// const timerSec = document.getElementById('timerSec');
// const timerMins = document.getElementById('timerMins');
// const timerHrs = document.getElementById('timerHrs');
// const startBtn = document.getElementById('startBtn');
// const resetBtn = document.getElementById('resetBtn');
// const lapRecord = document.getElementById('lapRecord');
lapBtn.disabled = true;

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let displayMilisec = miliseconds;
let displaySec = seconds;
let displayMins = minutes;
let displayHours = hours;

let interval = null;

let status = "stopped";

let lapNow = null;

lapBtn.addEventListener('click', lap);
startBtn.addEventListener('click', startPause);
// startBtn.addEventListener('click', sound);

resetBtn.addEventListener('click', reset);

function start() {
  miliseconds++;

  if (miliseconds < 10) {
    displayMilisec = "0" + miliseconds.toString();
  }
  else {
    displayMilisec = miliseconds;
  }
  if (seconds < 10) {
    displaySec = "0" + seconds.toString();
  }
  else {
    displaySec = seconds;
  }

  if (minutes < 10) {
    displayMins = "0" + minutes.toString();
  }
  else {
    displayMins = minutes;
  } 

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  }
  else {
    displayHours = hours;
  }
  if (miliseconds / 100 === 1) {
    seconds++;
    miliseconds = 0;

    if (seconds / 60 === 1) {
      minutes++;
      seconds = 0;

      if (minutes / 60 === 1) {
        hours++;
        minutes = 0;
      }
    }
  }



  document.getElementById("timerMilisec").innerHTML = displayMilisec;
  document.getElementById("timerSec").innerHTML = displaySec;
  document.getElementById("timerMins").innerHTML = displayMins;
  document.getElementById("timerHrs").innerHTML = displayHours;

}

function soundplay() {
  const sound = document.getElementById("ado");
  sound.play();
  // var inputVal = document.getElementById("inputVal").value;
}
function soundpause() {
  const sound = document.getElementById("ado");
  sound.pause();
  // var inputVal = document.getElementById("inputVal").value;
}

function startPause() {
  if (status === "stopped") {
    lapBtn.disabled = false;
    interval = setInterval(start, 10);
    soundplay();
    startBtn.innerHTML = "Pause";
    status = "started";
  } else {
    lapBtn.disabled = true;
    soundpause();
    clearInterval(interval);
    startBtn.innerHTML = "Start";
    status = "stopped";
  }
}

function reset() {
  lapBtn.disabled = true;
  soundpause();
  clearInterval(interval);
  miliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayMilisec = 0;
  displaySec = 0;
  displayMins = 0;
  displayHours = 0;
  document.getElementById("timerMilisec").innerHTML = "00";
  document.getElementById("timerSec").innerHTML = "00";
  document.getElementById("timerMins").innerHTML = "00";
  document.getElementById("timerHrs").innerHTML = "00";
  document.getElementById("startBtn").innerHTML = "Start";
  document.getElementById("lapRecord").innerHTML = '';
  status = "stopped";
}

function lap() {
// let lapHead = document.createElement('h1');
// lapHead.appendChild(document.createTextNode('Lap Record'));
// let head = document.querySelector('.lap-Heading');
// head.appendChild(lapHead);
// lapHead.className = "heading3";
// lapHead.style.fontFamily = 'sans-serif';

  // lapNow = `<p class="lap"> ${hours} : ${minutes} : ${seconds} : ${miliseconds}</p>`;
  lapNow = `<p class="lap"> ${displayHours} : ${displayMins} : ${displaySec} : ${displayMilisec}</p>`;
  lapRecord.innerHTML += lapNow;
  
  console.log(lapRecord);
}

var x = document.getElementById("ado");

function enableLoop() { 
  x.loop = true;
  x.load();
} 

function disableLoop() { 
  x.loop = false;
  x.load();
} 


