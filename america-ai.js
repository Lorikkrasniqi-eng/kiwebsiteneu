
/* =====================================================
🇺🇸 AMERICA AI 6.0
Dein kostenloser USA-Assistent
Kein API-Key erforderlich
===================================================== */

const AmericaAI = {
name: "America AI",
version: "6.0",
land: "Vereinigte Staaten",
sprache: "Deutsch",
status: "Online"
};

const wissen = [

// ALLGEMEINES

{ keywords: ["usa", "amerika"], answer: "Die Vereinigten Staaten von Amerika liegen in Nordamerika und bestehen aus 50 Bundesstaaten. 🇺🇸" },
{ keywords: ["hauptstadt"], answer: "Die Hauptstadt der USA ist Washington, D.C." },
{ keywords: ["bundesstaaten", "anzahl staaten"], answer: "Die USA bestehen aus 50 Bundesstaaten." },
{ keywords: ["flagge"], answer: "Die amerikanische Flagge hat 50 Sterne und 13 Streifen." },
{ keywords: ["währung", "dollar", "geld"], answer: "Die offizielle Währung ist der US-Dollar ($)." },
{ keywords: ["sprache", "englisch"], answer: "Englisch ist die am weitesten verbreitete Sprache in den USA." },
{ keywords: ["unabhängigkeit"], answer: "Die USA erklärten am 4. Juli 1776 ihre Unabhängigkeit von Grossbritannien." },
{ keywords: ["bevölkerung", "einwohner"], answer: "In den USA leben mehr als 300 Millionen Menschen." },
{ keywords: ["präsident"], answer: "Der Präsident ist Staatsoberhaupt und Regierungschef der Vereinigten Staaten." },
{ keywords: ["nationalhymne"], answer: "Die Nationalhymne der USA heisst The Star-Spangled Banner." },
{ keywords: ["nationalfeiertag"], answer: "Der amerikanische Unabhängigkeitstag wird am 4. Juli gefeiert." },

// BUNDESSTAATEN

{ keywords: ["alabama"], answer: "Alabama liegt im Süden. Hauptstadt: Montgomery." },
{ keywords: ["alaska"], answer: "Alaska ist der grösste Bundesstaat nach Fläche. Hauptstadt: Juneau." },
{ keywords: ["arizona"], answer: "Arizona ist für den Grand Canyon bekannt. Hauptstadt: Phoenix." },
{ keywords: ["arkansas"], answer: "Arkansas ist für seine Natur bekannt. Hauptstadt: Little Rock." },
{ keywords: ["kalifornien", "california"], answer: "Kalifornien liegt an der Westküste. Hauptstadt: Sacramento." },
{ keywords: ["colorado"], answer: "Colorado ist für die Rocky Mountains bekannt. Hauptstadt: Denver." },
{ keywords: ["connecticut"], answer: "Connecticut liegt im Nordosten. Hauptstadt: Hartford." },
{ keywords: ["delaware"], answer: "Delaware war der erste Bundesstaat, der die US-Verfassung ratifizierte. Hauptstadt: Dover." },
{ keywords: ["florida"], answer: "Florida ist für Strände und Freizeitparks bekannt. Hauptstadt: Tallahassee." },
{ keywords: ["georgia"], answer: "Georgia liegt im Südosten. Hauptstadt: Atlanta." },
{ keywords: ["hawaii"], answer: "Hawaii besteht aus Inseln im Pazifik. Hauptstadt: Honolulu." },
{ keywords: ["idaho"], answer: "Idaho ist für Berge und Kartoffeln bekannt. Hauptstadt: Boise." },
{ keywords: ["illinois"], answer: "Illinois liegt im Mittleren Westen. Hauptstadt: Springfield." },
{ keywords: ["indiana"], answer: "Indiana ist für Motorsport bekannt. Hauptstadt: Indianapolis." },
{ keywords: ["iowa"], answer: "Iowa ist landwirtschaftlich geprägt. Hauptstadt: Des Moines." },
{ keywords: ["kansas"], answer: "Kansas liegt in den Great Plains. Hauptstadt: Topeka." },
{ keywords: ["kentucky"], answer: "Kentucky ist für Pferderennen bekannt. Hauptstadt: Frankfort." },
{ keywords: ["louisiana"], answer: "Louisiana ist für Jazz und New Orleans bekannt. Hauptstadt: Baton Rouge." },
{ keywords: ["maine"], answer: "Maine ist für seine Küsten bekannt. Hauptstadt: Augusta." },
{ keywords: ["maryland"], answer: "Maryland liegt an der Ostküste. Hauptstadt: Annapolis." },
{ keywords: ["massachusetts"], answer: "Massachusetts ist für Boston bekannt. Hauptstadt: Boston." },
{ keywords: ["michigan"], answer: "Michigan liegt an den Grossen Seen. Hauptstadt: Lansing." },
{ keywords: ["minnesota"], answer: "Minnesota wird das Land der 10.000 Seen genannt. Hauptstadt: Saint Paul." },
{ keywords: ["mississippi"], answer: "Mississippi liegt im Süden. Hauptstadt: Jackson." },
{ keywords: ["missouri"], answer: "Missouri liegt im Zentrum der USA. Hauptstadt: Jefferson City." },
{ keywords: ["montana"], answer: "Montana ist für Berge und Landschaften bekannt. Hauptstadt: Helena." },
{ keywords: ["nebraska"], answer: "Nebraska ist für seine Prärien bekannt. Hauptstadt: Lincoln." },
{ keywords: ["nevada"], answer: "Nevada ist die Heimat von Las Vegas. Hauptstadt: Carson City." },
{ keywords: ["new hampshire"], answer: "New Hampshire liegt im Nordosten. Hauptstadt: Concord." },
{ keywords: ["new jersey"], answer: "New Jersey liegt zwischen New York und Philadelphia. Hauptstadt: Trenton." },
{ keywords: ["new mexico"], answer: "New Mexico liegt im Südwesten. Hauptstadt: Santa Fe." },
{ keywords: ["new york staat"], answer: "Der Bundesstaat New York liegt im Nordosten. Hauptstadt: Albany." },
{ keywords: ["north carolina"], answer: "North Carolina liegt im Südosten. Hauptstadt: Raleigh." },
{ keywords: ["north dakota"], answer: "North Dakota liegt im Norden. Hauptstadt: Bismarck." },
{ keywords: ["ohio"], answer: "Ohio liegt im Mittleren Westen. Hauptstadt: Columbus." },
{ keywords: ["oklahoma"], answer: "Oklahoma liegt im Süden. Hauptstadt: Oklahoma City." },
{ keywords: ["oregon"], answer: "Oregon liegt an der Westküste. Hauptstadt: Salem." },
{ keywords: ["pennsylvania"], answer: "Pennsylvania spielte eine wichtige Rolle bei der Gründung der USA. Hauptstadt: Harrisburg." },
{ keywords: ["rhode island"], answer: "Rhode Island ist der kleinste Bundesstaat nach Fläche. Hauptstadt: Providence." },
{ keywords: ["south carolina"], answer: "South Carolina liegt an der Atlantikküste. Hauptstadt: Columbia." },
{ keywords: ["south dakota"], answer: "South Dakota ist für Mount Rushmore bekannt. Hauptstadt: Pierre." },
{ keywords: ["tennessee"], answer: "Tennessee ist für Country-Musik bekannt. Hauptstadt: Nashville." },
{ keywords: ["texas"], answer: "Texas ist der zweitgrösste Bundesstaat nach Fläche. Hauptstadt: Austin." },
{ keywords: ["utah"], answer: "Utah ist für seine Nationalparks bekannt. Hauptstadt: Salt Lake City." },
{ keywords: ["vermont"], answer: "Vermont ist für Ahornsirup bekannt. Hauptstadt: Montpelier." },
{ keywords: ["virginia"], answer: "Virginia spielte eine wichtige Rolle in der US-Geschichte. Hauptstadt: Richmond." },
{ keywords: ["washington staat"], answer: "Washington liegt im Nordwesten. Hauptstadt: Olympia." },
{ keywords: ["west virginia"], answer: "West Virginia ist für seine Berge bekannt. Hauptstadt: Charleston." },
{ keywords: ["wisconsin"], answer: "Wisconsin ist für Käse bekannt. Hauptstadt: Madison." },
{ keywords: ["wyoming"], answer: "Wyoming beherbergt einen Teil des Yellowstone-Nationalparks. Hauptstadt: Cheyenne." },

// STÄDTE

{ keywords: ["new york city", "nyc"], answer: "New York City ist für Times Square, Central Park und die Freiheitsstatue bekannt." },
{ keywords: ["new york"], answer: "New York liegt im Nordosten der USA und ist für seine Wolkenkratzer bekannt." },
{ keywords: ["los angeles"], answer: "Los Angeles liegt in Kalifornien und ist für Hollywood und seine Strände bekannt." },
{ keywords: ["miami"], answer: "Miami liegt in Florida und ist für Strände, Sonne und Nachtleben bekannt." },
{ keywords: ["chicago"], answer: "Chicago liegt in Illinois und ist für seine Architektur bekannt." },
{ keywords: ["las vegas"], answer: "Las Vegas liegt in Nevada und ist für Hotels, Shows und Casinos bekannt." },
{ keywords: ["san francisco"], answer: "San Francisco ist für die Golden Gate Bridge bekannt." },
{ keywords: ["boston"], answer: "Boston ist eine historische Stadt in Massachusetts." },
{ keywords: ["seattle"], answer: "Seattle liegt im Bundesstaat Washington und ist für den Space Needle bekannt." },
{ keywords: ["orlando"], answer: "Orlando liegt in Florida und ist für Walt Disney World bekannt." },
{ keywords: ["philadelphia"], answer: "Philadelphia spielte eine wichtige Rolle bei der Gründung der USA." },
{ keywords: ["new orleans"], answer: "New Orleans liegt in Louisiana und ist für Jazz bekannt." },
{ keywords: ["atlanta"], answer: "Atlanta ist die Hauptstadt von Georgia." },
{ keywords: ["dallas"], answer: "Dallas ist eine grosse Stadt in Texas." },
{ keywords: ["houston"], answer: "Houston liegt in Texas und ist für das NASA-Raumfahrtzentrum bekannt." },
{ keywords: ["washington dc"], answer: "Washington, D.C. ist die Hauptstadt der USA." },

// SEHENSWÜRDIGKEITEN

{ keywords: ["freiheitsstatue", "statue of liberty"], answer: "Die Freiheitsstatue steht im Hafen von New York. Sie war ein Geschenk Frankreichs." },
{ keywords: ["grand canyon"], answer: "Der Grand Canyon liegt in Arizona und wurde über Millionen Jahre vom Colorado River geformt." },
{ keywords: ["hollywood"], answer: "Hollywood liegt in Los Angeles und ist weltweit für die Filmindustrie bekannt." },
{ keywords: ["golden gate bridge"], answer: "Die Golden Gate Bridge ist eine berühmte rote Hängebrücke in San Francisco." },
{ keywords: ["weisses haus", "white house"], answer: "Das Weisse Haus ist der Amtssitz des US-Präsidenten." },
{ keywords: ["mount rushmore"], answer: "Mount Rushmore zeigt die Gesichter von vier amerikanischen Präsidenten." },
{ keywords: ["times square"], answer: "Der Times Square in Manhattan ist für seine riesigen Leuchtreklamen bekannt." },
{ keywords: ["central park"], answer: "Der Central Park ist eine grosse Grünanlage mitten in Manhattan." },
{ keywords: ["empire state building"], answer: "Das Empire State Building ist ein berühmter Wolkenkratzer in New York." },
{ keywords: ["niagara falls"], answer: "Die Niagarafälle liegen an der Grenze zwischen den USA und Kanada." },
{ keywords: ["yellowstone"], answer: "Yellowstone wurde 1872 gegründet und gilt als erster Nationalpark der Welt." },
{ keywords: ["yosemite"], answer: "Yosemite ist für Wasserfälle und riesige Felswände bekannt." },
{ keywords: ["disney world"], answer: "Walt Disney World befindet sich in Florida." },

// GESCHICHTE

{ keywords: ["geschichte"], answer: "Die Geschichte der USA umfasst die Kolonialzeit, die Unabhängigkeit von 1776 und den Amerikanischen Bürgerkrieg." },
{ keywords: ["bürgerkrieg"], answer: "Der Amerikanische Bürgerkrieg dauerte von 1861 bis 1865." },
{ keywords: ["abraham lincoln"], answer: "Abraham Lincoln war der 16. Präsident der USA." },
{ keywords: ["martin luther king"], answer: "Martin Luther King Jr. war ein bedeutender Bürgerrechtler." },
{ keywords: ["mondlandung", "apollo 11"], answer: "1969 landeten Neil Armstrong und Buzz Aldrin als erste Menschen auf dem Mond." },
{ keywords: ["kolumbus"], answer: "Christoph Kolumbus erreichte 1492 die Karibik. Amerika war schon lange vorher von indigenen Völkern bewohnt." },
{ keywords: ["9/11", "11 september"], answer: "Am 11. September 2001 ereigneten sich Terroranschläge in den USA." },

// NATUR

{ keywords: ["nationalparks", "nationalpark"], answer: "Berühmte Nationalparks sind Yellowstone, Yosemite, Grand Canyon und Zion." },
{ keywords: ["rocky mountains"], answer: "Die Rocky Mountains sind eine grosse Gebirgskette im Westen Nordamerikas." },
{ keywords: ["mississippi river"], answer: "Der Mississippi ist einer der längsten Flüsse Nordamerikas." },
{ keywords: ["death valley"], answer: "Das Death Valley gehört zu den heissesten Regionen Nordamerikas." },
{ keywords: ["tiere", "wildtiere"], answer: "In den USA leben Bisons, Adler, Bären, Hirsche, Wölfe und Alligatoren." },
{ keywords: ["adler"], answer: "Der Weisskopfseeadler ist ein bekanntes Symbol der USA." },

// ESSEN UND KULTUR

{ keywords: ["essen", "food"], answer: "Typische amerikanische Gerichte sind Hamburger, Hotdogs, Apple Pie, Pancakes und Barbecue." },
{ keywords: ["hamburger", "burger"], answer: "Hamburger gehören zu den bekanntesten Gerichten der amerikanischen Esskultur." },
{ keywords: ["hotdog"], answer: "Ein Hotdog besteht normalerweise aus einem Würstchen in einem länglichen Brötchen." },
{ keywords: ["thanksgiving"], answer: "Thanksgiving wird am vierten Donnerstag im November gefeiert." },
{ keywords: ["halloween"], answer: "Halloween wird am 31. Oktober gefeiert." },
{ keywords: ["weihnachten"], answer: "In den USA wird Weihnachten am 25. Dezember gefeiert." },
{ keywords: ["basketball"], answer: "Basketball ist in den USA sehr beliebt. Die NBA ist die bekannteste Profiliga." },
{ keywords: ["super bowl"], answer: "Der Super Bowl ist das grosse Finale der amerikanischen Football-Liga NFL." },
{ keywords: ["baseball"], answer: "Baseball gehört zu den traditionsreichsten Sportarten der USA." },
{ keywords: ["jazz"], answer: "Jazz ist eine Musikrichtung mit wichtigen Wurzeln in den USA." },
{ keywords: ["country musik"], answer: "Country-Musik hat wichtige Wurzeln im Süden der USA." },
{ keywords: ["musik"], answer: "Jazz, Blues, Country, Rock und Hip-Hop haben wichtige Wurzeln in den USA." },

// TECHNIK

{ keywords: ["wirtschaft"], answer: "Die USA besitzen eine der grössten Volkswirtschaften der Welt." },
{ keywords: ["silicon valley"], answer: "Das Silicon Valley in Kalifornien ist ein weltbekanntes Zentrum der Technologiebranche." },
{ keywords: ["nasa"], answer: "Die NASA ist die amerikanische Raumfahrtbehörde." },
{ keywords: ["apple"], answer: "Apple ist ein amerikanisches Technologieunternehmen, bekannt für iPhone und Mac." },
{ keywords: ["google"], answer: "Google ist ein amerikanisches Technologieunternehmen und für seine Suchmaschine bekannt." },
{ keywords: ["wall street"], answer: "Die Wall Street in New York ist ein berühmtes Zentrum des amerikanischen Finanzmarktes." },

// SMALLTALK

{ keywords: ["hallo", "hi", "hey", "guten tag"], answer: "Hallo! 👋 Willkommen bei America AI! Was möchtest du über die USA wissen?" },
{ keywords: ["danke", "vielen dank"], answer: "Sehr gerne! 🇺🇸 Ich helfe dir gerne weiter." },
{ keywords: ["tschüss", "auf wiedersehen"], answer: "Auf Wiedersehen! Danke für deinen Besuch bei America AI! 👋" },
{ keywords: ["wer bist du"], answer: "Ich bin America AI 6.0, dein persönlicher digitaler USA-Assistent!" },
{ keywords: ["was kannst du", "hilfe"], answer: "Ich beantworte Fragen über amerikanische Städte, Bundesstaaten, Geschichte, Natur, Essen, Sport und Kultur." }

];


