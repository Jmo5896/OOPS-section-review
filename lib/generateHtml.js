const fs = require('fs');
let html = fs.readFileSync('./templates/main.html', 'utf8').split('$%');

function tempSelector(prof,item) {
    let template = fs.readFileSync(`./templates/${prof.toLowerCase()}.html`, 'utf8').split('$%');
    const role = template.indexOf("role");
    template[role] = prof;
    for (let key in item) {
        if (template.includes(key)){
            const myIndex = template.indexOf(key);
            template[myIndex] = item[key]
        }
    }
    return template.join('');
}

module.exports = function generateHtml(data) {
    const team = data.map(item => tempSelector(item.getRole(),item)).join('');
    const myIndex = html.indexOf('team');
    html[myIndex] = team;
    fs.writeFile("./output/index.html", html.join(''), err => {
        if (err) throw err
    });
    return "team has been updated!  Check out index.html in the output folder!"
}