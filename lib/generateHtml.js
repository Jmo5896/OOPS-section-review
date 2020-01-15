const fs = require('fs');
let html = fs.readFileSync('./templates/main.html', 'utf8').split('$%');
let team = []
module.exports = function generateHtml(data) {

    data.forEach(item => {
        if (data.getRole() === "Engineer") {

        } else if (data.getRole() === "Intern") {

        } else {

        }
    });
}