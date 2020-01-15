const inquirer = require('inquirer');
const fs = require('fs');
const models = {
    Engineer: require('./lib/Engineer'),
    Intern: require('./lib/Intern'),
    Manager: require('./lib/Manager'),
};
const genHtml = require('./lib/generateHtml');
console.log('Welcome! Please build your team below!')
let myTeam = []

function init() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team members name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your team members ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your team members email address?'
        },
        {
            type: 'list',
            name: 'profession',
            message: 'What is your team members role?',
            choices: ['Engineer', 'Intern', 'Manager']
        }
    ]).then(ans => {
        const teamMember = new models[ans.profession](ans.name, ans.id, ans.email);
        myTeam.push(teamMember);

        addAnother()
    })
}

function addAnother() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Would you like to add another team member?',
            choices: ['yes', 'no']
        }
    ]).then(ans => {
        if (ans.choice === 'yes') {
            init()
        } else {
            console.log('generating team...');
            console.log(myTeam);
            return false;
        }
    })
}

init();