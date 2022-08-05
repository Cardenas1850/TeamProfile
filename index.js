const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let team = [];

//begin the inquirer prompt questions for manager



const generateTeam = () => {
    return inquirer.prompt([
        {
            type: "input",
            message:"Please enter the manager's first and last name",
            name: 'managerName'
        },

        {
            type: "input",
            message: "Please enter the manager's email",
            name: "managerEmail"
        },

        {
            type: "input",
            message:"Please enter the manager's Employee ID Number",
            name: "managerID"
        },

        {
            type:"input",
            message:"Please enter the managers office number",
            name: "officeNumber"
        },

        {
            type: "confirm",
            message:"Do you have other employees you wish to add?",
            name: "addEmployee",
            default: true
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
            type: "list",
            message: "Please select the position of the new employee",
            name: 'employeeRole',
            choices: ['Engineer' ,'Intern']
        },

        {
            type: "input",
            message: "Please enter the first and last name of the employee",
            name: 'employeeName',
        },

        {
            type: "input",
            message: "Please enter the employees email address",
            name: "employeeEmail",
        },

        {
            type: "input",
            message:  "Please eneter the Employee ID Number" ,
            name: 'employeeId',

        },
        {
            type: "input",
            message: "Please enter the your Engineers Github profile",
            name: 'engineerGithub',
            when: answers => answers.employeeRole == 'Engineer'
        },
        {
            type: "input",
            message: "Please enter the school your Intern is currently attending",
            name: 'internSchool',
            when: answers => answers.employeeRole == 'Intern'

        },
        {
            type: "confirm",
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
    })
};


function generateHTML(cards) {
fs.writeFile('./dist/index.html',
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <title>Document</title>
</head>
<body>
    
</body>
</html>
    
    `,
    (err) => err ? console.error(err) : console.log("The Team profile has succuessfully be genereated to index.html"));
};

    //genereate the employee cards via prompt questions
    function createCards() {
        let employeeCards = '';
        let employeeInfo = '';
        let employeeIcon = '';

        for (i = 0 ; i < team.length; i++) {
            if(team[i].getRole() == 'Manager') {
                employeeIcon = `fa-regular fa-user`;
                employeeInfo = `Office Number: ${team[i].officeNumber}`
            } else if (team[i].getRole() == 'Engineer') {
                employeeIcon = `fa-regular fa-computer`
                employeeInfo = `Github: <a href="https://github.com/${team[i].engineerGithub}" target="_blank"> ${team[i].engineerGithub}</a>}`;
            } else if (team[i].getRole() == 'Intern') {
                employeeIcon = `fa-regular coffee`;
                employeeInfo = `School: ${team[i].school}`;
            }

            employeeCards += `
            <div class="card">
    <div class="card-body">
        <h5 class="card-title">${team[i].name}</h5>
            <p class="card-text">
                <span><i class="${employeeIcon}"></i></span>
                <span></span>
            </p>
    </div>
    <ul>
        <li>ID: ${team[i].id}</li>
        <li>Email:<a href="mailto:${team[i].email}">${team[i].email}</a></li>
        <li>${employeeInfo}</li>
    </ul>
</div> 
  `
        }
        return employeeCards;
    }

        generateTeam();