// =====================================================
// 2. TEXT NORMALISIEREN
// =====================================================

function normalisiereText(text) {
return text.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.replace(/[^\w\s]/g, " ")
.replace(/\s+/g, " ")
.trim();
}


// =====================================================
// 3. ANTWORT SUCHEN
// =====================================================

function bekommeAntwort(frage) {

const text = normalisiereText(frage);

if (!text) {
return "Bitte gib zuerst eine Frage ein! 😊";
}

const treffer = wissen
.filter(eintrag =>
eintrag.keywords.some(keyword =>
text.includes(normalisiereText(keyword))
)
)
.sort((a, b) => {
const laenge = eintrag =>
Math.max(...eintrag.keywords
.filter(k => text.includes(normalisiereText(k)))
.map(k => normalisiereText(k).length));

return laenge(b) - laenge(a);
});

if (treffer.length > 0) {
return treffer[0].answer;
}

return "Das weiss ich leider noch nicht. 🇺🇸 Meine Wissensdatenbank enthält Informationen über amerikanische Städte, Bundesstaaten, Geschichte, Natur und Kultur. Versuche eine andere Frage!";
}


// =====================================================
// 4. CHAT ERSTELLEN
// =====================================================

function createAmericaAI() {

if (document.getElementById("america-ai")) return;

const chatbot = document.createElement("div");

chatbot.id = "america-ai";

chatbot.innerHTML = `

<button id="ai-toggle" type="button" aria-label="Chat öffnen">
🇺🇸
</button>

<div id="ai-window">

<div class="ai-header">

<div>
<h2>🇺🇸 America AI</h2>
<span>● Dein USA-Assistent</span>
</div>

<button id="ai-close" type="button" aria-label="Chat schliessen">
✕
</button>

</div>

<div id="ai-messages" aria-live="polite">

<div class="ai-message">
Hallo! 👋

Ich bin America AI 6.0, dein persönlicher
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
maxlength="500"
autocomplete="off"
>

<button id="ai-send" type="button">
➤
</button>

</div>

<div class="ai-footer">
AMERICA AI 6.0 · DEIN AMERIKA-ASSISTENT 🇺🇸
</div>

</div>
`;

document.body.appendChild(chatbot);

const toggle = chatbot.querySelector("#ai-toggle");
const close = chatbot.querySelector("#ai-close");
const send = chatbot.querySelector("#ai-send");
const input = chatbot.querySelector("#ai-question");

toggle.addEventListener("click", () => {
chatbot.classList.add("open");
input.focus();
});

close.addEventListener("click", () => {
chatbot.classList.remove("open");
});

send.addEventListener("click", sendQuestion);

input.addEventListener("keydown", event => {
if (event.key === "Enter") {
sendQuestion();
}
});
}


