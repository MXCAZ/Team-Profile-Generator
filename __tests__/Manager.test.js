const manager = require("../lib/Manager");

describe("Test Manager", () => {
  it("Testing Office numbers", () => {
    const officeNumber = 11;
    const addOfficeNumber = new manager(
      "Benito",
      123,
      "Benito@gmail.com",
      officeNumber
    );
    expect(addOfficeNumber.officeNumber).toBe(officeNumber);
  });

  it("Properly add a office Number with getOfficeNumber() method", () => {
    const officeNumber = 11;
    const addOfficeNumber = new manager(
      "Benito",
      123,
      "Benito@gmail.com",
      officeNumber
    );
    expect(addOfficeNumber.getOfficeNumber()).toBe(officeNumber);
  });

  it("Properly add a manager role with getRole() method", () => {
    const role = "Manager";
    const EmployeeRole = new manager("Benito", 123, "benito@gmail.com", 11);
    expect(EmployeeRole.getRole()).toBe(role);
  });
});
