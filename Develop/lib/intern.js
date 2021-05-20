const  employee = require('./employee');

class Intern extends employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.role = 'intern';
    };
    getSchool(){
        console.log(`School: ${this.school}`);
    };
    getRole(){
        console.log(`Role: ${this.role}`);
    };
};

module.exports = Intern;