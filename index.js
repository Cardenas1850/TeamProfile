const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let team  [];

//begin the inquirer prompt questions for manager



const generateTeam = () => {
    return inquirer.prompt([
        {
            type: input,
            message:"Please enter the manager's first and last name",
            name: 'managerName'
        },

        {
            type: input,
            message: "Please enter the manager's email",
            name: "managerEmail"
        },

        {
            type: input,
            message:"Please enter the manager's Employee ID Number",
            name: "managerID"
        },

        {
            type:input,
            message:"Please enter the managers office number",
            name: "officeNumber"
        },

        {
            type: confirm,
            message:"Do you have other employees you wish to add?",
            name: "addEmployee",
            default: true;
        },
        
    ])
    .then(({ managerName, managerEmail, managerID, officeNumber, addEmployee} = response) => {
        team.push(new Manager(managerName, managerID, managerEmail, officeNumber));
        if (addEmployee === true) {
            addInternOrEngineer();
        } else {
            generateHTML();
        }
    })
};

//begin the inquirer prompt to add a new employee: Engineer or begin the inquirer prompt to add a new employee: Intern
const addInternOrEngineer = () => {
    return inquirer.prompt([
        {
            type: input,
            message: ,
            name:,

        },
        {
            type: input,
            message: ,
            name:,

        },
        {
            type: input,
            message: ,
            name:,

        },
        {
            type: input,
            message: ,
            name:,

        },
        {
            type: input,
            message: ,
            name:,

        },
        {
            type: input,
            message: ,
            name:,

        },
        {
            type: input,
            message: ,
            name:,

        },

    ])
}
