document.addEventListener('DOMContentLoaded', function() {
    console.log('ClimateQuiz app initialized');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example function to start a quiz (to be implemented)
    function startQuiz() {
        console.log('Starting a new quiz');
        // Logic to redirect to quiz page or initialize quiz
        window.location.href = 'quiz.html'; // Example redirection
    }

    // Example function to learn more (to be implemented)
    function learnMore() {
        console.log('Opening learn more section');
        // Logic to show more information about climate change
        window.location.href = 'about.html'; // Example redirection
    }

    // Event listeners for main buttons
    document.querySelector('.btn-light').addEventListener('click', startQuiz);
    document.querySelector('.btn-outline-light').addEventListener('click', learnMore);
});