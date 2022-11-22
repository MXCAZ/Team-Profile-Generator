const employee = require("../lib/Employee");

// -----testing Employee.js using jest -----

describe("Test Employee", () => {
  it("Create a new employee.", () => {
    const addNewEmployee = new employee();
    expect(typeof addNewEmployee).toBe("object");
  });

  it("Properly add a new name.", () => {
    const name = "Benito";
    const addNewEmployee = new employee(name);
    expect(addNewEmployee.name).toBe(name);
  });

  it("Testing Id.", () => {
    const id = 123;
    const addNewId = new employee("Benito", id);
    expect(addNewId.id).toBe(id);
  });

  test("Testing Email.", () => {
    const email = "benito@gmail.com";
    const addNewEmail = new employee("Benito", 123, email);
    expect(addNewEmail.email).toBe(email);
  });

  it("Properly add a name with getName() method", () => {
    const testName = "Benito";
    const employeeName = new employee(testName);
    expect(employeeName.getName()).toBe(testName);
  });

  test("Properly add a Id with getId() method", () => {
    const testId = 123;
    const employeeId = new employee("Benito", testId);
    expect(employeeId.getId()).toBe(testId);
  });

  it("Properly add a email with the getEmail() method", () => {
    const testEmail = "Benito@gmail.com";
    const employeeEmail = new employee("Benito", 123, testEmail);
    expect(employeeEmail.getEmail()).toBe(testEmail);
  });

  it("Test Role", () => {
    const testRole = "Employee";
    const employeeRole = new employee("Benitos", 123, "Benito@gmail.com");
    expect(employeeRole.getRole()).toBe(testRole);
  });
});
