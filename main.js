
// json fetch
async function home() {
    const response = await fetch('main.json');

    if (response.ok) {
        const home = await response.json();
    } else {
        console.log('Error' + response.status);
    }
}
// Skapar en div-container med id: container 
function createContainer() {
    const container = document.createElement('div');
    container.id = 'container';
    return container;
}
// Skapar funktion som skapar en navbar i min container
function createNavbar(navbarData) {
    const navbar = document.createElement('nav');

    // här vill jag skapa en a-tagg i min navbar och hämta informationen från JSON
    /**************** men den funkar inte ?? ********************/
    navbarData.forEach(item => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = item.logo || item.home || item.about || item.project || item.contact || item.login;
        navbar.appendChild(link);
    });

    return navbar;
}


// Skapar en function som skapar en header i min container

function createHeader() {
    const header = document.createElement('header');
    return header;
}

// Skapar en function som skapar en main i min container
function createMain() {
    const main = document.createElement('main');
    return main;

}

// skapar en funcrion som skapar en footer i min container
function createFooter() {
    const footer = document.createElement('footer');
    return footer;
}


home().then(data => {
    if (data) {
        const navbar = createNavbar(data.navbar)
    }
})



// skapar en function där jag appendar alla element till sidan
function bildPage() {
    const container = createContainer();
    const navbar = createNavbar();
    const header = createHeader();
    const main = createMain();
    const footer = createFooter();

    // appendar elarna till container
    container.appendChild(navbar);
    container.appendChild(header);
    container.appendChild(main);
    container.appendChild(footer);

    // appendar container till document
    document.body.appendChild(container);
}

bildPage();

