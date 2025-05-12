const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionTexT = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")


$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)


let currentQuestionIndex = 0
let totalCorret = 0


function startGame() {
    $questionsContainer.classList.remove("hide")
    $startGameButton.classList.add("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
 resetState()

 if (questions.length == currentQuestionIndex){
    return Finishgame()
 }
    $questionTexT.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}

function resetState () {
    while($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    document.body.removeAttribute("class")
    $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
     document.body.classList.add("correct")
     totalCorret++
    } else {
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")  
        }

        button.disabled = true
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}

function Finishgame(){
    const totalQuestion = questions.length
    const performance = Math.floor(totalCorret * 100 / totalQuestion)

    let message = ""

    switch (true) {
        case (performance > 90):
            message = "Excelente 😁"
            break
        case (performance > 70):
            message = "Muito bom 😄"
            break
        case (performance > 50):
            message = "Bom 🙂"
            break
        default:
            message = "Pode melhorar 😕"
    }

    $questionsContainer.innerHTML =
    `
     <p class="final-message">
        Você acertou ${totalCorret} de ${totalQuestion} questões!
        <span>Resultado: ${message}</span>
     <p/>
     <button onclick=window.location.reload() class="button">
      Refazer teste
     </button>
    `
}


















   const questions = [
    {
        question: "Qual é o principal objetivo da ODS 15?",
        answers: [
            { text: "Reduzir a pobreza extrema", correct: false },
            { text: "Garantir saúde e bem-estar", correct: false },
            { text: "Promover o uso sustentável dos ecossistemas terrestres", correct: true },
            { text: "Garantir Promover o crescimento econômico contínuo", correct: false }
        ]
    },
    {
        question: "A ODS 15 aborda a gestão sustentável de qual dos seguintes recursos?",
        answers: [
            { text: "Oceanos", correct: false },
            { text: "Florestas", correct: true },
            { text: "Energia", correct: false },
            { text: "Tecnologia", correct: false }
        ] 
    },
    {
        question: "A desertificação é um dos problemas abordados na ODS 15. Isso ocorre principalmente devido a:",
        answers: [
            { text: "Práticas agrícolas insustentáveis", correct: true },
            { text: "Reflorestamento em massa", correct: false },
            { text: "Excesso de chuvas", correct: false },
            { text: "Uso exclusivo de energia solar", correct: false }
        ] 
    },
    {
        question: "Uma das metas da ODS 15 é combater:",
        answers: [
            { text: "O uso de plásticos", correct: false },
            { text: "O desperdício de alimentos", correct: false },
            { text: "A imigração ilegal", correct: false },
            { text: "O tráfico de animais silvestres", correct: true }
        ]  
    },
    {
        question: "A preservação da biodiversidade é importante porque:",
        answers: [
            { text: "Garante equilíbrio nos ecossistemas", correct: true },
            { text: "Reduz o número de turistas nas florestas", correct: false },
            { text: "Impede o crescimento das cidades", correct: false },
            { text: "Evita a construção de hidrelétricas", correct: false }
        ]  
    }
   ] 