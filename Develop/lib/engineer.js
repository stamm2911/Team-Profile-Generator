const employee = require('./employee');

class Engineer extends employee{
    constructor (name, id, email, github){
        super(name,id,email);
        this.github = github;
        this.role = 'engineer';
    };
    getGitHub(){
        console.log(`GitHub: ${this.github}`);
    };
    getRole(){
        console.log(`Role: ${this.role}`);
    };
};

module.exports = Engineer;