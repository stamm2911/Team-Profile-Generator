class Employee {
  constructor(id, name, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  };
  getName() {
    console.log(`Name: ${this.name}`);
  };
  getId() {
      console.log(`Id: ${this.id}`)
  };
  getEmail() {
      console.log(`Email: ${this.email}`);
  };
  getRole(){
      console.log(`Role: ${this.role}`);
  };
};

module.exports = Employee;
