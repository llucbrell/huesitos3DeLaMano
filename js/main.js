const esp32HostName = 'huesitos_en_las_manos.local';

const questions = [
    {
        question: "¿Cuántos huesos hay en la mano humana?",
        image: null,
        options: ["20", "24", "27", "30"],
        answer: "27"
    },
    {
        question: "¿Cuál es el nombre del hueso largo que conecta el brazo con la muñeca?",
        image: null,
        options: ["Húmero", "Radio", "Cúbito", "Escafoides"],
        answer: "Radio"
    },
    {
        question: "Cuál es el nombre del hueso marcado en la imagen con el número 1",
        image: "images/hand_palmar_complete.jpg",
        options: ["Húmero", "Radio", "Cúbito", "Escafoides"],
        answer: "Escafoides"
    },
    {
        question: "Cuál es el nombre del hueso marcado en la imagen con el número 2",
        image: "images/hand_palmar_complete.jpg",
        options: ["Trapezoide", "Radio", "Trapecio", "Escafoides"],
        answer: "Trapecio"
    },
    {
        question: "Cuál es el nombre del hueso marcado en la imagen con el número 6",
        image: "images/hand_palmar_complete.jpg",
        options: ["Pisiforme", "Grande", "Trapecio", "Ganchoso"],
        answer: "Pisiforme"
    },
    {
        question: "Cuál es el nombre del hueso marcado en la imagen con el número 8",
        image: "images/hand_palmar_complete.jpg",
        options: ["Pisiforme", "Grande", "Trapecio", "Ganchoso"],
        answer: "Grande"
    },
    {
        question: "Cuál es el nombre de los huesos marcados en la imagen con el número 10",
        image: "images/hand_palmar_complete.jpg",
        options: ["Largos", "Falanges", "Metacarpos", "Carpos"],
        answer: "Falanges"
    },
    {
        question: "Cuál es el nombre de los huesos marcados en la imagen con el número 9",
        image: "images/hand_palmar_complete.jpg",
        options: ["Sesamoideos", "Falanges", "Metacarpianos", "Carpos"],
        answer: "Metacarpianos"
    },
    {
        question: "Cuál es el nombre de los huesos marcados en la imagen con el número 11",
        image: "images/hand_palmar_complete.jpg",
        options: ["Sesamoideos", "Falanges", "Metacarpianos", "Carpos"],
        answer: "Sesamoideos"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 1",
        image: "images/hand_palmar.jpg",
        options: ["Pisiforme", "Escafoides", "Trapecio", "Ganchoso"],
        answer: "Escafoides"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 2",
        image: "images/hand_palmar.jpg",
        options: ["Pisiforme", "Escafoides", "Trapecio", "Ganchoso"],
        answer: "Trapecio"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 3",
        image: "images/hand_palmar.jpg",
        options: ["Pisiforme", "Trapezoide", "Trapecio", "Ganchoso"],
        answer: "Trapezoide"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 4",
        image: "images/hand_palmar.jpg",
        options: ["Pisiforme", "Semilunar", "Piramidal", "Ganchoso"],
        answer: "Semilunar"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 5",
        image: "images/hand_palmar.jpg",
        options: ["Pisiforme", "Semilunar", "Piramidal", "Ganchoso"],
        answer: "Piramidal"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 6",
        image: "images/hand_palmar.jpg",
        options: ["Pisiforme", "Semilunar", "Piramidal", "Ganchoso"],
        answer: "Pisiforme"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 7",
        image: "images/hand_palmar.jpg",
        options: ["Pisiforme", "Grande", "Piramidal", "Ganchoso"],
        answer: "Ganchoso"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 8",
        image: "images/hand_palmar.jpg",
        options: ["Pisiforme", "Grande", "Piramidal", "Ganchoso"],
        answer: "Grande"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 1",
        image: "images/hand_dorsal.jpg",
        options: ["Pisiforme", "Escafoides", "Piramidal", "Ganchoso"],
        answer: "Escafoides"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 2",
        image: "images/hand_dorsal.jpg",
        options: ["Trapecio", "Escafoides", "Trapezoide", "Pisiforme"],
        answer: "Trapecio"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 3",
        image: "images/hand_dorsal.jpg",
        options: ["Trapecio", "Escafoides", "Trapezoide", "Pisiforme"],
        answer: "Trapezoide"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 4",
        image: "images/hand_dorsal.jpg",
        options: ["Semilunar", "Piramidal", "Trapezoide", "Pisiforme"],
        answer: "Semilunar"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 5",
        image: "images/hand_dorsal.jpg",
        options: ["Semilunar", "Piramidal", "Trapezoide", "Pisiforme"],
        answer: "Piramidal"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 6",
        image: "images/hand_dorsal.jpg",
        options: ["Semilunar", "Piramidal", "Trapezoide", "Pisiforme"],
        answer: "Piramidal"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 7",
        image: "images/hand_dorsal.jpg",
        options: ["Pisiforme", "Grande", "Piramidal", "Ganchoso"],
        answer: "Ganchoso"
    },
    {
        question: "Cuál es el nombre del hueso del carpo marcado en la imagen con el número 8",
        image: "images/hand_dorsal.jpg",
        options: ["Pisiforme", "Grande", "Piramidal", "Ganchoso"],
        answer: "Grande"
    },
    {
        question: "¿Qué hueso del carpo está ubicado en la base del pulgar?",
        image: null,
        options: ["Trapecio", "Ganchoso", "Pisiforme", "Semilunar"],
        answer: "Trapecio"
    },
    {
        question: "¿Cuál es el hueso más pequeño de la mano?",
        image: null,
        options: ["Pisiforme", "Trapecio", "Ganchoso", "Metacarpo"],
        answer: "Pisiforme"
    },
    {
        question: "¿Cuántos huesos metacarpianos tiene la mano?",
        image: null,
        options: ["3", "4", "5", "6"],
        answer: "5"
    },
    {
        question: "¿Cuál es el nombre del hueso que forma la parte más proximal del pulgar?",
        image: null,
        options: ["Falange distal", "Falange proximal", "Metacarpo", "Trapezoide"],
        answer: "Falange proximal"
    },
    {
        question: "¿Cuál de los siguientes huesos NO es parte del carpo?",
        image: null,
        options: ["Escafoides", "Piriforme", "Pisiforme", "Semilunar"],
        answer: "Piriforme"
    },
    {
        question: "¿Cómo se llama el hueso que se encuentra en el borde lateral del carpo, cerca del pulgar?",
        image: null,
        options: ["Trapecio", "Escafoides", "Ganchoso", "Piramidal"],
        answer: "Escafoides"
    },
    {
        question: "¿Qué hueso del carpo está alineado con el dedo meñique?",
        image: null,
        options: ["Trapecio", "Trapezoide", "Ganchoso", "Pisiforme"],
        answer: "Ganchoso"
    },
    {
        question: "¿Qué hueso conecta directamente con el radio en la muñeca?",
        image: null,
        options: ["Escafoides", "Semilunar", "Pisiforme", "Trapecio"],
        answer: "Escafoides"
    },
    {
        question: "¿Cuál es el nombre del hueso que se encuentra entre el trapecio y el ganchoso?",
        image: null,
        options: ["Trapezoide", "Pisiforme", "Escafoides", "Piramidal"],
        answer: "Trapezoide"
    },
    {
        question: "¿Cuántas falanges tiene cada dedo de la mano, excepto el pulgar?",
        image: null,
        options: ["2", "3", "4", "5"],
        answer: "3"
    },
    {
        question: "¿Cómo se llama el hueso del carpo que se encuentra en la base del dedo medio?",
        image: null,
        options: ["Trapecio", "Trapezoide", "Semilunar", "Grande"],
        answer: "Grande"
    },
    {
        question: "¿Qué hueso del carpo tiene una forma de media luna?",
        image: null,
        options: ["Pisiforme", "Semilunar", "Escafoides", "Piramidal"],
        answer: "Semilunar"
    },
    {
        question: "¿Qué hueso del carpo está alineado con el dedo índice?",
        image: null,
        options: ["Trapezoide", "Trapecio", "Pisiforme", "Grande"],
        answer: "Trapezoide"
    },
    {
        question: "¿Cuál es el hueso que se encuentra más distal en el dedo anular?",
        image: null,
        options: ["Metacarpo", "Falange proximal", "Falange media", "Falange distal"],
        answer: "Falange distal"
    },
    {
        question: "¿Cuántos huesos del carpo hay en la muñeca?",
        image: null,
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "¿Cuál es el nombre del hueso que forma la parte más distal del dedo pulgar?",
        image: null,
        options: ["Falange media", "Falange distal", "Falange proximal", "Metacarpo"],
        answer: "Falange distal"
    },
    {
        question: "¿Qué hueso del carpo tiene una forma triangular?",
        image: null,
        options: ["Trapecio", "Ganchoso", "Piramidal", "Pisiforme"],
        answer: "Piramidal"
    },
    {
        question: "¿Cuál es el hueso del carpo que se encuentra en el lado medial de la muñeca?",
        image: null,
        options: ["Escafoides", "Trapezoide", "Piramidal", "Grande"],
        answer: "Piramidal"
    },
    {
        question: "¿Qué hueso del carpo tiene una prominencia que se puede sentir en la base de la palma?",
        image: null,
        options: ["Ganchoso", "Pisiforme", "Trapecio", "Semilunar"],
        answer: "Pisiforme"
    },
    {
        question: "¿Cuál es el hueso que forma la articulación principal de la muñeca con el radio?",
        image: null,
        options: ["Escafoides", "Trapezoide", "Semilunar", "Piramidal"],
        answer: "Escafoides"
    },
    {
        question: "¿Qué hueso del carpo se articula con el quinto metacarpo?",
        image: null,
        options: ["Trapezoide", "Ganchoso", "Grande", "Pisiforme"],
        answer: "Ganchoso"
    },
    {
        question: "¿Qué hueso del carpo se encuentra justo distal al radio y el cúbito?",
        image: null,
        options: ["Escafoides", "Semilunar", "Piramidal", "Grande"],
        answer: "Semilunar"
    },
    {
        question: "¿Qué hueso del carpo se encuentra en el lado radial de la mano, cerca del pulgar?",
        image: null,
        options: ["Trapecio", "Ganchoso", "Pisiforme", "Semilunar"],
        answer: "Trapecio"
    },
    {
        question: "¿Cuál es el nombre del hueso que forma la parte media del dedo meñique?",
        image: null,
        options: ["Falange proximal", "Falange media", "Falange distal", "Metacarpo"],
        answer: "Falange media"
    },
    {
        question: "¿Cuántas falanges tiene el dedo pulgar?",
        image: null,
        options: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        question: "¿Qué hueso del carpo está más cercano al radio en la muñeca?",
        image: null,
        options: ["Trapecio", "Semilunar", "Escafoides", "Piramidal"],
        answer: "Escafoides"
    },
    {
        question: "¿Cuál es el hueso más proximal en el dedo índice?",
        image: null,
        options: ["Falange distal", "Falange media", "Falange proximal", "Metacarpo"],
        answer: "Falange proximal"
    },
    {
        question: "¿Cuál es el nombre del hueso que está más distal en el dedo medio?",
        image: null,
        options: ["Falange proximal", "Falange media", "Falange distal", "Metacarpo"],
        answer: "Falange distal"
    },
    {
        question: "¿Qué hueso conecta el carpo con las falanges?",
        image: null,
        options: ["Radio", "Cúbito", "Metacarpo", "Trapecio"],
        answer: "Metacarpo"
    },
    {
        question: "¿Qué hueso del carpo tiene una estructura en forma de gancho?",
        image: null,
        options: ["Trapecio", "Ganchoso", "Piramidal", "Escafoides"],
        answer: "Ganchoso"
    },
    {
        question: "¿Qué hueso del carpo está alineado con el tercer metacarpo?",
        image: null,
        options: ["Grande", "Pisiforme", "Trapecio", "Trapezoide"],
        answer: "Grande"
    },
    {
        question: "¿Cuál es el hueso del carpo más medial en la muñeca?",
        image: null,
        options: ["Escafoides", "Ganchoso", "Pisiforme", "Semilunar"],
        answer: "Pisiforme"
    },
    {
        question: "¿Qué hueso del carpo se encuentra en la parte más lateral de la muñeca?",
        image: null,
        options: ["Trapecio", "Ganchoso", "Piramidal", "Grande"],
        answer: "Trapecio"
    },
    {
        question: "¿Qué hueso del carpo está en contacto con el cúbito?",
        image: null,
        options: ["Pisiforme", "Trapezoide", "Escafoides", "Piramidal"],
        answer: "Piramidal"
    },
    {
        question: "¿Cuál es el nombre del hueso largo que forma la palma de la mano?",
        image: null,
        options: ["Metacarpo", "Radio", "Cúbito", "Trapecio"],
        answer: "Metacarpo"
    },
    {
        question: "¿Qué hueso del carpo tiene forma de guisante?",
        image: null,
        options: ["Pisiforme", "Trapecio", "Ganchoso", "Grande"],
        answer: "Pisiforme"
    },
    {
        question: "¿Qué hueso del carpo está justo proximal al primer metacarpo?",
        image: null,
        options: ["Trapezoide", "Trapecio", "Semilunar", "Piramidal"],
        answer: "Trapecio"
    },
    {
        question: "¿Qué hueso del carpo se encuentra distal al semilunar?",
        image: null,
        options: ["Trapecio", "Ganchoso", "Grande", "Pisiforme"],
        answer: "Grande"
    },
    {
        question: "¿Cuál es el nombre del hueso que forma la articulación de la base del dedo meñique?",
        image: null,
        options: ["Trapecio", "Ganchoso", "Piramidal", "Metacarpo"],
        answer: "Metacarpo"
    },
    {
        question: "¿Qué hueso del carpo se encuentra entre el escafoides y el piramidal?",
        image: null,
        options: ["Pisiforme", "Grande", "Semilunar", "Trapezoide"],
        answer: "Semilunar"
    },
    {
        question: "¿Qué hueso del carpo tiene una forma de trapecio?",
        image: null,
        options: ["Trapezoide", "Trapecio", "Pisiforme", "Grande"],
        answer: "Trapecio"
    },
    {
        question: "¿Cuál es el nombre del hueso que está más proximal en el dedo anular?",
        image: null,
        options: ["Falange distal", "Falange media", "Falange proximal", "Metacarpo"],
        answer: "Falange proximal"
    },
    {
        question: "¿Qué hueso del carpo está alineado con el cuarto metacarpo?",
        image: null,
        options: ["Ganchoso", "Grande", "Trapecio", "Trapezoide"],
        answer: "Ganchoso"
    },
    {
        question: "¿Cuál es el nombre del hueso que se encuentra entre el metacarpo y la falange proximal?",
        image: null,
        options: ["Falange media", "Falange distal", "Trapezoide", "Metacarpo"],
        answer: "Metacarpo"
    }
];



