---
layout: post
title: leaderboard display
type: ccc
courses: { csa: {week: 0} }
---

<html>

<div id="sort-cards" class="scroll-container">
    <!-- Cards will be dynamically added here -->
</div>

<script>
    function tester() {
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
                        <p><b>time:</b> ${leaderboard.time}</p>
                    </div>
                    <div class="actions">
                    </div>
                </div>
            `;
            sortCardsContainer.appendChild(card); // Fixed variable name
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        // Load initial leaderboard data
        tester();
    });
</script>


</html>
