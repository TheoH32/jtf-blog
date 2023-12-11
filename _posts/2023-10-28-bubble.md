---
layout: base
type: ccc
permalink: /bubble
courses: { csa: {week: 0} }
---

<!-- Add title back if you want it back in header -->
<div id="contain" class="sort-container"></div>
<input id="terms" type="number" placeholder="# of Terms">
<button onclick="createBars()">Create Bars</button>
<button onclick="scramble()">Scramble Bars</button>
<button onclick="bubbleSort()">Bubble Sort</button>
<h1 id="timerTEXT"></h1>

<style>
    .sort-container {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 200px;
        background-color: #f0f0f0;
    }
    .bar {
        width: 50px;
        background-color: #3498db;
        margin: 0 2px;
        transition: height 0.3s ease, background-color 0.3s ease;
    }
</style>

<script>
    let barsArray = [];

    function createArray() {
        if (barsArray == "") {
        let num = parseInt(document.getElementById("terms").value);
        let temp = [];
        let i = 1;
        while (i <= num) {
            temp.push(i);
            i++;
        }
        return temp;
        } else {
            return barsArray;
        }
    }

    function createBars() {
        const container = document.getElementById("contain");
        container.innerHTML = '';

        barsArray = createArray();

        for (let i = 0; i < barsArray.length; i++) {
            const bar = document.createElement('div');
            bar.className = 'bar';
            container.appendChild(bar);
        }

        setHeight();
    }

    // run the function a couple times
    let recursive = 0;

    function scramble() {
        const numTerms = barsArray.length;
        const randomIterations = Math.floor(Math.random() * numTerms) + 1;

        for (let i = 0; i < randomIterations; i++) {
            const randomIndex1 = Math.floor(Math.random() * numTerms);
            const randomIndex2 = Math.floor(Math.random() * numTerms);

            // Swap elements at randomIndex1 and randomIndex2
            const temp = barsArray[randomIndex1];
            barsArray[randomIndex1] = barsArray[randomIndex2];
            barsArray[randomIndex2] = temp;
        }
        createBars();
        
        if(recursive < 5) {
            recursive++;
            scramble();
        }
    }

    function setHeight() {
        const container = document.getElementById("contain");
        const bars = Array.from(container.children);

        bars.forEach((bar, index) => {
            const height = barsArray[index] * 10;
            bar.style.height = `${height}px`;
        });
    }

    function bubbleSort() {
        startTimeCounter();
        const container = document.getElementById("contain");
        const bars = Array.from(container.children);

        // Helper function to swap bars visually with a delay
        async function swapWithDelay(bar1, bar2) {
        return new Promise(resolve => {
            const tempHeight = bar1.style.height;
            
            // Change the background color of the bars being swapped to red
            bar1.style.backgroundColor = "#e74c3c"; // Red color
            bar2.style.backgroundColor = "#e74c3c"; // Red color

            setTimeout(() => {
                bar1.style.height = bar2.style.height;
                bar2.style.height = tempHeight;

                // Reset the background color after the swap
                bar1.style.backgroundColor = "#3498db"; // Original color
                bar2.style.backgroundColor = "#3498db"; // Original color

                resolve();
            }, 1250); // Adjust the delay time as needed
        });
    }


        async function performSort() {
            for (let i = 0; i < bars.length; i++) {
                for (let j = 0; j < bars.length - i - 1; j++) {
                    if (barsArray[j] > barsArray[j + 1]) {
                        // Swap elements in the array
                        const temp = barsArray[j];
                        barsArray[j] = barsArray[j + 1];
                        barsArray[j + 1] = temp;

                        // Swap bars visually with a delay
                        await swapWithDelay(bars[j], bars[j + 1]);
                    }
                }
            }
        }

        // Call the sorting function
        performSort();
    }

    var startTime = Math.floor(Date.now() / 1000); //Get the starting time (right now) in seconds

    function startTimeCounter() {
        var now = Math.floor(Date.now() / 1000); // get the time now
        var diff = now - startTime; // diff in seconds between now and start
        var m = Math.floor(diff / 60); // get minutes value (quotient of diff)
        var s = Math.floor(diff % 60); // get seconds value (remainder of diff)
        m = checkTime(m); // add a leading zero if it's single digit
        s = checkTime(s); // add a leading zero if it's single digit
        document.getElementById("timerTEXT").innerHTML = m + ":" + s; // update the element where the timer will appear
        var t = setTimeout(startTimeCounter, 500); // set a timeout to update the timer
    }

    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
</script>
