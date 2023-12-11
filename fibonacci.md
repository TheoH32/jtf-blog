---
layout: post
title: Fibonacci Sequence
type: ccc
courses: { csa: {week: 0} }
permalink: /fib
---

<style>
    body {
        margin: 0;
        font-family: Arial, sans-serif;
    }

    .sort-container {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        background-color: #f0f0f0;
        white-space: nowrap;
    }

    .bar {
        position: relative;
        width: 30px;
        background-color: #3498db;
        margin: 0 2px;
        transition: height 0.3s ease, background-color 0.3s ease;
    }

    .bar-value {
        position: absolute;
        bottom: -20px; /* Adjust the value's position as needed */
        text-align: center;
        width: 100%;
        color: white;
    }

    #nForm {
        text-align: center;
        margin: 50px;
    }
</style>

<div class="sort-container">
    <!-- Bars will be dynamically added here -->
</div>


<form id="nForm">
    <label for="barCount">Number of Bars:</label>
    <input type="number" id="barCount" name="barCount" min="1" value="1">
    <button type="button" onclick="createBars()">Create Bars</button>
</form>

<div id="times"></div>

<script>
    function createBars() {
        var barCount = document.getElementById('barCount').value;
        var container = document.querySelector('.sort-container');
        var timeDiv = document.getElementById('times');
        container.innerHTML = '';

        var forLoopTime = measureExecutionTime(() => fibForLoop(barCount));
        var whileLoopTime = measureExecutionTime(() => fibWhileLoop(barCount));
        var recursionTime = measureExecutionTime(() => fibRecursion(barCount));

        for (var i = 1; i <= barCount; i++) {
            var bar = document.createElement('div');
            bar.className = 'bar';
            bar.id = 'bar' + i;

            // Limit the height to 400 pixels
            var fibonacciHeight = Math.min(fibonacci(i) * 10, 400);
            bar.style.height = `${fibonacciHeight}px`;

            var barValue = document.createElement('div');
            barValue.className = 'bar-value';
            barValue.innerHTML = fibonacci(i);
            bar.appendChild(barValue);

            container.appendChild(bar);
        }

        // Call the functions and display the times
        timeDiv.innerHTML = '';
        timeDiv.innerHTML = '<h2>ms = milliseconds</h2>';
        displayTime('fibForLoop', forLoopTime);
        displayTime('fibWhileLoop', whileLoopTime);
        displayTime('fibRecursion', recursionTime);
    }

    function displayTime(functionName, time) {
        var timeDiv = document.getElementById('times');
        var timeDisplay = document.createElement('div');
        timeDisplay.innerHTML = `${functionName}: ${time.toFixed(2)}ms`; // Display time in milliseconds with 2 decimal places
        timeDiv.appendChild(timeDisplay);
    }

    function measureExecutionTime(func) {
        var startTime = performance.now();
        func();
        var endTime = performance.now();
        return endTime - startTime;
    }

    // Just for creating the bars with an array
    function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    // These functions are for seeing how long each way would have taken
    function fibForLoop(terms) {
        var a = 0, b = 1;
        for (var i = 2; i <= terms; i++) {
            var temp = a + b;
            a = b;
            b = temp;
        }
    }

    function fibWhileLoop(terms) {
        var a = 0, b = 1, i = 2;
        while (i <= terms) {
            var temp = a + b;
            a = b;
            b = temp;
            i++;
        }
    }

    function fibRecursion(terms) {
        function fibonacci(n) {
            if (n <= 1) {
                return n;
            } else {
                return fibonacci(n - 1) + fibonacci(n - 2);
            }
        }

        fibonacci(terms);
    }
</script>