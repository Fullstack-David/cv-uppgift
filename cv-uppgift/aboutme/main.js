const subContent = document.querySelector('.main-content');



async function getInfo() {
    
    const response = await fetch('main.json');
    //console.log('funkar?');
    
    if (response.ok) {
        const myCvs = await response.json();
        getCvs(myCvs); // Anropa funktionen getCvs med den hämtade JSON-data

        
    } else {
        console.log("Error" + response.status);
        
    }
}

function getCvs(myCvs) {
    
    const cvLists = document.createElement('ul');
    myCvs.forEach(function (myCv) {

        
        const liLists = document.createElement('li');

        const infoHeader = document.createElement('h3');

        const infoPara = document.createElement('p');

        const infoImg = document.createElement('img'); // Lägg till en bildtagg

        infoHeader.textContent = `${myCv.topic}`

        infoPara.textContent = myCv.description;

        infoImg.src = myCv.picture; // Sätt bildkälla

        //cvLists.appendChild(liLists)
        liLists.appendChild(infoHeader);
        liLists.appendChild(infoPara);
        liLists.appendChild(infoImg);
       
        cvLists.appendChild(liLists)
        subContent.appendChild(cvLists); // Lägg till ul i det befintliga DOM-elementet
        
    });
    
}

getInfo();
