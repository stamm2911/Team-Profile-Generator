const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("initialValues", () => {
    it("Should return number as typeOf id", () => {
      let result = new Employee(2345).id;
      result = typeof result;
      expect(result).toEqual("number");
    });
    it("Should return string as typeOf name", () => {
      let result = new Employee("testId", "testName").name;
      result = typeof result;
      expect(result).toEqual("string");
    });
    it("Should return string as typeOf email", () => {
      let result = new Employee("testId", "testName", "testEmail").email;
      result = typeof result;
      expect(result).toEqual("string");
    });
    it("Should return 'Employee'", () => {
      const result = new Employee().role;
      expect(result).toEqual(`Employee`);
    });
  });
});
