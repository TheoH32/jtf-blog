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

function bubbleClick() {
    localStorage.setItem("sortType", "bubble");
    startProcess();
}

function selectionClick() {
    localStorage.setItem("sortType", "selection");
    startProcess();
}

function insertionClick() {
    localStorage.setItem("sortType", "insertion");
    startProcess();
}

function mergeClick() {
    localStorage.setItem("sortType", "merge");
    startProcess();
}

function startProcess() {
    if (localStorage.getItem("sortType") == null) {
        console.log("No sort type selected");
    }

    localStorage.getItem("sortType") == "bubble" ? bubbleSortRequest() : localStorage.getItem("sortType") == "selection" ? selectionSortRequest() : localStorage.getItem("sortType") == "insertion" ? insertionSortRequest() : mergeSortRequest();
}