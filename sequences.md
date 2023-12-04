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
    background-color: #04AA6D;
    border: 1px solid green;
    color: white;
    padding: 10px 24px;
    cursor: pointer;
    float: left;
    transition: background-color 0.8s ease; /* Add animation to background color */
     transition: transform 0.3s ease;
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
    transform: scale(1.05) translate(0px, -3px);
  }


  .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }

  .btn-group-2 button {
  background-color: #04AA6D;
  border: 1px solid green;
  color: white;
  padding: 10px 24px;
  cursor: pointer;
  float: left;
  transition: background-color 0.7s ease; /* Add animation to background color */
  }

  .btn-group-2 button:not(:last-child) {
    border-right: none; /* Prevent double borders */
  }

  /* Clear floats (clearfix hack) */
  .btn-group-2:after {
    content: "";
    clear: both;
    display: table;
  }

  /* Add a background color on hover */
  .btn-group-2 button:hover {
    background-color: #3e8e41;
    transform: scale(1.02) 1ms ease-in-out;
  }


  .btn-group-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }

  #leaderButton {
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #cf4a4a;
    color: white; /* White text */
    cursor: pointer; /* Pointer/hand icon */
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
  }

  .slidecontainer {
      border: 1px solid #ccc;
      justify-content: center;
      text-align: center;
  }

  #sortingTEXT,
  #termsTEXT,
  #timerTEXT {
    text-align: center;
  }

  .result div {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  .result div th, .result div td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  #inputRange {
    border: none !important;
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
    <input type="range" min="100" max="10000" value="100" class="slider" id="inputRange">
  </div>
  <!-- Value -->
  <p>Value: <span id="shownNumber"></span></p>
</div>

<div id="sorts" class="btn-group">
  <button id="Insertion" onclick="insertionClick()">Insertion</button>
  <button id="Merge" onclick="mergeClick()">Merge</button>
  <button id="Bubble" onclick="bubbleClick()">Bubble</button>
  <button id="Selection" onclick="selectionClick()">Selection</button>
</div>

<div class="btn-group-2">
  <button onclick="main()">Start Process</button>
</div>

<br>
<table class="result div">
  <thead>
    <tr>
      <th>Terms</th>
      <th>Sorting</th>
      <th>Timer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td id="termsTEXT"></td>
      <td id="sortingTEXT"></td>
      <td id="timerTEXT"></td>
    </tr>
  </tbody>
</table>
<script src="{{site.baseurl}}/assets/js/sequences.js"></script>