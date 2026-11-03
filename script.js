
/* ==========================================
   DISCOVER AMERICA 🇺🇸
   Advanced JavaScript Website
   ========================================== */

// 1. WEBSITE SETTINGS

const websiteName = "Discover America";
const country = "United States of America";

let score = 0;
let currentQuestion = 0;
let darkMode = false;

// 2. WAIT UNTIL PAGE IS LOADED

document.addEventListener("DOMContentLoaded", () => {

    console.log("Welcome to " + websiteName);

    initializeWebsite();
    startClock();
    showWelcomeMessage();
    initializeDarkMode();
    initializeScrollAnimations();
    initializeBackToTop();
    initializeQuiz();
    initializeSearch();
    initializeRandomFacts();

});

// 3. INITIALIZE WEBSITE

function initializeWebsite() {

    console.log("Website successfully loaded!");

    const title = document.querySelector("header h1");

    if (title) {
        title.style.cursor = "pointer";

        title.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    updateFooterYear();
}

// 4. UPDATE FOOTER YEAR

function updateFooterYear() {

    const footer = document.querySelector("footer");

    if (footer) {
        const year = new Date().getFullYear();

        footer.innerHTML = `
            <p>© ${year} Discover America 🇺🇸</p>
            <p>Explore the land of dreams!</p>
        `;
    }
}

// 5. DIGITAL CLOCK

function startClock() {

    const clock = document.createElement("div");

    clock.id = "america-clock";

    clock.style.textAlign = "center";
    clock.style.padding = "15px";
    clock.style.fontSize = "20px";
    clock.style.fontWeight = "bold";

    document.body.prepend(clock);

    function updateClock() {

        const now = new Date();

        const time = now.toLocaleTimeString("en-US");

        const date = now.toLocaleDateString("en-US");

        clock.innerHTML = `
            🇺🇸 USA WEBSITE
            <br>
            ${date} | ${time}
        `;
    }

    updateClock();

    setInterval(updateClock, 1000);
}

// 6. WELCOME MESSAGE

function showWelcomeMessage() {

    const message = document.createElement("div");

    message.innerText =
        "Welcome to America! 🇺🇸 Discover something amazing!";

    message.style.position = "fixed";
    message.style.bottom = "20px";
    message.style.right = "20px";
    message.style.background = "#002868";
    message.style.color = "white";
    message.style.padding = "15px";
    message.style.borderRadius = "10px";
    message.style.zIndex = "9999";
    message.style.boxShadow = "0 4px 10px #888";

    document.body.appendChild(message);

    setTimeout(() => {
        message.style.opacity = "0";
        message.style.transition = "1s";
    }, 4000);

    setTimeout(() => {
        message.remove();
    }, 5200);
}

// 7. DARK MODE

function initializeDarkMode() {

    const button = document.createElement("button");

    button.innerText = "🌙 Dark Mode";

    button.style.position = "fixed";
    button.style.top = "15px";
    button.style.right = "15px";
    button.style.zIndex = "10000";
    button.style.padding = "10px";
    button.style.cursor = "pointer";

    document.body.appendChild(button);

    button.addEventListener("click", toggleDarkMode);

}

function toggleDarkMode() {

    darkMode = !darkMode;

    document.body.style.background =
        darkMode ? "#121212" : "#f4f4f4";

    document.body.style.color =
        darkMode ? "white" : "#222";

}

// 8. USA FACTS

const americaFacts = [

    "The USA has 50 states.",

    "The capital of the USA is Washington, D.C.",

    "The American flag has 50 stars.",

    "The Statue of Liberty was a gift from France.",

    "The Grand Canyon is in Arizona.",

    "New York City is known as the Big Apple.",

    "The USA uses the US Dollar.",

    "The United States declared independence in 1776.",

    "Alaska is the largest US state by area.",

    "Hawaii is made up of islands in the Pacific Ocean."

];

// 9. RANDOM FACT GENERATOR

function initializeRandomFacts() {

    const section = document.createElement("section");

    section.id = "random-facts";

    section.style.textAlign = "center";
    section.style.padding = "40px";

    section.innerHTML = `
        <h2>🇺🇸 Did You Know?</h2>
        <p id="fact-text">Click the button for an amazing fact!</p>
        <button id="fact-button">Show Random Fact</button>
    `;

    document.body.appendChild(section);

    document.getElementById("fact-button")
        .addEventListener("click", showRandomFact);

}

function showRandomFact() {

    const randomIndex =
        Math.floor(Math.random() * americaFacts.length);

    document.getElementById("fact-text").innerText =
        americaFacts[randomIndex];

}

// 10. USA QUIZ

const quizQuestions = [

    {
        question: "How many states does the USA have?",
        answers: ["40", "50", "52", "60"],
        correct: "50"
    },

    {
        question: "What is the capital of the USA?",
        answers: ["New York", "Los Angeles", "Washington, D.C.", "Miami"],
        correct: "Washington, D.C."
    },

    {
        question: "What is the American currency?",
        answers: ["Euro", "Dollar", "Pound", "Yen"],
        correct: "Dollar"
    },

    {
        question: "Where is the Statue of Liberty?",
        answers: ["New York", "Texas", "Florida", "Alaska"],
        correct: "New York"
    },

    {
        question: "When did the USA declare independence?",
        answers: ["1492", "1776", "1900", "1945"],
        correct: "1776"
    }

];

// 11. CREATE QUIZ

function initializeQuiz() {

    const quiz = document.createElement("section");

    quiz.id = "america-quiz";

    quiz.style.padding = "40px";
    quiz.style.textAlign = "center";

    quiz.innerHTML = `
        <h2>🧠 America Quiz</h2>

        <p id="question-number"></p>

        <h3 id="quiz-question">
            Test your knowledge about America!
        </h3>

        <div id="quiz-answers"></div>

        <p id="quiz-result"></p>

        <button id="next-question">
            Start Quiz
        </button>

        <p id="quiz-score">Score: 0</p>
    `;

    document.body.appendChild(quiz);

    document.getElementById("next-question")
        .addEventListener("click", nextQuizQuestion);

}

// 12. SHOW QUIZ QUESTION

function nextQuizQuestion() {

    if (currentQuestion >= quizQuestions.length) {

        document.getElementById("quiz-question").innerText =
            "Quiz completed! 🎉";

        document.getElementById("quiz-answers").innerHTML = "";

        document.getElementById("quiz-result").innerText =
            "Your final score: " + score + " / " +
            quizQuestions.length;

        document.getElementById("next-question").innerText =
            "Play Again";

        score = 0;
        currentQuestion = 0;

        return;
    }

    const question = quizQuestions[currentQuestion];

    document.getElementById("question-number").innerText =
        "Question " + (currentQuestion + 1) +
        " of " + quizQuestions.length;

    document.getElementById("quiz-question").innerText =
        question.question;

    const answersContainer =
        document.getElementById("quiz-answers");

    answersContainer.innerHTML = "";

    question.answers.forEach(answer => {

        const button = document.createElement("button");

        button.innerText = answer;

        button.style.margin = "8px";
        button.style.padding = "12px";
        button.style.cursor = "pointer";

        button.addEventListener("click", () => {

            checkAnswer(answer, button);

        });

        answersContainer.appendChild(button);

    });

    document.getElementById("quiz-result").innerText = "";

    document.getElementById("next-question").innerText =
        "Next Question";

}

// 13. CHECK QUIZ ANSWER

function checkAnswer(answer, button) {

    const correctAnswer =
        quizQuestions[currentQuestion].correct;

    if (answer === correctAnswer) {

        score++;

        button.style.background = "#28a745";
        button.style.color = "white";

        document.getElementById("quiz-result").innerText =
            "Correct! Amazing! 🎉";

    } else {

        button.style.background = "#bf0a30";
        button.style.color = "white";

        document.getElementById("quiz-result").innerText =
            "Wrong! Correct answer: " + correctAnswer;

    }

    document.querySelectorAll("#quiz-answers button")
        .forEach(btn => btn.disabled = true);

    document.getElementById("quiz-score").innerText =
        "Score: " + score;

    currentQuestion++;

}

// 14. SEARCH FUNCTION

function initializeSearch() {

    const searchContainer = document.createElement("section");

    searchContainer.style.textAlign = "center";
    searchContainer.style.padding = "30px";

    searchContainer.innerHTML = `
        <h2>🔎 Search America</h2>

        <input
            type="text"
            id="america-search"
            placeholder="Search for a city..."
        >

        <div id="search-results"></div>
    `;

    document.body.appendChild(searchContainer);

    document.getElementById("america-search")
        .addEventListener("input", searchAmerica);

}

// 15. SEARCH DATA

const americanPlaces = [

    "New York",
    "Los Angeles",
    "Miami",
    "Las Vegas",
    "Washington DC",
    "Chicago",
    "San Francisco",
    "Grand Canyon",
    "Yellowstone National Park",
    "Hawaii",
    "Alaska",
    "Hollywood"

];

// 16. SEARCH PLACES

function searchAmerica() {

    const input = document.getElementById("america-search");

    const results = document.getElementById("search-results");

    const searchValue = input.value.toLowerCase();

    const filteredPlaces = americanPlaces.filter(place =>
        place.toLowerCase().includes(searchValue)
    );

    results.innerHTML = "";

    filteredPlaces.forEach(place => {

        const item = document.createElement("p");

        item.innerText = "📍 " + place;

        item.style.padding = "8px";

        results.appendChild(item);

    });

    if (filteredPlaces.length === 0) {

        results.innerText = "No places found.";

    }

}

// 17. SCROLL ANIMATIONS

function initializeScrollAnimations() {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    }, {
        threshold: 0.1
    });

    sections.forEach(section => {

        section.style.opacity = "0";

        section.style.transform = "translateY(30px)";

        section.style.transition = "all 0.8s ease";

        observer.observe(section);

    });

}

