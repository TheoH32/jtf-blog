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
    let time;
    // Fisher-Yates shuffle
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    console.log(list);
    
    // Checking which sort was chosen
    if (Insertion) {
        return
    } else if (Merge) {
        return
    } else if (Bubble) {
        return
    } else if (Selection) {
        time = selectSortTime(list);
        console.log(time);
    }

    // Justin where to put your fetch code




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
    return elapsedTime;
}