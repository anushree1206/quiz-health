const questionsByAge = {
    children: [
        { question: "How many times a day you brush your teeth?", options: ["1", "2", "3", "4"], answer: "2" },
        { question: "Which is a healthy snack according to you?", options: ["Chips", "Carrots", "Cookies", "Candy"], answer: "Carrots" },
        { question: "How much water do you drink everyday?", options: ["1 glass", "5 glasses", "8 glasses", "10 glasses"], answer: "8 glasses" },
        { question: "Best way to stay fit?", options: ["Playing", "Watching TV", "Eating junk", "Sleeping"], answer: "Playing" },
        { question: "What you do before eating?", options: ["Wash hands", "Brush teeth", "Nothing", "Drink water"], answer: "Wash hands" },
        {question:"How many hours of sleep do you get on school days?",option:["less than 5 hours","5-6 hours","7-8hours","more than 8 hours"],answer:"7-8hours"},
        {question:"How often do you eat Fruits and Vegetables?",option:["Rarely","Once a week","3-4 times a week","Daily"],answer:"Daily"},
        {question:"How much time do you spend on physical activity daily?",option:["None",
            "Less than 30 minutes","30-60 minutes","More than 1 hour"],answer:"30-60 minutes"},
            { question: "What is the best way to avoid germs?", options: ["Wash hands", "Use sanitizer", "Both", "Ignore hygiene"], answer: "Both" },
    { question: "What should you eat for strong bones?", options: ["Milk", "Chips", "Chocolate", "Candy"], answer: "Milk" }
    ],
    teenagers: [
        { question: "How many hours of sleep is ideal?", options: ["4-6", "7-8", "9-10", "11+"], answer: "9-10" },
    { question: "Best activity for mental health?", options: ["Exercise", "TV", "Social media", "Skipping meals"], answer: "Exercise" },
    { question: "Best source of calcium?", options: ["Milk", "Candy", "Soda", "Chips"], answer: "Milk" },
    { question: "How often do you exercise?", options: ["Daily", "Weekly", "Rarely", "Never"], answer: "Daily" },
    { question: "What is the best way to relax?", options: ["Meditation", "Scrolling social media", "Sleeping late", "Skipping meals"], answer: "Meditation" },
    { question: "How many glasses of water you would drink daily?", options: ["2", "4", "6-8", "10+"], answer: "6-8" },
    { question: "Which of these is a balanced breakfast?", options: ["Fruits and cereal", "Chips and soda", "Nothing", "Only coffee"], answer: "Fruits and cereal" },
    { question: "What should you limit for good skin?", options: ["Sugar", "Water", "Exercise", "Fruits"], answer: "Sugar" },
    { question: "What is the best way to avoid stress?", options: ["Exercise", "Overthinking", "Skipping meals", "Sleeping less"], answer: "Exercise" },
    { question: "What’s the most important nutrient for growth?", options: ["Protein", "Candy", "Chips", "Soda"], answer: "Protein" },  
    ],
    adults: [
        { question: "Ideal water intake daily?", options: ["1L", "2L", "3-4L", "5L"], answer: "3-4L" },
    { question: "Exercise frequency per week?", options: ["1", "3-5", "7", "None"], answer: "3-5" },
    { question: "What is a good source of protein?", options: ["Chicken", "Candy", "Chips", "Soda"], answer: "Chicken" },
    { question: "How often you check your weight?", options: ["Daily", "Weekly", "Monthly", "Never"], answer: "Monthly" },
    { question: "What is the best way to manage stress?", options: ["Yoga", "Skipping meals", "Overthinking", "Watching TV"], answer: "Yoga" },
    { question: "Which is a better snack option?", options: ["Nuts", "Chips", "Candy", "Cookies"], answer: "Nuts" },
    { question: "What is the minimum amount of sleep adults need?", options: ["4 hours", "5 hours", "6-8 hours", "10 hours"], answer: "6-8 hours" },
    { question: "How often  you visit the doctor for check-ups?", options: ["Once a year", "Rarely", "Monthly", "Never"], answer: "Once a year" },
    { question: "What is the healthiest cooking oil?", options: ["Olive oil", "Butter", "Palm oil", "Margarine"], answer: "Olive oil" },
    { question: "What should you do to maintain good posture?", options: ["Stretch daily", "Skip exercise", "Ignore posture", "Sit for long hours"], answer: "Stretch daily" }
    ]
};

let currentQuestions = [];
        let score = 0;
        function loadQuiz() {
            const age = parseInt(localStorage.getItem("userAge"));
            if (age <= 12) currentQuestions = questionsByAge.children;
            else if (age <= 19) currentQuestions = questionsByAge.teenagers;
            else currentQuestions = questionsByAge.adults;
        
            console.log("Loaded questions:", currentQuestions); // Debugging
        
            const quizContainer = document.getElementById("quiz-questions");
            if (!quizContainer) {
                console.error("Quiz container not found!");
                return;
            }
        
            quizContainer.innerHTML = ""; // Clear any existing content
        
            currentQuestions.forEach((q, index) => {
                const questionDiv = document.createElement("div");
                questionDiv.classList.add("question");
                questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
                q.options.forEach((option) => {
                    questionDiv.innerHTML += `
                        <div class="options">
                            <input type="radio" name="q${index}" value="${option}"> ${option}
                        </div>
                    `;
                });
                quizContainer.appendChild(questionDiv);
            });
        }
        function submitQuiz() {
            let score = 0;
            let unanswered = false; // Flag to track unanswered questions
        
            currentQuestions.forEach((q, index) => {
                const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
                if (!selectedOption) {
                    unanswered = true; // Mark as unanswered if no option is selected
                } else if (selectedOption.value === q.answer) {
                    score++;
                }
            });
        
            if (unanswered) {
                alert("Please answer all the questions before submitting the quiz!");
                return; // Stop further execution until all questions are answered
            }
        
            // Display the result
            const resultContainer = document.getElementById("result");
            resultContainer.innerHTML = `<h2>Your Score: ${score} / ${currentQuestions.length}</h2>`;
            resultContainer.style.color = "yellow";
            resultContainer.style.fontSize="40px";
        
            if (score <= currentQuestions.length / 2) {
                resultContainer.innerHTML += `<p>Keep working on your health habits!</p>`;
            } else {
                resultContainer.innerHTML += `<p>Great job! You're on the right track to being healthy!</p>`;
            }
        }
        document.addEventListener("DOMContentLoaded", loadQuiz);
        document.body.style.color="Black";
        document.body.style.fontFamily="italic";