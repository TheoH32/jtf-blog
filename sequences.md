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

<div id="sorts" class="btn-group">
  <button id="Insertion">Insertion</button>
  <button id="Merge">Merge</button>
  <button id="Bubble">Bubble</button>
  <button id="Selection">Selection</button>
</div>

<div class="btn-group">
  <button onclick="main()">Start Process</button>
</div>


<div class="result div">
  <h1 id="sortingTEXT">Sorting:</h1>
  <h1 id="termTEXT">Terms:</h1>
  <h1 id="timerTEXT">Time:</h1>
</div>
<script>
const manualValueBool = new Boolean(false);
var sortGroup = document.getElementById("sorts");
var slider = document.getElementById("inputRange");
var output = document.getElementById("shownNumber");
var manualInput = document.getElementById("manualValue");
// Boolean values for sorting algorithms
var Insertion = false;
var Merge = false;
var Bubble = false;
var Selection = false;
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
}
// Function to handle button selection
function btnSelect(btn) {
  // Resetting all boolean values
  Insertion = false;
  Merge = false;
  Bubble = false;
  Selection = false;
  //deleting backgrounds
  const buttons = document.querySelectorAll('.btn-group button');
  buttons.forEach(button => button.classList.remove('btn-select'));
  // Setting the selected button's boolean value to true
  switch (btn) {
    case 'I':
      Insertion = true;
      document.getElementById("Insertion").classList.add('btn-select');
      break;
    case 'M':
      Merge = true;
      document.getElementById("Merge").classList.add('btn-select');
      break;
    case 'B':
      Bubble = true;
      document.getElementById("Bubble").classList.add('btn-select');
      break;
    case 'S':
      Selection = true;
      document.getElementById("Selection").classList.add('btn-select');
      break;
    default:
      break;
  }
  // Resetting background colors
  // Adding background color to the selected button
}
// Adding Event Listener for each button
document.getElementById("Insertion").addEventListener("click", function () { btnSelect("I"); });
document.getElementById("Merge").addEventListener("click", function () { btnSelect("M"); });
document.getElementById("Bubble").addEventListener("click", function () { btnSelect("B"); });
document.getElementById("Selection").addEventListener("click", function () { btnSelect("S"); });
function main() {
  let list = createArray();
  // Fisher-Yates shuffle
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  console.log(list);
  // Your existing main function logic...
}
function setManualValue() {
  const leaderValueBool = true;
  const manualValueBool = false;
  var value = parseInt(manualInput.value);
  if (value >= parseInt(slider.min) && value <= parseInt(slider.max)) {
    slider.value = value;
    output.innerHTML = value;
    termsText.innerHTML = "Terms: " + value;
  } else {
    alert("Please enter a value within the allowed range.");
  }
}
function leaderboardPlay() {
  slider.value = 1000;
  output.innerHTML = slider.value;
  termsText.innerHTML = "Terms: " + slider.value;
  const leaderValueBool = true;
  const manualValueBool = false;
}
function createArray() {
  let n = slider.value;
  let array = []
  for (i = 0; i < n; i++) {
    array.push(i);
  }
  return array;
}
</script>
