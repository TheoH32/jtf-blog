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
    sortingText.innerHTML = "Sorting: Selection";
}

function mergeClick() {
    sortingText.innerHTML = "Sorting: Merge";
}

function insertionClick() {
    sortingText.innerHTML = "Sorting: Insertion";
}

function bubbleClick() {
    sortingText.innerHTML = "Sorting: Bubble";
}

// Boolean values for sorting algorithms
var Insertion = false;
var Merge = false;
var Bubble = false;
var Selection = false;
termsText.innerHTML = "Terms: " + 100;

output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;
    termsText.innerHTML = "Terms: " + this.value;
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
        time = InsertionSortTime(list);
        console.log(time);
    } else if (Merge) {
        time = MergeSortTime(list);
        console.log(time);
    } else if (Bubble) {
        time = BubbleSortTime(list);
        console.log(time);
    } else if (Selection) {
        time = selectSortTime(list);
        console.log(time);
    }

    // Justin where to put your fetch code
    if (list.length == 10000) {
        //FETCH CODE HERE
        console.log("LEADERBOARD FETCH TRUE");
    }





}

function setManualValue() {
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
    slider.value = 10000;
    output.innerHTML = slider.value;
    termsText.innerHTML = "Terms: " + 10000;

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
    timeText.innerHTML = "Time: " + elapsedTime + "ms";
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
    timeText.innerHTML = "Time: " + elapsedTime + "ms";
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
    timeText.innerHTML = "Time: " + elapsedTime + "ms";
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
    timeText.innerHTML = "Time: " + elapsedTime + "ms";
    return elapsedTime;
}