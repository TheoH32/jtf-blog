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
            updateLeaderboard(data); // Call the function to update leaderboard cards
        })
        .catch(error => console.error("Error fetching data:", error));
}

function updateLeaderboard(data) {
    const sortCardsContainer = document.getElementById("sort-cards");

    // Clear existing cards before updating
    sortCardsContainer.innerHTML = '';

    data.forEach(leaderboard => {
        // Create a new div card for each leaderboard entry
        const card = document.createElement("div");
        card.className = "card"; 
        card.innerHTML = `
            <div class="details">
                <div class="info">
                    <h3>${leaderboard.sortName}</h3>
                    <p><b>terms:</b> ${leaderboard.terms}</p>
                    <p><b>time:</b> ${leaderboard.time} ms</p>
                </div>
                <div class="actions">

                </div>
            </div>
        `;
        sortCardsContainer.appendChild(card); 
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Load initial leaderboard data
    display();

    // Refresh the data every 5 seconds (adjust as needed)
    setInterval(display, 1000);
});
