const startscreen = document.getElementById("start-screen");
const quizSreen = document.getElementById("quiz-screen");
const resultSreen = document.getElementById("restul-screen");
const startButton = document.getElementById("start-btn");
const questionText= document.getElementById("questin-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpane = document.getElementById("max-score");
const restulMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar =document.getElementById("pogress");


const quizQuestions =[
    { question: "Waht is the capital of France",
         answers:[
        {text: "London", correct: false},
         {text: "Berlin" ,orrect: false},
        {text: "Paris", correct: true},
        {text: "Madrid", correct: false},
    ],
},
   { question: "Waht is the capital of Germany",
         answers:[
         {text: "London", correct: false},
         {text: "Berlin" ,orrect: true},
         {text: "Paris", correct: false},
        {text: "Madrid", correct: false},
    ]
},
   { question: "Waht is the capital of United Kingdom",
         answers:[
        {text: "London", correct: true},
         {text: "Berlin" ,orrect: false},
        {text: "Paris", correct: false},
        {text: "Madrid", correct: false},
    ]
},
 { question: "Waht is the capital of spain",
         answers:[
        {text: "London", correct: false},
         {text: "Berlin" ,orrect: false},
        {text: "Paris", correct: false},
        {text: "Madrid", correct: true},
    ]
}
] ;

 let currentQuestionIndex = 0;
 let score = 0;
 let answersDisabled = false;


 totalQuestionSpan.textContent = quizQuestions.length;
 maxScoreSpane.textContent = quizQuestions.length;

 // event listener

 startButton.addEventListener("click", startQuiz);
 restartButton.addEventListener("click", restartQuiz);
 

 function startQuiz(){
    // console.log('quiz started')

    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;
    startscreen.classList.remove("active");
    quizSreen.classList.add("active");

    showQuestion()

    
 }

 function showQuestion(){
    // reset the state
    answersDisabled = false;
    const currentQuestion = quizQuestions[currentQuestionIndex]
    currentQuestionSpan.textContent= currentQuestionIndex+1;
    const progressPercent = (currentQuestionIndex/quizQuestions.length)*100;
    progressBar.style.width = progressPercent+ "%";
    questionText.textContent = currentQuestion.question

    // explain in this in a second
    answersContainer.innerHTML = "";
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.textContent = answers.text;
        button.classList.add("answer-btn");
    })
 }
 
 function restartQuiz(){
    console.log("quiz re-started")
 }