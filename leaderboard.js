// Sample leaderboard data (this will be dynamically updated)
let leaderboardData = [
    { username: "EcoWarrior", score: getRandomScore(100, 200) },
    { username: "GreenThumb", score: getRandomScore(80, 150) },
    { username: "SustainableSteve", score: getRandomScore(50, 120) },
    { username: "PlanetProtector", score: getRandomScore(30, 100) },
    { username: "NatureLover", score: getRandomScore(20, 90) },
];

// Function to generate a random score between min and max
function getRandomScore(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to display the leaderboard
function displayLeaderboard() {
    const leaderboardBody = document.getElementById('leaderboard-body');
    
    // Clear existing rows
    leaderboardBody.innerHTML = '';
    
    // Sort by score in descending order
    const sortedData = leaderboardData.sort((a, b) => b.score - a.score);
    
    // Create rows for each entry in the leaderboard
    sortedData.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope='row'>${index + 1}</th>
            <td>${entry.username}</td>
            <td>${entry.score}</td>`;
        
        row.style.animation = 'fadeIn 0.5s'; // Add fade-in animation
        leaderboardBody.appendChild(row);
    });
}

// Initialize the leaderboard on page load
document.addEventListener('DOMContentLoaded', displayLeaderboard);

// Event listener for refreshing the leaderboard
document.getElementById('refresh-btn').addEventListener('click', displayLeaderboard);