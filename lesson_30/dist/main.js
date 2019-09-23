var Employee = (function () {
    function Employee(name, position) {
        this.name = name;
        this.position = position;
        this.company = "UTU";
    }
    Employee.prototype.printToConsole = function () {
        console.log("Employee " + this.name + ", position - " + this.position + ", company - " + this.company);
    };
    return Employee;
}());
var empl = new Employee("Ivan", "Developer");
empl.name = "John";
empl.position = "Tester";
empl.printToConsole();
//# sourceMappingURL=main.js.map