const totalQuestions = 15; // Número total de preguntas a formular
const correctAnswersToWin = 12; // Número de respuestas correctas necesarias para ganar
const accessLimit = 100; // Límite de accesos
let askedQuestions = JSON.parse(localStorage.getItem('askedQuestions')) || [];
let score = 0;
let currentQuestionIndex = 0;
let todaysDate = new Date().toDateString();
let accessCount = JSON.parse(localStorage.getItem('accessCount')) || { date: todaysDate, count: 0 };

if (accessCount.date !== todaysDate) {
    accessCount = { date: todaysDate, count: 0 };
    localStorage.setItem('accessCount', JSON.stringify(accessCount));
}

if (accessCount.count >= accessLimit) {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('result').innerText = 'Has alcanzado el límite de accesos para hoy.';
    });
} else {
    accessCount.count += 1;
    localStorage.setItem('accessCount', JSON.stringify(accessCount));
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomQuestion() {
    const availableQuestions = questions.filter(q => !askedQuestions.includes(q.question));
    if (availableQuestions.length === 0) {
        askedQuestions = [];
        localStorage.setItem('askedQuestions', JSON.stringify(askedQuestions));
        return getRandomQuestion();
    }
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    return availableQuestions[randomIndex];
}

function showQuestion() {
    const questionObj = getRandomQuestion();
    if (!questionObj) {
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('result').innerText = '¡Has respondido todas las preguntas de hoy!';
        return;
    }

    askedQuestions.push(questionObj.question);
    localStorage.setItem('askedQuestions', JSON.stringify(askedQuestions));

    document.getElementById('question').innerText = questionObj.question;
    const questionImage = document.getElementById('question-image');
    if (questionObj.image) {
        questionImage.src = questionObj.image;
        questionImage.style.display = 'block';
    } else {
        questionImage.style.display = 'none';
    }

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    shuffleArray(questionObj.options).forEach(option => {
        const button = document.createElement('button');
        button.className = 'button is-light is-fullwidth';
        button.innerText = option;
        button.onclick = () => checkAnswer(option, questionObj.answer);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('quiz-container').style.display = 'none';
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Has acertado ${score} de ${totalQuestions} preguntas.`;

    const retryButton = document.createElement('button');
    retryButton.innerText = 'Volver a intentar';
    retryButton.className = 'button is-primary';
    retryButton.onclick = () => location.reload();
    resultDiv.appendChild(retryButton);
    if(score >= correctAnswersToWin ){
        alert(`Felicidades has acertado ${score} de ${totalQuestions} \n ¡¡Has superado el reto!! :-)`)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (accessCount.count < accessLimit) {
        document.getElementById('quiz-container').style.display = 'block';
        showQuestion();
    }
});
