const questions = [
    {
        question: "Wie oft solltest du beim Arbeiten am Computer Pausen machen?",
        answers: [
            { text: "Alle 2 Stunden", correct: false },
            { text: "Alle 30 Minuten", correct: true },
            { text: "Einmal am Tag", correct: false }
        ]
    },
    {
        question: "Wie sollte dein Bildschirm positioniert sein?",
        answers: [
            { text: "Auf Augenhöhe", correct: true },
            { text: "Über deinem Kopf", correct: false },
            { text: "Unterhalb deiner Brust", correct: false }
        ]
    },
    {
        question: "Was ist die beste Sitzposition?",
        answers: [
            { text: "Aufrecht mit 90°-Winkeln an Hüfte und Knien", correct: true },
            { text: "Zurückgelehnt mit gestreckten Beinen", correct: false },
            { text: "Zusammengekauert", correct: false }
        ]
    },
    {
        question: "Wie oft solltest du deine Sitzposition ändern?",
        answers: [
            { text: "Alle 10 Minuten", correct: true },
            { text: "Einmal pro Stunde", correct: false },
            { text: "Gar nicht", correct: false }
        ]
    },
    {
        question: "Was ist wichtig für eine ergonomische Maus?",
        answers: [
            { text: "Sie sollte gut in der Hand liegen", correct: true },
            { text: "Sie sollte schwer sein", correct: false },
            { text: "Sie sollte viele Tasten haben", correct: false }
        ]
    },
    {
        question: "Wie hoch sollte dein Schreibtisch sein?",
        answers: [
            { text: "Auf Ellbogenhöhe", correct: true },
            { text: "So hoch wie möglich", correct: false },
            { text: "So niedrig wie möglich", correct: false }
        ]
    },
    {
        question: "Welche Beleuchtung ist ideal für ergonomisches Arbeiten?",
        answers: [
            { text: "Natürliches Licht", correct: true },
            { text: "Nur künstliches Licht", correct: false },
            { text: "Komplett dunkler Raum", correct: false }
        ]
    },
    {
        question: "Wie sollte die Tastatur positioniert sein?",
        answers: [
            { text: "Flach und auf Ellbogenhöhe", correct: true },
            { text: "Schräg und weit entfernt", correct: false },
            { text: "Auf deinem Schoß", correct: false }
        ]
    },
    {
        question: "Was ist wichtig für einen ergonomischen Stuhl?",
        answers: [
            { text: "Verstellbare Sitzhöhe und Rückenlehne", correct: true },
            { text: "Er sollte hart und unbeweglich sein", correct: false },
            { text: "Er sollte keine Armlehnen haben", correct: false }
        ]
    },
    {
        question: "Wie oft solltest du aufstehen und dich bewegen?",
        answers: [
            { text: "Alle 30 Minuten", correct: true },
            { text: "Einmal am Tag", correct: false },
            { text: "Gar nicht", correct: false }
        ]
    },
    {
        question: "Was ist die beste Haltung für deine Handgelenke beim Tippen?",
        answers: [
            { text: "Gerade und entspannt", correct: true },
            { text: "Gebogen nach oben", correct: false },
            { text: "Gebogen nach unten", correct: false }
        ]
    },
    {
        question: "Wie sollte dein Monitor beleuchtet sein?",
        answers: [
            { text: "Blendfrei und ohne Reflexionen", correct: true },
            { text: "Direkt von einer Lampe angestrahlt", correct: false },
            { text: "Im Dunkeln ohne Licht", correct: false }
        ]
    },
    {
        question: "Welche Sitzhöhe ist ideal?",
        answers: [
            { text: "Die Füße sollten flach auf dem Boden stehen", correct: true },
            { text: "Die Knie sollten über der Hüfte sein", correct: false },
            { text: "Die Beine sollten baumeln", correct: false }
        ]
    },
    {
        question: "Wie oft solltest du deine Augen entspannen?",
        answers: [
            { text: "Alle 20 Minuten für 20 Sekunden", correct: true },
            { text: "Einmal pro Stunde", correct: false },
            { text: "Nur wenn sie schmerzen", correct: false }
        ]
    },
    {
        question: "Was ist die optimale Entfernung zum Monitor?",
        answers: [
            { text: "50-70 cm", correct: true },
            { text: "20-30 cm", correct: false },
            { text: "1 Meter oder mehr", correct: false }
        ]
    },
    {
        question: "Welche Art von Schreibtisch ist ergonomisch?",
        answers: [
            { text: "Höhenverstellbar", correct: true },
            { text: "Sehr niedrig", correct: false },
            { text: "Sehr hoch", correct: false }
        ]
    },
    {
        question: "Wie sollte dein Rücken beim Sitzen unterstützt werden?",
        answers: [
            { text: "Mit einer Lendenstütze", correct: true },
            { text: "Gar nicht", correct: false },
            { text: "Mit einem Kissen", correct: false }
        ]
    },
    {
        question: "Was ist wichtig für die Armlehnen deines Stuhls?",
        answers: [
            { text: "Sie sollten verstellbar sein", correct: true },
            { text: "Sie sollten fest und unbeweglich sein", correct: false },
            { text: "Sie sollten fehlen", correct: false }
        ]
    },
    {
        question: "Wie sollte dein Kopf beim Arbeiten positioniert sein?",
        answers: [
            { text: "Leicht nach vorne geneigt", correct: true },
            { text: "Stark nach unten geneigt", correct: false },
            { text: "Nach hinten gelehnt", correct: false }
        ]
    },
    {
        question: "Was ist die beste Haltung für deine Schultern?",
        answers: [
            { text: "Entspannt und nicht hochgezogen", correct: true },
            { text: "Hochgezogen", correct: false },
            { text: "Nach vorne gebeugt", correct: false }
        ]
    },
    {
        question: "Wie kannst du Nackenverspannungen vermeiden?",
        answers: [
            { text: "Durch regelmäßige Dehnübungen", correct: true },
            { text: "Indem du den Kopf still hältst", correct: false },
            { text: "Indem du dich nicht bewegst", correct: false }
        ]
    },
    {
        question: "Welche Art von Mauspad ist ergonomisch?",
        answers: [
            { text: "Mit Handgelenkstütze", correct: true },
            { text: "Einfach und flach", correct: false },
            { text: "Sehr hart", correct: false }
        ]
    },
    {
        question: "Wie kannst du deine Augen vor Überanstrengung schützen?",
        answers: [
            { text: "Durch regelmäßige Pausen und Blinzeln", correct: true },
            { text: "Indem du auf den Bildschirm starrst", correct: false },
            { text: "Indem du die Augen schließt und weiterarbeitest", correct: false }
        ]
    },
    {
        question: "Was ist die beste Haltung für deine Beine beim Sitzen?",
        answers: [
            { text: "90°-Winkel an den Knien", correct: true },
            { text: "Gestreckt auf dem Tisch", correct: false },
            { text: "Gekreuzt unter dem Stuhl", correct: false }
        ]
    },
    {
        question: "Wie kannst du Rückenschmerzen vermeiden?",
        answers: [
            { text: "Durch regelmäßiges Aufstehen und Strecken", correct: true },
            { text: "Indem du lange sitzt", correct: false },
            { text: "Indem du dich nicht bewegst", correct: false }
        ]
    },
    {
        question: "Welche Art von Bildschirm ist ergonomisch?",
        answers: [
            { text: "Matt und blendfrei", correct: true },
            { text: "Glänzend und reflektierend", correct: false },
            { text: "Sehr klein", correct: false }
        ]
    },
    {
        question: "Wie kannst du deine Handgelenke beim Tippen schützen?",
        answers: [
            { text: "Durch eine gerade Haltung", correct: true },
            { text: "Indem du sie nach oben biegst", correct: false },
            { text: "Indem du sie nach unten biegst", correct: false }
        ]
    },
    {
        question: "Was ist wichtig für die Bildschirmhelligkeit?",
        answers: [
            { text: "Sie sollte an die Umgebungsbeleuchtung angepasst sein", correct: true },
            { text: "Sie sollte maximal hell sein", correct: false },
            { text: "Sie sollte minimal hell sein", correct: false }
        ]
    },
    {
        question: "Wie kannst du deine Sitzhaltung verbessern?",
        answers: [
            { text: "Durch einen ergonomischen Stuhl", correct: true },
            { text: "Indem du auf dem Boden sitzt", correct: false },
            { text: "Indem du auf einem Hocker sitzt", correct: false }
        ]
    },
    {
        question: "Wie kannst du deine Konzentration verbessern?",
        answers: [
            { text: "Durch kurze Pausen und Bewegung", correct: true },
            { text: "Indem du durchgehend arbeitest", correct: false },
            { text: "Indem du dich ablenkst", correct: false }
        ]
    },
    {
        question: "Was ist wichtig für die Position deiner Füße?",
        answers: [
            { text: "Flach auf dem Boden oder auf einer Fußstütze", correct: true },
            { text: "Hoch auf dem Tisch", correct: false },
            { text: "Gekreuzt unter dem Stuhl", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userName = "";
let selectedQuestions = [];
let lastAnswerCorrect = false;
let selectedAnswerButton = null;
let answerHistory = [];

const nameInput = document.getElementById("name-input");
const startButton = document.getElementById("start-button");
const nameContainer = document.getElementById("name-container");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const skipButton = document.getElementById("skip-button");
const resultElement = document.getElementById("result");

startButton.addEventListener("click", async () => {
    userName = nameInput.value.trim();
    if (userName) {
        nameContainer.style.display = "none";
        questionContainer.style.display = "block";
        nextButton.style.display = "inline-block";
        skipButton.style.display = "inline-block";
        prepareQuestions();
        showQuestion();
    } else {
        alert("Bitte gib deinen Namen ein!");
    }
});

function prepareQuestions() {
    selectedQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
}

function showQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";
    selectedAnswerButton = null;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.disabled = false;
        button.style.pointerEvents = "auto";
        button.addEventListener("click", () => selectAnswer(button, answer, currentQuestion));
        answersElement.appendChild(button);
    });
    nextButton.disabled = true;
    nextButton.style.display = "inline-block";
    skipButton.style.display = "inline-block";
}

function selectAnswer(button, answer, currentQuestion) {
    Array.from(answersElement.children).forEach(btn => {
        btn.style.backgroundColor = "#f0f0f0";
        btn.style.color = "#153953";
        btn.dataset.selected = "";
    });

    button.style.backgroundColor = "#007BFF";
    button.style.color = "white";
    button.dataset.selected = "true";

    selectedAnswerButton = button;
    selectedAnswerButton.dataset.correct = answer.correct;

    Array.from(answersElement.children).forEach(btn => btn.disabled = true);

    lastAnswerCorrect = !!answer.correct;

    answerHistory[currentQuestionIndex] = {
        question: currentQuestion.question,
        answers: currentQuestion.answers,
        selected: answer.text,
        correct: answer.correct
    };

    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    Array.from(answersElement.children).forEach(btn => {
        const btnText = btn.textContent;
        const answerObj = currentQuestion.answers.find(a => a.text === btnText);
        if (answerObj.correct) {
            btn.style.backgroundColor = "#28a745";
            btn.style.color = "white";
        }
        if (btn === selectedAnswerButton && !answerObj.correct) {
            btn.style.backgroundColor = "#dc3545";
            btn.style.color = "white";
        }
    });

    if (lastAnswerCorrect) {
        score++;
    }
    lastAnswerCorrect = false;

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            showQuestion();
            nextButton.disabled = true;
        } else {
            showResult();
        }
    }, 2500);
});

skipButton.addEventListener("click", () => {
    lastAnswerCorrect = false;
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
        nextButton.disabled = true;
    } else {
        showResult();
    }
});

// Diese Funktion wird aufgerufen, wenn der Quiz abgeschlossen ist
// und die Ergebnisse angezeigt werden sollen
async function showResult() {
    questionElement.textContent = `Danke, ${userName}! Du hast ${score} von ${selectedQuestions.length} Fragen richtig beantwortet!`;
    answersElement.innerHTML = "";
    nextButton.style.display = "none";
    skipButton.style.display = "none";
    resultElement.innerHTML = "";

    // Sende die Antworten an das Flask-Backend
    const payload = answerHistory
        .filter(Boolean)
        .map(item => ({
            question: item.question,
            answer: item.selected
        }));

    try {
        await fetch("/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
    } catch (e) {
        console.error("Fehler beim Senden der Antworten:", e);
    }
}
