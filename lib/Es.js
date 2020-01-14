function Employee(name, id, title) {
    this.name = name;
    this.id = id;
    this.title = title;

    this.getName = function() {
        return this.name;
    }

    this.getId = function() {
        return this.id;
    };
    this.Email = function() {
        return "PLACEHOLDER";
    };
    this.getRole = function() {
        return "Employee"
    }

}