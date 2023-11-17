---
layout: post
title: Creating the css for the bars
type: ccc
courses: { csa: {week: 0} }
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

<script>
    function createBars() {
        var barCount = document.getElementById('barCount').value;
        var container = document.querySelector('.sort-container');
        container.innerHTML = '';

        for (var i = 1; i <= barCount; i++) {
            var bar = document.createElement('div');
            bar.className = 'bar';
            bar.id = 'bar' + i;

            var fibonacciHeight = fibonacci(i) * 10;
            bar.style.height = `${fibonacciHeight}px`;

            var barValue = document.createElement('div');
            barValue.className = 'bar-value';
            barValue.innerHTML = fibonacci(i);
            bar.appendChild(barValue);

            container.appendChild(bar);
        }
    }

    function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
</script>
