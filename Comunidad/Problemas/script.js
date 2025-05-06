// Etiquetas y preguntas
const questions = {
    contaminacion: [
        "¿Cuáles son algunas medidas efectivas para reducir la contaminación del aire?",
        "¿Cómo podemos prevenir la contaminación del agua en nuestras comunidades?",
        "¿Qué acciones podemos tomar para reducir la contaminación por plásticos?"
    ],
    cambio_climatico: [
        "¿Qué impacto tienen nuestras acciones individuales en el cambio climático?",
        "¿Cómo podemos adaptarnos al cambio climático en nuestras vidas diarias?",
        "¿Qué políticas gubernamentales podrían ayudar a abordar el cambio climático?"
    ],
    reciclaje: [
        "¿Qué materiales son los más importantes de reciclar y por qué?",
        "¿Qué desafíos enfrenta el proceso de reciclaje y cómo podríamos superarlos?",
        "¿Cómo podemos fomentar la cultura del reciclaje en nuestra comunidad?"
    ],
    // Agregar más preguntas para otras etiquetas
};

// Obtener el elemento select del DOM
const tagSelect = document.getElementById("tagSelect");
// Obtener el elemento de la pregunta del DOM
const questionText = document.getElementById("questionText");

// Función para generar una pregunta aleatoria relacionada a la etiqueta seleccionada
function generateRandomQuestion() {
    // Obtener el valor seleccionado del select
    const selectedTag = tagSelect.value;
    // Obtener el array de preguntas relacionadas al valor seleccionado del objeto 'questions'
    const tagQuestions = questions[selectedTag];
    // Seleccionar una pregunta aleatoria del array
    const randomIndex = Math.floor(Math.random() * tagQuestions.length);
    const randomQuestion = tagQuestions[randomIndex];
    // Mostrar la pregunta aleatoria en el elemento de texto de la pregunta
    questionText.textContent = randomQuestion;
}

// Evento para generar una pregunta aleatoria cuando se cambia la selección del select
tagSelect.addEventListener("change", generateRandomQuestion);

// Llamar a la función generateRandomQuestion al cargar la página para mostrar la pregunta inicial
generateRandomQuestion();

function toggleMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display === "flex" ? mobileMenu.style.display = "none" : mobileMenu.style.display = "flex";
}
