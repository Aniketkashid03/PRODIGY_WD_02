let startTime;
let running = false;
let laps = [];
let lapIndex = 1;

function startStop() {
  if (!running) {
    startTime = new Date().getTime();
    running = true;
    document.getElementById("startStop").innerHTML = "Stop";
    update();
  } else {
    running = false;
    document.getElementById("startStop").innerHTML = "Start";
  }
}

function lap() {
  if (running) {
    let lapTime = new Date().getTime() - startTime;
    laps.push(lapTime);
    let lapDisplay = document.createElement("li");
    lapDisplay.innerHTML = "Lap " + lapIndex + ": " + formatTime(lapTime);
    document.getElementById("laps").appendChild(lapDisplay);
    lapIndex++;
  }
}

function reset() {
  startTime = null;
  running = false;
  document.getElementById("startStop").innerHTML = "Start";
  document.getElementById("display").innerHTML = "00:00:00";
  laps = [];
  lapIndex = 1;
  document.getElementById("laps").innerHTML = "";
}

function update() {
  if (running) {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    document.getElementById("display").innerHTML = formatTime(elapsedTime);
    setTimeout(update, 10);
  }
}

function formatTime(time) {
  let hours = Math.floor(time / 3600000);
  let minutes = Math.floor((time % 3600000) / 60000);
  let seconds = Math.floor((time % 60000) / 1000);
  let milliseconds = Math.floor(time % 1000);

  return (
    (hours < 10 ? "0" : "") + hours + ":" +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds + "." +
    (milliseconds < 100 ? "0" : "") + (milliseconds < 10 ? "0" : "") + milliseconds
  );
}
