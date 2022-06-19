const fs = require('fs');
const inquirer = require('inquirer');

const { writeFile, copyFile } = require('./src/generate-site.js');

const generatePage = require('./src/page-template.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function Game(){
    this.teamArray = [];
}

Game.prototype.initializeGame = function(){
    inquirer.prompt([
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
        this.manager = new Manager(name, id, email, officeNumber);
        this.teamArray.push(this.manager);
        this.ifEmployee();
    });
}

Game.prototype.ifEmployee = function(){
    inquirer.prompt({
        type: 'list',
        name: 'addEmployee',
        message: 'Would you like to add another employee or finish building your team?',
        choices: ['Engineer', 'Intern', 'Finish']
    })
    .then(({addEmployee}) => {
        if (addEmployee === 'Engineer'){
           inquirer.prompt([
            {
                type:'input',
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                type:'input',
                name: 'id',
                message: "What is the engineer's employee ID?"
            },
            {
                type:'input',
                name: 'email',
                message: "What is the engineer's email address?"
            },
            {
                type:'input',
                name: 'github',
                message: "What is the engineer's github username?"
            }
        ]).then(({ name, id, email, github }) => {
                this.engineer = new Engineer(name, id, email, github);
                this.teamArray.push(this.engineer);
            });

        } else if (addEmployee === 'Intern'){
            inquirer.prompt([
                {
                    type:'input',
                    name: 'name',
                    message: "What is the intern's name?"
                },
                {
                    type:'input',
                    name: 'id',
                    message: "What is the intern's employee ID?"
                },
                {
                    type:'input',
                    name: 'email',
                    message: "What is the intern's email address?"
                },
                {
                    type:'input',
                    name: 'school',
                    message: "What is the intern's school?"
                }
            ])
            .then(({ name, id, email, school }) => {
                this.intern = new Intern(name, id, email, school);
                this.teamArray.push(this.intern);
                this.ifEmployee();
            });
            
        } else{
            console.log("You are finished building your team");
            console.log(this.teamArray);
            return;
        }
    })
};

new Game().initializeGame();

// .then( generatePage(this.teamArray))
//     .then(pageHTML => {
//         writeFile(pageHTML);
//     })
//     .then(copyFile())
//     .catch(err => {
//         console.log(err);
//     })