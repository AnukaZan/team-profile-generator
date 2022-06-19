const fs = require('fs');

const generateManager = ManagerData => {
    return `
        <div class = "column">
            <div class = "card">
                <div class="card-content">
                    
                    <div class="media-content">
                        <p class="title is-4"> ${ManagerData.name}</p>
                        <p class="subtitle is-6"> Intern </p>
                    </div>
                
                    <div class="content">
                        <p>ID: ${ManagerData.id}</p>
                        <p>Email:<a href="mailto:${ManagerData.email}">${ManagerData.email}</a></p>
                        <p>Office Number: ${ManagerData.officeNumber}</p>
                    </div>

                </div>
            </div>
        </div>
    `
}


const generateEngineer= EngineerData => {
    return `
        <div class = "column">
            <div class = "card">
                <div class="card-content">
                    
                    <div class="media-content">
                        <p class="title is-4"> ${EngineerData.name}</p>
                        <p class="subtitle is-6"> Engineer </p>
                    </div>
                
                    <div class="content">
                        <p>ID: ${EngineerData.id}</p>
                        <p>Email:<a href="mailto:${EngineerData.email}">${EngineerData.email}</a></p>
                        <a href="https://github.com/${EngineerData.github}">GitHub</a>
                    </div>

                </div>
            </div>
        </div>
    `
}


const generateIntern = internData => {
    return `
        <div class = "column">
            <div class = "card">
                <div class="card-content">
                    
                    <div class="media-content">
                        <p class="title is-4"> ${internData.name}</p>
                        <p class="subtitle is-6"> Intern </p>
                    </div>
                
                    <div class="content">
                        <p>ID: ${internData.id}</p>
                        <p>Email:<a href="mailto:${internData.email}">${internData.email}</a></p>
                        <p>School: ${internData.school}</p>
                    </div>

                </div>
            </div>
        </div>
    `
}



const generateCard = cardData =>{
    cardArray = []; 
        //GENERATE EACH CARD BASED ON ROLE 
     for (let i = 0; i < cardData.length; i++) {
         const role = cardData[i].getRole(); 
         

         if (role === 'Manager') {
            const manager = generateManager(cardData[i]);
            cardArray.push(manager);
            //console.log(manager);
         } 
         
         if (role === 'Engineer') {
            const engineer = generateEngineer(cardData[i]);
            cardArray.push(engineer);
            //console.log(engineer);
         }
         
         if (role === 'Intern'){
            const intern = generateIntern(cardData[i]);
            cardArray.push(intern);
            //console.log(intern);
         }
     }
 
     const newCard = cardArray.join('')

     return generatePage(newCard); 
}

const generatePage = templateData => {
    console.log("SITE GENERATED");

    const codeHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <title> Team Profile Generator </title>
    </head>

    <body>
        <header class="hero is-large">
            <div class="hero-head is-center">
                <div class="container is-center">
                    <h1 class="title is-center"> Team Profile Generator </h1>
                </div>
            </div>
        </header>

        <main class = "container">
            <div class = "columns">
                ${templateData};
            </div>
        </main>
    `;

    //make HTML file with code
    fs.writeFile("./dist/index.html", codeHTML, function(err){
        if (err){
            console.log
        }
    });
}


    

module.exports = generateCard;