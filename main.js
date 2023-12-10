// De här två har jag skrivit själv. h1-eventet har jag skrivit helt själv, men att skifta till mörk läge och ljusläge fick jag lite hjälp av google sökandet.


const titel = document.getElementById('titel');
const icon = document.querySelector('.dark-mode');

// Variabel för att hålla reda på om stilen är utökad eller inte
let isExpanded = false;

// Funktion för att tillämpa den önskade stilen
function applyStyles() {
    titel.style.width = '50%';
    titel.style.display = 'flex'
    titel.style.alignItems = 'center';
    titel.style.justifyContent = 'center';
    titel.style.margin = '2rem auto';
    titel.style.padding = '10px 15px';
    titel.style.borderRadius = '8px';
    titel.style.color = 'white';
    titel.style.letterSpacing = '8px';
    
    // Uppdatera isExpanded-variabeln till true eftersom stilen nu är utökad
    isExpanded = true;
    
}
// Funktion för att återställa till den ursprungliga stilen
function resetStyles() {
    titel.removeAttribute('style');
    isExpanded = false;

}
// Funktion som hanterar klickhändelsen på elementet
function handleTitelClick() {
    if (isExpanded) {
        resetStyles();
    } else {
        applyStyles();
    }
}

titel.addEventListener('click', handleTitelClick);


// min dark-mode event
icon.addEventListener('click', function () {
    
    let element = document.body; // Hämtar referensen till <body> elementet
    element.classList.toggle('dark-mode'); // Växlar klassen 'dark-mode' på <body> elementet, vilket styr utseendet med hjälp av CSS

    icon.document.style.borderRadius = '50%';

});




