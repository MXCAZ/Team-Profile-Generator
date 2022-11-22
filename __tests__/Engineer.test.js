const engineer = require("../lib/Engineer");

describe("Test Engineer", () => {
  it("Testing Engineer Github Account", () => {
    const testGithub = "MXCAZ";
    const addGithub = new engineer(
      "Benito",
      123,
      "benito@gmail.com",
      testGithub
    );
    expect(addGithub.github).toBe(testGithub);
  });

  it("Properly add a Github account with getGithub() method", () => {
    const testGithub = "MXCAZ";
    const addGithub = new engineer(
      "Benito",
      123,
      "Benito@gmail.com",
      testGithub
    );
    expect(addGithub.getGithub()).toBe(testGithub);
  });

  it("Properly add a Engineer role with getRole() method", () => {
    const engineerRole = "Engineer";
    const addRole = new engineer("Benito", 123, "benito@gmail.com", "MXCAZ");
    expect(addRole.getRole()).toBe(engineerRole);
  });
});
