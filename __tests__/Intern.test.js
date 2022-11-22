const intern = require("../lib/Intern");

describe("Test Intern", () => {
  it("Test adding intern school", () => {
    const internSchool = "Harvard";
    const addIntern = new intern(
      "Benito",
      123,
      "Benito@gmail.com",
      internSchool
    );
    expect(addIntern.school).toBe(internSchool);
  });

  it("Properly add the intern school with getSchool() method", () => {
    const internSchool = "Harvard";
    const addIntern = new intern(
      "Benito",
      123,
      "benito@gmail.com",
      internSchool
    );
    expect(addIntern.getSchool()).toBe(internSchool);
  });

  it("Properly add a intern role with getRole() method", () => {
    const testRole = "Intern";
    const addRole = new intern("Benito", 123, "benito@gmail.com", "Harvard");
    expect(addRole.getRole()).toBe(testRole);
  });
});
