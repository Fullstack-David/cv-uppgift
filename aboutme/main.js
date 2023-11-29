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
    const titel = document.createElement('h1');
    const firstDiv = document.createElement('div');
    
    

    myCvs.forEach(function (myCv) {

        
        const liLists = document.createElement('li');

        const infoHeader = document.createElement('h3');

        const infoPara = document.createElement('p');

        const infoImg = document.createElement('img'); // Lägg till en bildtagg

        infoHeader.textContent = `${myCv.topic}`

        infoPara.textContent = myCv.description;

        titel.textContent = 'My projects'

        infoImg.src = myCv.picture; // Sätt bildkälla



        
        // ger min div divar varsit classnamn
        firstDiv.classList.add('firstDiv')
        firstDiv.classList.add('firstDiv');
        
        


        liLists.appendChild(infoHeader);
        liLists.appendChild(infoPara);
        liLists.appendChild(infoImg);      
        cvLists.appendChild(liLists)
        


        // här appendar jag mina parent-element
        subContent.appendChild(titel);
        subContent.appendChild(firstDiv);
        
        // ändrar kursen till firstDiv, så att ul blir child till firstDiv
        firstDiv.appendChild(cvLists); 
        
    });
    
}

getInfo();