// =====================================================
// 5. FRAGE SENDEN
// =====================================================

function sendQuestion() {

const input = document.querySelector("#ai-question");

if (!input) return;

const frage = input.value.trim();

if (!frage) return;

addMessage(frage, "user");

input.value = "";

showTyping();

setTimeout(() => {

removeTyping();

const antwort = bekommeAntwort(frage);

addMessage(antwort, "bot");

}, 600);
}


// =====================================================
// 6. NACHRICHT HINZUFÜGEN
// =====================================================

function addMessage(nachricht, absender) {

const container = document.querySelector("#ai-messages");

if (!container) return;

const bubble = document.createElement("div");

bubble.className =
absender === "user"
? "user-message"
: "ai-message";

bubble.textContent = nachricht;

container.appendChild(bubble);

container.scrollTop = container.scrollHeight;
}


// =====================================================
// 7. SCHREIBANIMATION
// =====================================================

function showTyping() {

removeTyping();

const typing = document.createElement("div");

typing.id = "ai-typing";
typing.className = "ai-message";
typing.textContent = "America AI schreibt... ✍️";

document.querySelector("#ai-messages")
.appendChild(typing);
}


function removeTyping() {

const typing = document.querySelector("#ai-typing");

if (typing) {
typing.remove();
}
}


// =====================================================
// 8. KI STARTEN
// =====================================================

function startAmericaAI() {

createAmericaAI();

console.log("==============================");
console.log("🇺🇸 AMERICA AI GESTARTET");
console.log("Version: " + AmericaAI.version);
console.log("Sprache: " + AmericaAI.sprache);
console.log("Wissenseinträge: " + wissen.length);
console.log("Status: " + AmericaAI.status);
console.log("==============================");
}

if (document.readyState === "loading") {

document.addEventListener("DOMContentLoaded", startAmericaAI);

} else {

startAmericaAI();

}