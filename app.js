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
        if (ans.profession === "Engineer") {
            engineer(ans);
        } else if (ans.profession === "Intern") {
            intern(ans);
        } else {
            manager(ans);
        }
    })
}

function engineer(data) {
    inquirer.prompt([
        {
            type: 'type',
            name: 'github',
            message: 'What is your team members github user name?'
        }
    ]).then(ans => {
        const teamMember = new models[data.profession](data.name, data.id, data.email, ans.github);
        myTeam.push(teamMember);
        addAnother()
    });
}

function intern(data) {
    inquirer.prompt([
        {
            type: 'type',
            name: 'school',
            message: 'What school is your team member from?'
        }
    ]).then(ans => {
        const teamMember = new models[data.profession](data.name, data.id, data.email, ans.school);
        myTeam.push(teamMember);
        addAnother();
    });
}

function manager(data) {
    inquirer.prompt([
        {
            type: 'type',
            name: 'office',
            message: 'What is your team members office number?'
        }
    ]).then(ans => {
        const teamMember = new models[data.profession](data.name, data.id, data.email, ans.office);
        myTeam.push(teamMember);
        addAnother();
    });
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