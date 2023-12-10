const manualValueBool = new Boolean(false);
var sortGroup = document.getElementById("sorts");
var slider = document.getElementById("inputRange");
var output = document.getElementById("shownNumber");
var manualInput = document.getElementById("manualValue");

var sortingText = document.getElementById("sortingTEXT");
var termsText = document.getElementById("termsTEXT");
var timeText = document.getElementById("timerTEXT");

var selectionB = document.getElementById("selectionButton");
var mergeB = document.getElementById("mergeButton");
var insertionB = document.getElementById("insertionButton");
var bubbleB = document.getElementById("bubbleButton");


function selectionClick() {
    sortingText.innerHTML = "Selection";
}

function mergeClick() {
    sortingText.innerHTML = "Merge";
}

function insertionClick() {
    sortingText.innerHTML = "Insertion";
}

function bubbleClick() {
    sortingText.innerHTML = "Bubble";
}

function leaderboardPlay() {
    slider.value = 10000;
    output.innerHTML = slider.value;
    termsText.innerHTML = 10000;
}

function setManualValue() {
    var value = parseInt(manualInput.value);
    if (value >= parseInt(slider.min) && value <= parseInt(slider.max)) {
        slider.value = value;
        output.innerHTML = value;
        termsText.innerHTML = value;
    } else {
        alert("Please enter a value within the allowed range.");
    }
}

// Boolean values for sorting algorithms
var Insertion = false;
var Merge = false;
var Bubble = false;
var Selection = false;
termsText.innerHTML = 100;

output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;
    termsText.innerHTML = this.value;
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
    let time;
    // Fisher-Yates shuffle
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    console.log(list);

    // Checking which sort was chosen
    if (Insertion) {
        if (list.length == 10000) {
            insertionSortRequest();
            updateTime("insertion", time);
        }
        else {
            time = InsertionSortTime(list);
            console.log(time);
        }
    } else if (Merge) {
        if (list.length == 10000) {
            mergeSortRequest();
            updateTime("merge", time);
        }
        else {
            time = MergeSortTime(list);
            console.log(time);
        }
    } else if (Bubble) {
        if (list.length == 10000) {
            bubbleSortRequest();
            updateTime("bubble", time);
        }
        else {
            time = BubbleSortTime(list);
            console.log(time);
        }
    } else if (Selection) {
        if (list.length == 10000) {
            selectionSortRequest();
            updateTime("selection", time);
        }
        else {
            time = SelectionSortTime(list);
            console.log(time);
        }
    }
}

function createArray() {
    let n = slider.value;
    let array = []
    for (i = 0; i < n; i++) {
        array.push(i);
    }
    return array;
}

function selectSortTime(arr) {
    // Record the start time
    const startTime = Date.now();

    // Selection sort implementation
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }
    if (minIndex !== i) {
        // Swap elements
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    }

    // Record the end time
    const elapsedTime = Date.now() - startTime;

    // Print the sorted array
    console.log("Sorted Array:", arr);

    // Return the elapsed time
    timeText.innerHTML = elapsedTime + "ms";
    return elapsedTime;
}

function MergeSortTime(arr) {
    // Record the start time
    const startTime = Date.now();

    // Merge sort implementation
    mergeSort(arr);

    // Record the end time
    const elapsedTime = Date.now() - startTime;

    // Print the sorted array
    console.log("Sorted Array:", arr);

    // Return the elapsed time
    timeText.innerHTML = elapsedTime + "ms";
    return elapsedTime;

    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        mergeSort(left);
        mergeSort(right);

        merge(arr, left, right);
    }

    function merge(arr, left, right) {
        let i = 0;
        let j = 0;
        let k = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }

        while (i < left.length) {
            arr[k++] = left[i++];
        }

        while (j < right.length) {
            arr[k++] = right[j++];
        }
    }
}

function BubbleSortTime(arr) {
    // Record the start time
    const startTime = Date.now();

    // Bubble sort implementation
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // Record the end time
    const elapsedTime = Date.now() - startTime;

    // Print the sorted array
    console.log("Sorted Array:", arr);

    // Return the elapsed time
    timeText.innerHTML = elapsedTime + "ms";
    return elapsedTime;
}

function InsertionSortTime(arr) {
    // Record the start time
    const startTime = Date.now();

    // Insertion sort implementation
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentVal;
    }

    // Record the end time
    const elapsedTime = Date.now() - startTime;

    // Print the sorted array
    console.log("Sorted Array:", arr);

    // Return the elapsed time
    timeText.innerHTML = elapsedTime + "ms";
    return elapsedTime;
}

function bubbleSortRequest() {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      fetch("http://localhost:8085/api/sort/bubble", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function selectionSortRequest() {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      fetch("http://localhost:8085/api/sort/selection", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function insertionSortRequest() {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      fetch("http://localhost:8085/api/sort/insertion", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function mergeSortRequest() {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };
      
      fetch("http://localhost:8085/api/sort/merge", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}