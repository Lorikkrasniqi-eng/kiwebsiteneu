
/* =========================================
   🇺🇸 AMERICA AI - DEUTSCHE VERSION
   Dein persönlicher USA-Assistent
   ========================================= */

// 1. KI-EINSTELLUNGEN

const AmericaAI = {
    name: "America AI",
    version: "4.0",
    land: "Vereinigte Staaten",
    sprache: "Deutsch",
    status: "Online"
};

// 2. WISSENSDATENBANK

const wissen = [

    {
        keywords: ["hauptstadt", "kapital"],
        answer: "Die Hauptstadt der USA ist Washington, D.C.! 🇺🇸"
    },

    {
        keywords: ["staaten", "bundesstaaten", "anzahl staaten"],
        answer: "Die USA bestehen aus 50 Bundesstaaten."
    },

    {
        keywords: ["flagge", "usa flagge", "amerikanische flagge"],
        answer: "Die amerikanische Flagge hat 50 Sterne und 13 Streifen. Die Sterne stehen für die 50 Bundesstaaten."
    },

    {
        keywords: ["präsident", "staatsoberhaupt"],
        answer: "Der Präsident ist das Staatsoberhaupt und leitet die Regierung der Vereinigten Staaten."
    },

    {
        keywords: ["new york", "nyc"],
        answer: "New York City ist berühmt für den Times Square, den Central Park und die Freiheitsstatue."
    },

    {
        keywords: ["los angeles"],
        answer: "Los Angeles liegt in Kalifornien und ist besonders für Hollywood und seine Strände bekannt."
    },

    {
        keywords: ["miami"],
        answer: "Miami liegt in Florida und ist bekannt für seine Strände, das warme Wetter und das Nachtleben."
    },

    {
        keywords: ["kalifornien", "california"],
        answer: "Kalifornien liegt an der Westküste der USA. Bekannte Städte sind Los Angeles und San Francisco."
    },

    {
        keywords: ["texas"],
        answer: "Texas ist flächenmässig der zweitgrösste Bundesstaat der USA."
    },

    {
        keywords: ["florida"],
        answer: "Florida ist bekannt für seine Strände, das sonnige Wetter und die Freizeitparks von Disney World."
    },

    {
        keywords: ["alaska"],
        answer: "Alaska ist der grösste Bundesstaat der USA, wenn man die Fläche betrachtet."
    },

    {
        keywords: ["hawaii"],
        answer: "Hawaii besteht aus mehreren Inseln im Pazifischen Ozean und ist für seine traumhaften Strände bekannt."
    },

    {
        keywords: ["geld", "währung", "dollar"],
        answer: "Die offizielle Währung der USA ist der US-Dollar ($)."
    },

    {
        keywords: ["unabhängigkeit", "unabhängigkeitstag"],
        answer: "Die USA erklärten am 4. Juli 1776 ihre Unabhängigkeit von Grossbritannien."
    },

    {
        keywords: ["freiheitsstatue", "statue of liberty"],
        answer: "Die Freiheitsstatue steht im Hafen von New York. Sie war ein Geschenk Frankreichs an die USA."
    },

    {
        keywords: ["grand canyon"],
        answer: "Der Grand Canyon liegt im Bundesstaat Arizona. Er gehört zu den beeindruckendsten Naturlandschaften der Welt."
    },

    {
        keywords: ["hollywood"],
        answer: "Hollywood liegt in Los Angeles und ist weltweit für die Filmindustrie bekannt."
    },

    {
        keywords: ["chicago"],
        answer: "Chicago liegt im Bundesstaat Illinois und ist für seine beeindruckende Architektur bekannt."
    },

    {
        keywords: ["las vegas"],
        answer: "Las Vegas liegt in Nevada und ist für seine grossen Hotels, Shows und Casinos bekannt."
    },

    {
        keywords: ["essen", "food", "amerikanisches essen"],
        answer: "Typische amerikanische Gerichte sind Hamburger, Hotdogs, Apple Pie und Barbecue."
    },

    {
        keywords: ["sprache", "englisch"],
        answer: "Englisch ist die am weitesten verbreitete Sprache in den USA. Es gibt keine landesweit festgelegte Amtssprache auf Bundesebene."
    },

    {
        keywords: ["bevölkerung", "einwohner", "menschen"],
        answer: "In den Vereinigten Staaten leben mehr als 300 Millionen Menschen."
    },

    {
        keywords: ["geschichte", "historie"],
        answer: "Die Geschichte der USA umfasst unter anderem die Kolonialzeit, die Unabhängigkeit von 1776 und den Amerikanischen Bürgerkrieg."
    },

    {
        keywords: ["nationalparks", "nationalpark"],
        answer: "Berühmte Nationalparks der USA sind Yellowstone, Yosemite und der Grand Canyon National Park."
    },

    {
        keywords: ["disney", "disney world"],
        answer: "Walt Disney World befindet sich in Florida und gehört zu den bekanntesten Freizeitpark-Resorts der Welt."
    },

    {
        keywords: ["grösster bundesstaat", "größter bundesstaat"],
        answer: "Alaska ist der grösste Bundesstaat der USA nach Fläche."
    },

    {
        keywords: ["kleinster bundesstaat"],
        answer: "Rhode Island ist der kleinste Bundesstaat der USA nach Fläche."
    },

    {
        keywords: ["berge", "rocky mountains"],
        answer: "Die Rocky Mountains sind eine grosse Gebirgskette, die sich durch den Westen Nordamerikas zieht."
    },

    {
        keywords: ["hallo", "hi", "guten tag", "hey"],
        answer: "Hallo! 👋 Willkommen bei America AI! Was möchtest du über die USA wissen?"
    },

    {
        keywords: ["danke", "vielen dank"],
        answer: "Sehr gerne! 🇺🇸 Ich helfe dir gerne weiter."
    },

    {
        keywords: ["tschüss", "auf wiedersehen"],
        answer: "Auf Wiedersehen! Danke für deinen Besuch bei America AI! 👋"
    }

];

