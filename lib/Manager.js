const Emp = require('./Employee');

module.exports = function Manager(name, id, email, officeNumber) {
    Emp.call(this, name, id, email);
    this.officeNumber = officeNumber;
    this.getRole = function() {
        return "Manager"
    }
    this.getOfficeNumber = function() {
        return this.officeNumber
    }

}