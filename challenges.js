const challenges = [
    {
        title: "Reduce Plastic Use",
        description: "Go a week without using single-use plastics.",
        reward: "10 points"
    },
    {
        title: "Plant a Tree",
        description: "Plant a tree in your community or home.",
        reward: "15 points"
    },
    {
        title: "Use Public Transport",
        description: "Use public transport instead of driving for a week.",
        reward: "10 points"
    },
    {
        title: "Start a Compost Bin",
        description: "Begin composting your kitchen waste.",
        reward: "10 points"
    },
    {
        title: "Switch to Energy Efficient Bulbs",
        description: "Replace all your regular bulbs with energy-efficient ones.",
        reward: "5 points"
    },
];

function displayChallenges() {
    const challengeContainer = document.getElementById('challenge-container');
    
    challenges.forEach(challenge => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'challenge-card');

        card.innerHTML = `
            <div class='card'>
                <div class='card-body'>
                    <h5 class='card-title challenge-title'>${challenge.title}</h5>
                    <p class='card-text challenge-description'>${challenge.description}</p>
                    <p><strong>Reward:</strong> ${challenge.reward}</p>
                    <button class='btn btn-success' onclick='completeChallenge("${challenge.title}")'>Complete Challenge</button>
                </div>
            </div>`;
        
        challengeContainer.appendChild(card);
    });
}

function completeChallenge(challengeTitle) {
    alert(`Congratulations! You have completed the "${challengeTitle}" challenge!`);
}

document.addEventListener('DOMContentLoaded', displayChallenges);
document.getElementById('refresh-btn').addEventListener('click', () => {
    document.getElementById('challenge-container').innerHTML = '';
    displayChallenges();
});