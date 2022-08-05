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
            type: list,
            message: "Please select the position of the new employee",
            name: 'employeeRole',
            choices: ['Engineer' ,'Intern']
        },

        {
            type: input,
            message: "Please enter the first and last name of the employee",
            name: 'employeeName',
        },

        {
            type: input,
            message: "Please enter the employees email address",
            name: "employeeEmail",
        },

        {
            type: input,
            message:  "Please eneter the Employee ID Number" ,
            name: 'employeeId',

        },
        {
            type: input,
            message: "Please enter the your Engineers Github profile",
            name: 'engineerGithub',
            when: answers => answers.employeeRole == 'Engineer'
        },
        {
            type: input,
            message: "Please enter the school your Intern is currently attending",
            name: 'internSchool',
            when: answers => answers.employeeRole == 'Intern'

        },
        {
            type: confirm,
            message: "Do you have other employees you wish to add?",
            name: 'addEmployee',
            default: true

        },

    ])
    .then(({employeeRole, employeeName, employeeId, employeeEmail, engineerGithub, internSchool, addEmployee} = addMember) => {
        if(employeeRole === 'Intern') {
            team.push(new Intern(employeeName, employeeId, employeeEmail, internSchool));
        } else if (employeeRole === 'Engineer') {
            team.push(new Engineer(employeeName, employeeId, employeeEmail, engineerGithub));
        } if (addEmployee === true) {
            addInternOrEngineer();
        } else {
            console.log(team);
            let prepareTeam = createCards();
            generateHTML(prepareTeam);
        }
    }
};
