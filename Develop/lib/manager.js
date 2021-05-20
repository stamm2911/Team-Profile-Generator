const Employee = require('./employee');

class Manager extends Employee {
    constructor(id, name, email,officeNumber){
        super(id, name, email);
        this.officeNumber = officeNumber;
        this.role = 'manager';
    }
    getofficeNumber(){
        console.log(`officeNumber: ${this.officeNumber}`)
    }
    getRole(){
        console.log(`Role: ${this.role}`);
    };
};

module.exports = Manager;