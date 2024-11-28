const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');

let shuffledQuestions, currentQuestionIndex, score;

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startQuiz() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    updateScore();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn', 'btn-outline-primary', 'btn-answer');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    feedbackElement.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.disabled = true;
    });
    if (correct) {
        score += 10;
        feedbackElement.textContent = "Correct! Well done!";
        feedbackElement.className = "alert alert-success";
    } else {
        feedbackElement.textContent = "Sorry, that's incorrect. The correct answer is highlighted in green.";
        feedbackElement.className = "alert alert-danger";
    }
    feedbackElement.style.display = 'block';
    updateScore();
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart Quiz';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function updateScore() {
    scoreElement.textContent = score;
}

const questions = [
    {
        question: 'What is the main cause of climate change?',
        answers: [
            { text: 'Burning of fossil fuels', correct: true },
            { text: 'Deforestation', correct: false },
            { text: 'Pollution', correct: false },
            { text: 'Solar radiation', correct: false }
        ]
    },
    {
        question: 'Which of these is a greenhouse gas?',
        answers: [
            { text: 'Carbon dioxide', correct: true },
            { text: 'Methane', correct: true },
            { text: 'Nitrous oxide', correct: true },
            { text: 'Water vapor', correct: true }
        ]
    },
    {
        question: 'How many people worldwide are vulnerable to climate change effects?',
        answers: [
            { text: '4 million', correct: false },
            { text: '40 million', correct: false },
            { text: '4 billion', correct: true }
        ]
    },
    {
        question: 'If global temperature rises over 1.5°C, what percentage of species will be at risk of extinction?',
        answers: [
            { text: '15-20% (at least one in six species)', correct: true },
            { text: '10-15% (one in ten species)', correct: false },
            { text: '100% (all species)', correct: false },
            { text: '0% (no species)', correct: false }
        ]
    },
    {
        question: 'Which country has the highest per capita CO2 emissions?',
        answers: [
            { text: 'USA', correct: false },
            { text: 'China', correct: false },
            { text: 'India', correct: false },
            { text: 'Qatar', correct: true }
        ]
    },
    {
        question: 'In the US, which activity contributes more to carbon dioxide emissions?',
        answers: [
            { text: 'Transportation', correct: true },
            { text: 'Electricity and heat production', correct: false },
            { text: 'Industrial processes', correct: false },
            { text: 'Agriculture', correct: false }
        ]
    },
    {
        question: 'What was the primary goal of the Paris Agreement?',
        answers: [
            { text: 'Limit global temperature increase to below 2°C', correct: true },
            { text: 'Reduce fossil fuel consumption', correct: false },
            { text: 'Create a global carbon tax', correct: false },
            { text: 'Ban all industrial emissions', correct: false }
        ]
    },
    {
        question: 'What percentage of food-related CO2 emissions occur in the UK?',
        answers: [
            { text: 'None', correct: false },
            { text: 'Less than 5%', correct: false },
            { text: 'More than 30%', correct: true }
        ]
    },
    {
        question: 'Which of these is NOT a type of renewable energy?',
        answers: [
            { text: 'Wind', correct: false },
            { text: 'Solar', correct: false },
            { text: 'Nuclear', correct: true },
            { text: 'Geothermal', correct: false }
        ]
    },
    {
        question: 'How much carbon dioxide does an average American add to the atmosphere annually?',
        answers: [
            { text: '6 metric tons', correct: false },
            { text: '16 metric tons', correct: true },
            { text: '25 metric tons', correct: false },
            { text: '10 metric tons', correct: false }
        ]
    }
];