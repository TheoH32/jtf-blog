---
layout: post
title: to be added
type: ccc
courses: { csa: {week: 0} }
---

<html>

<div class="input-group">
    <input type="double" id="time"/>
    <label for="time" class="input-group__label">time</label>
</div>
<div class="input-group">
    <input type="int" id="terms"/>
    <label for="terms" class="input-group__label">terms</label>
</div>



<div id="sort-cards" class="scroll-container">
    <!-- Cards will be dynamically added here -->
</div>

<script>
const terms = document.getElementById('terms').value;

     function updateTime(sortName) {
        const time = document.getElementById('time').value;
        const sortData = {
        "time": time,
        "terms": ""
    };
    console.log("updating time for: " + sortName);
            const requestOptions = {
                method: 'POST',
                cache: 'no-cache',
                credentials: 'include',
                 headers: 
                 {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(sortData)
            };
        
            // Use the fetch function with the modified request options
            fetch("http://localhost:8085/api/leaderboard/updatetime/" + sortName, requestOptions)
                .then(response => {
                    if (!response.ok) {
                        throw Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {

                    console.log(data); // Log the fetched data to the console

                })
                .catch(error => {
                    console.error('Fetch error:', error);
                });
        }


function updateTerms(sortName) {
    const terms = document.getElementById('terms').value;
    const sortData = {
        "time": "",
        "terms": terms
    };
            console.log("updating terms for: " + sortName);
            const requestOptions = {
                method: 'POST',
                cache: 'no-cache',
                credentials: 'include',
                 headers: 
                 {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(sortData)
            };
        
            // Use the fetch function with the modified request options
            fetch("http://localhost:8085/api/leaderboard/updateterms/" + sortName, requestOptions)
                .then(response => {
                    if (!response.ok) {
                        throw Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {

                    console.log(data); // Log the fetched data to the console

                })
                .catch(error => {
                    console.error('Fetch error:', error);
                });
        }

</script>
<script>
    function display() {
        const apiUrl = 'http://localhost:8085/api/leaderboard/';
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                displayLeaderboard(data); // Call the function to display leaderboard cards
            })
            .catch(error => console.error("Error fetching data:", error));
    }

    function displayLeaderboard(data) {
        const sortCardsContainer = document.getElementById("sort-cards");

        data.forEach(leaderboard => {
            // Create a new div card for each leaderboard entry
            const card = document.createElement("div");
            card.className = "card"; // Fixed the class name
            card.innerHTML = `
                <div class="details">
                    <div class="info">
                        <h3>${leaderboard.sortName}</h3>
                        <p><b>terms:</b> ${leaderboard.terms}</p>
                        <p><b>time:</b> ${leaderboard.time} ms</p>
                    </div>
                    <div class="actions">
                     <button onclick="updateTime('${leaderboard.sortName}')">change time</button>
                     <button onclick="updateTerms('${leaderboard.sortName}')">change terms</button>
                    </div>
                </div>
            `;
            sortCardsContainer.appendChild(card); // Fixed variable name
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        // Load initial leaderboard data
        display();
    });
</script>




</html>