// 3. AMERIKA-FRAGEN ERKENNEN

function istAmerikaFrage(frage) {

    const themen = [

        "amerika",
        "usa",
        "vereinigten staaten",
        "amerikanisch",
        "bundesstaat",
        "staaten",
        "new york",
        "kalifornien",
        "florida",
        "texas",
        "washington",
        "miami",
        "alaska",
        "hawaii",
        "hauptstadt",
        "flagge",
        "präsident",
        "dollar",
        "essen",
        "bevölkerung",
        "geschichte",
        "hollywood",
        "grand canyon",
        "freiheitsstatue",
        "unabhängigkeit",
        "sprache",
        "chicago",
        "las vegas",
        "disney",
        "nationalpark",
        "rocky mountains"
    ];

    return themen.some(thema =>
        frage.includes(thema)
    );

}

// 4. ANTWORT SUCHEN

function bekommeAntwort(frage) {

    const text = frage.toLowerCase().trim();

    if (!text) {
        return "Bitte gib zuerst eine Frage ein! 😊";
    }

    for (const eintrag of wissen) {

        const gefunden = eintrag.keywords.some(keyword =>
            text.includes(keyword)
        );

        if (gefunden) {
            return eintrag.answer;
        }

    }

    if (!istAmerikaFrage(text)) {

        return "Tut mir leid! 🇺🇸 Ich bin America AI und kann nur Fragen über die USA beantworten.";

    }

    return "Das ist eine interessante Frage! Diese Information habe ich leider noch nicht in meiner Wissensdatenbank. Frage mich gerne etwas über amerikanische Städte, Bundesstaaten oder Geschichte.";

}

// 5. CHAT ERSTELLEN

function createAmericaAI() {

    if (document.getElementById("america-ai")) return;

    const chatbot = document.createElement("div");

    chatbot.id = "america-ai";

    chatbot.innerHTML = `

        <button id="ai-toggle" type="button">
            🇺🇸
        </button>

        <div id="ai-window">

            <div class="ai-header">

                <div>
                    <h2>🇺🇸 America AI</h2>
                    <span>● Dein USA-Assistent</span>
                </div>

                <button id="ai-close" type="button">
                    ✕
                </button>

            </div>

            <div id="ai-messages">

                <div class="ai-message">
                    Hallo! 👋

                    Ich bin America AI, dein persönlicher
                    Assistent über die Vereinigten Staaten.

                    Stelle mir eine Frage über Amerika!
                    🇺🇸
                </div>

            </div>

            <div class="ai-input">

                <input
                    type="text"
                    id="ai-question"
                    placeholder="Stelle eine Frage über Amerika..."
                >

                <button id="ai-send" type="button">
                    ➤
                </button>

            </div>

            <div class="ai-footer">
                DEIN AMERIKA-ASSISTENT 🇺🇸
            </div>

        </div>

    `;

    document.body.appendChild(chatbot);

    const toggle = chatbot.querySelector("#ai-toggle");
    const close = chatbot.querySelector("#ai-close");

    // CHAT ÖFFNEN

    toggle.addEventListener("click", () => {

        chatbot.classList.add("open");

        chatbot.querySelector("#ai-question").focus();

    });

    // CHAT SCHLIESSEN

    close.addEventListener("click", () => {

        chatbot.classList.remove("open");

    });

    // NACHRICHT SENDEN

    chatbot.querySelector("#ai-send")
        .addEventListener("click", sendQuestion);

    // ENTER-TASTE

    chatbot.querySelector("#ai-question")
        .addEventListener("keydown", event => {

            if (event.key === "Enter") {

                sendQuestion();

            }

        });

}

// 6. FRAGE SENDEN

function sendQuestion() {

    const input = document.querySelector("#ai-question");

    const frage = input.value.trim();

    if (!frage) return;

    addMessage(frage, "user");

    input.value = "";

    showTyping();

    setTimeout(() => {

        removeTyping();

        const antwort = bekommeAntwort(frage);

        addMessage(antwort, "bot");

    }, 700);

}

// 7. NACHRICHT HINZUFÜGEN

function addMessage(nachricht, absender) {

    const container =
        document.querySelector("#ai-messages");

    const bubble = document.createElement("div");

    bubble.className =
        absender === "user"
        ? "user-message"
        : "ai-message";

    bubble.textContent = nachricht;

    container.appendChild(bubble);

    container.scrollTop = container.scrollHeight;

}

// 8. SCHREIBANIMATION

function showTyping() {

    const typing = document.createElement("div");

    typing.id = "ai-typing";

    typing.className = "ai-message";

    typing.textContent = "America AI schreibt...";

    document.querySelector("#ai-messages")
        .appendChild(typing);

}

function removeTyping() {

    const typing = document.querySelector("#ai-typing");

    if (typing) {
        typing.remove();
    }

}

// 9. KI STARTEN

document.addEventListener("DOMContentLoaded", () => {

    createAmericaAI();

    console.log("==========================");

    console.log("🇺🇸 AMERICA AI GESTARTET");

    console.log("Version: " + AmericaAI.version);

    console.log("Sprache: Deutsch");

    console.log("Status: Online");

    console.log("==========================");

});