// 18. BACK TO TOP BUTTON

function initializeBackToTop() {

    const button = document.createElement("button");

    button.innerText = "⬆ Back to Top";

    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.left = "20px";
    button.style.padding = "12px";
    button.style.cursor = "pointer";
    button.style.zIndex = "999";

    document.body.appendChild(button);

    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// 19. RANDOM CITY

function getRandomCity() {

    const cities = [
        "New York",
        "Miami",
        "Chicago",
        "Los Angeles",
        "Las Vegas",
        "Boston"
    ];

    const random =
        Math.floor(Math.random() * cities.length);

    return cities[random];

}

// 20. CONSOLE INFORMATION

function showConsoleInformation() {

    console.log("==============================");

    console.log("WELCOME TO DISCOVER AMERICA");

    console.log("Country: " + country);

    console.log("Website: " + websiteName);

    console.log("Random city: " + getRandomCity());

    console.log("==============================");

}

showConsoleInformation();

// 21. NAVIGATION EFFECT

function initializeNavigation() {

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {

        link.addEventListener("mouseenter", () => {

            link.style.transition = "0.3s";

            link.style.transform = "scale(1.1)";

        });

        link.addEventListener("mouseleave", () => {

            link.style.transform = "scale(1)";

        });

    });

}

initializeNavigation();

// 22. IMAGE HOVER EFFECT

function initializeImageEffects() {

    const images = document.querySelectorAll(".card img");

    images.forEach(image => {

        image.style.transition = "0.4s";

        image.addEventListener("mouseenter", () => {

            image.style.transform = "scale(1.05)";

        });

        image.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1)";

        });

    });

}

initializeImageEffects();

// 23. WELCOME BUTTON

function createWelcomeButton() {

    const button = document.createElement("button");

    button.innerText = "🇺🇸 Say Hello!";

    button.style.padding = "12px";

    button.addEventListener("click", () => {

        alert("Hello! Welcome to the United States of America!");

    });

    document.body.appendChild(button);

}

createWelcomeButton();

// 24. WEBSITE FINISHED

console.log("All America Website functions are ready!");
console.log("Enjoy exploring the USA! 🇺🇸");
