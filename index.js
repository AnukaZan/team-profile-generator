const fs = require('fs');
const inquirer = require('inquirer');

const generatePage = require('./src/page-template.js');

//team members
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

teamArray = [];

//PROMPT USER ABOUT TEAM MANAGER 
const initializePrompt = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type:'input',
            name: 'id',
            message: "What is the team manager's employee ID?"
        },
        {
            type:'input',
            name: 'email',
            message: "What is the team manager's email address?"
        },
        {
            type:'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?"
        }
    ])
    .then(({ name, id, email, officeNumber}) => {
        const manager = new Manager(name, id, email, officeNumber);
        teamArray.push(manager);

        checkIfAdd(); //CHECK IF USER WANTS TO ADD ANOTHER EMPLOYEE
    });
}



//ADD NEW EMPLOYEE
const addEmployee = ()=> {
    console.log(`
    =================
    ADDING NEW EMPLOYEE
    =================
    `);

    inquirer.prompt([    
        {
            type:'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type:'input',
            name: 'id',
            message: "What is the employee's ID?"
        },
        {
            type:'input',
            name: 'email',
            message: "What is the employee's email address?"
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Engineer', 'Intern']
        }
    ]).then(({ name, id, email, role }) => { //DIFFERENT QUESTIONS IF THEY ARE ENGINEER OR INTERN
        let addedQuestion = "";
        if (role === 'Engineer'){
            addedQuestion = "Github Username";
        } else {
            addedQuestion = "school name";
        }

        inquirer.prompt(
            {
                type:'input',
                name: 'addedQuestion',
                message: `What is the employee's ${addedQuestion}?`
            }
        ).then(({ addedQuestion}) => {
            let employee;
            if (role === 'Engineer'){
                employee = new Engineer(name, id, email, addedQuestion);
            } else {
                employee = new Intern(name, id, email, addedQuestion);
            }

            teamArray.push(employee);

            checkIfAdd(); //CHECK IF USER WANTS TO ADD ANOTHER USER

        })
    })

}   

//CHECK IF USER WANTS TO ADD ANOTHER EMPLOYEE
const checkIfAdd = () => {
    inquirer.prompt({
        type: 'list',
        name: 'anotherEmployee',
        message: 'Would you like to add another employee?',
        choices: ['Yes', 'No']
    }).then(({ anotherEmployee }) => {

        //IF YES, ADD ANOTHER EMPLOYEE
        if (anotherEmployee ==='Yes'){
            addEmployee();
        } else{

            //OTHERWISE READY TO COMPLETE TEAM ARRAY
            console.log(teamArray);
            generatePage(teamArray);
        }
    })
}


initializePrompt()



