const Emp = require('./Employee');

module.exports = function Engineer(name, id, email, github) {
    Emp.call(this, name, id, email);
    this.github = github;
    this.getRole = function() {
        return "Engineer"
    }
    this.getGithub = function() {
        return this.github
    }

}
