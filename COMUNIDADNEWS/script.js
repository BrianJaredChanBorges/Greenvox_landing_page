function toggleMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display === "flex" ? mobileMenu.style.display = "none" : mobileMenu.style.display = "flex";
}

const questions = {
    Contaminacion: [
        "¿Cuáles son las principales fuentes de contaminación del aire en las ciudades?",
        "¿Qué efectos tiene la contaminación del agua en los ecosistemas acuáticos?",
        "¿Cómo puede la contaminación del suelo afectar la agricultura?"
    ],
    Cambio_climatico: [
        "¿Qué acciones individuales se pueden tomar para reducir la huella de carbono?",
        "¿Cómo afecta el cambio climático a las especies en peligro de extinción?",
        "¿Cuáles son las principales causas del calentamiento global?"
    ],
    Reciclaje: [
        "¿Qué materiales son más importantes reciclar y por qué?",
        "¿Cómo se puede mejorar la tasa de reciclaje en las comunidades?",
        "¿Qué impactos tiene el reciclaje en la reducción de residuos?"
    ],
    Energias_renovables: [
        "¿Cuáles son las ventajas y desventajas de la energía solar?",
        "¿Cómo funciona la energía eólica y qué beneficios ofrece?",
        "¿Qué papel juegan las energías renovables en la lucha contra el cambio climático?"
    ],
    Conservacion_biodiversidad: [
        "¿Por qué es importante conservar la biodiversidad?",
        "¿Qué medidas se pueden tomar para proteger las especies en peligro?",
        "¿Cómo afecta la pérdida de hábitat a la biodiversidad?"
    ],
    Agricultura_sostenible: [
        "¿Qué es la agricultura sostenible y cuáles son sus principios?",
        "¿Cómo pueden las prácticas agrícolas sostenibles mejorar la salud del suelo?",
        "¿Qué beneficios trae la agricultura orgánica frente a la convencional?"
    ],
    Consumo_responsable: [
        "¿Qué es el consumo responsable y cómo se puede practicar?",
        "¿Cómo afecta el consumo excesivo de recursos al medio ambiente?",
        "¿Qué estrategias pueden ayudar a promover el consumo responsable?"
    ],
    Movilidad_sostenible: [
        "¿Qué es la movilidad sostenible y cuáles son sus beneficios?",
        "¿Cómo pueden las ciudades fomentar el uso de bicicletas y transporte público?",
        "¿Qué impacto tiene la movilidad sostenible en la reducción de la contaminación?"
    ],
    Gestion_residuos: [
        "¿Cuáles son las mejores prácticas para la gestión de residuos domésticos?",
        "¿Cómo se puede reducir la cantidad de residuos que generamos diariamente?",
        "¿Qué tecnologías están disponibles para mejorar la gestión de residuos?"
    ],
    Educacion_ambiental: [
        "¿Por qué es importante la educación ambiental desde una edad temprana?",
        "¿Qué métodos son más efectivos para enseñar sobre el medio ambiente?",
        "¿Cómo puede la educación ambiental influir en las políticas públicas?"
    ]
};

function selectTag(tag) {
    document.getElementById('buttonsContainer').style.display = 'none';
    document.getElementById('loadingText').classList.add('show');
    document.getElementById('questionDiv').style.display = 'none';
    document.getElementById('answerDiv').style.display = 'none';

    setTimeout(() => {
        document.getElementById('loadingText').classList.remove('show');
        document.getElementById('questionDiv').style.display = 'block';
        document.getElementById('answerDiv').style.display = 'block';
        const randomQuestion = questions[tag][Math.floor(Math.random() * questions[tag].length)];
        const formattedQuestion = `<span style="color: green;">${tag.replace('_', ' ')}</span>: ${randomQuestion}`;
        document.getElementById('questionText').innerHTML = formattedQuestion;
        }, 2000);
}

function submitAnswer() {
    // Lógica para enviar la respuesta y las etiquetas de objetividad
    const answerText = document.getElementById('answerText').value;
    const objectivity = document.querySelector('input[name="objectivity"]:checked');
    
    if (answerText && objectivity) {
        const selectedObjectivity = objectivity.value;
        document.getElementById('answerDiv').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        // Ocultar el encabezado principal
        document.querySelector('h1').style.display = 'none';
        // Ocultar el resto de los elementos
        document.getElementById('buttonsContainer').style.display = 'none';
        document.getElementById('questionDiv').style.display = 'none';
    } else {
        alert('Por favor completa la respuesta y selecciona una etiqueta de objetividad.');
    }
}
