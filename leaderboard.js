let leaderboardData = [
    { username: "EcoWarrior", score: getRandomScore(100, 200) },
    { username: "GreenThumb", score: getRandomScore(80, 150) },
    { username: "SustainableSteve", score: getRandomScore(50, 120) },
    { username: "PlanetProtector", score: getRandomScore(30, 100) },
    { username: "NatureLover", score: getRandomScore(20, 90) },
];

function getRandomScore(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayLeaderboard() {
    const leaderboardBody = document.getElementById('leaderboard-body');
    
    leaderboardBody.innerHTML = '';
    
    const sortedData = leaderboardData.sort((a, b) => b.score - a.score);
    
    sortedData.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope='row'>${index + 1}</th>
            <td>${entry.username}</td>
            <td>${entry.score}</td>`;
        
        row.style.animation = 'fadeIn 0.5s'; 
        leaderboardBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', displayLeaderboard);

document.getElementById('refresh-btn').addEventListener('click', displayLeaderboard);
