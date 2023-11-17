---
layout: post
title: Creating the css for the bars
type: ccc
courses: { csa: {week: 0} }
---

<div class="sort-container">
    <div class="bar" id="1"></div>
    <div class="bar" id="2"></div>
</div>

<style>
    .sort-container {
        display: flex;
        justify-content: center;
        align-items: flex-end; /* Align bars to the bottom of the container */
        height: 200px; /* Set a fixed height for better visualization */
        background-color: #f0f0f0; /* Optional background color for the container */
    }

    .bar {
        width: 50px; /* Adjust the width of each bar */
        height: 50px; /* This will be dynamically set in JavaScript based on the bar value */
        background-color: #3498db; /* Adjust the color of the bars */
        margin: 0 2px; /* Adjust the margin between bars */
    }
</style>

<script>
    function setHeight() {
        // Get all elements with the class 'bar' inside the 'sort-container'
        const bars = document.querySelectorAll('.sort-container .bar');

        // Loop through each bar element
        bars.forEach(bar => {
            // Set the height of the bar based on its id
            const barId = parseInt(bar.id); // Convert id to integer
            const height = barId * 10; // Set height based on id
            bar.style.height = `${height}px`; // Apply the height to the style
        });
    }
    setHeight();
</script>

<br>

# Code behind the bars 

<br>

```html
<div class="sort-container">
    <div class="bar" id="1"></div>
    <div class="bar" id="2"></div>
    <div class="bar" id="3"></div>
    <div class="bar" id="4"></div>
    <div class="bar" id="5"></div>
</div>

<style>
    .sort-container {
        display: flex;
        justify-content: center;
        align-items: flex-end; /* Align bars to the bottom of the container */
        height: 200px; /* Set a fixed height for better visualization */
        background-color: #f0f0f0; /* Optional background color for the container */
    }

    .bar {
        width: 50px; /* Adjust the width of each bar */
        height: 50px; /* This will be dynamically set in JavaScript based on the bar value */
        background-color: #3498db; /* Adjust the color of the bars */
        margin: 0 2px; /* Adjust the margin between bars */
    }
</style>

<script>
    function setHeight() {
        // Get all elements with the class 'bar' inside the 'sort-container'
        const bars = document.querySelectorAll('.sort-container .bar');

        // Loop through each bar element
        bars.forEach(bar => {
            // Set the height of the bar based on its id
            const barId = parseInt(bar.id); // Convert id to integer
            const height = barId * 10; // Set height based on id
            bar.style.height = `${height}px`; // Apply the height to the style
        });
    }
    setHeight();
</script>
```