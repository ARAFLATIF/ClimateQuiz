document.addEventListener('DOMContentLoaded', function() {
    console.log('ClimateQuiz app initialized');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function startQuiz() {
        console.log('Starting a new quiz');
        window.location.href = 'quiz.html'; 
    }

    function learnMore() {
        console.log('Opening learn more section');
        window.location.href = 'about.html'; 
    }

    document.querySelector('.btn-light').addEventListener('click', startQuiz);
    document.querySelector('.btn-outline-light').addEventListener('click', learnMore);
});
