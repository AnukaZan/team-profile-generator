const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const promptUser = () => {
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
        },
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Would you like to add another employee or finish building your team?',
            choices: ['Engineer', 'Intern', 'Finish']
        }
    ]);
};

promptUser();
module.exports = Prompts;

// .then(({ name })) => {
//     this.manager = new Manager(name)
// }