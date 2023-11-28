---
layout: post
title: Sequences
type: ccc
courses: { csa: {week: 0} }
---

<style>
.slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: white;
  outline: none;
  opacity: 1;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #04AA6D;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #04AA6D;
  cursor: pointer;
}

#manualValue {
    color: black;
}

.btn-group button {
  background-color: #04AA6D; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}

.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}

/* Add a background color on hover */
.btn-group button:hover {
  background-color: #3e8e41;
}

.btn-group {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}

#leaderButton {
  padding: 5px;
  margin-bottom: 10px;
}

.timeDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}

.manual-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}

.manual-container label {
  margin-right: 10px;
}

.slider-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
}

.slidecontainer {
    border: 1px solid #ccc;
    justify-content: center;
    text-align: center;
}
</style>

<div class="slidecontainer">
  <div class="manual-container">
    <!-- Manual Value -->
    <div>
      <label for="manualValue">Manual Number:</label>
      <input type="number" id="manualValue" min="100" max="1000">
      <button onclick="setManualValue()">Set Value</button>
    </div>
    <!-- Leaderboard -->
    <button id="leaderButton" onclick="leaderboardPlay()">Leaderboard Testing</button>
  </div>
  <div class="slider-container">
    <!-- Slider -->
    <input type="range" min="100" max="1000" value="100" class="slider" id="inputRange">
  </div>
  <!-- Value -->
  <p>Value: <span id="shownNumber"></span></p>
</div>

<div class="btn-group">
  <button >Sequence</button>
  <button>Sequence</button>
  <button>Sequence</button>
  <button>Sequence</button>
</div>


<div class="result div">
  <h1 id="sortingTEXT">Sorting:</h1>
  <h1 id="termTEXT">Terms:</h1>
  <h1 id="timerTEXT">Time:</h1>
</div>

<script>

const manualValueBool = new Boolean(false);

var slider = document.getElementById("inputRange");
var output = document.getElementById("shownNumber");
var manualInput = document.getElementById("manualValue");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function setManualValue() {
  const leaderValueBool = true;
  const manualValueBool = false;
  var value = parseInt(manualInput.value);
  if (value >= parseInt(slider.min) && value <= parseInt(slider.max)) {
    slider.value = value;
    output.innerHTML = value;
  } else {
    alert("Please enter a value within the allowed range.");
  }
}

function leaderboardPlay() {
  slider.value = 500;
  output.innerHTML = slider.value;
  const leaderValueBool = true;
  const manualValueBool = false;
}
</script>
