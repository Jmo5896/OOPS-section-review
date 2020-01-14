const Emp = require('./Employee');

module.exports = function Intern(name, id, email, school) {
    Emp.call(this, name, id, email);
    this.school = school;
    this.getRole = function() {
        return "Intern"
    }
    this.getSchool = function() {
        return this.school
    }

}