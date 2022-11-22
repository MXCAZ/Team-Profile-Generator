const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");

const myTeam = [];
// ---Function that use inquirer prompts that selects the team members you want to add on the command line----
function runApp() {
  // ----Function that selects a team member depends on the position you chose its going to add the team member you going to add until you don't need any more members-------
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What type of employee you want to add to the the team?",
          name: "addEmployee",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No more team members are needed.",
          ],
        },
      ])
      .then(function (answer) {
        switch (answer.addEmployee) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;

          default:
            builderHTML();
        }
      });
  }
  // ----function that creates a manager on the team using inquirer prompt-----
  function addManager() {
    inquirer
      .prompt([
        {
          name: "managerName",
          type: "input",
          message: "Whats the managers name?",
        },
        {
          name: "managerId",
          type: "input",
          message: "Whats the managers Id?",
        },
        {
          name: "managerEmail",
          type: "input",
          Message: "Whats the managers Email?",
        },
        {
          name: "managerOfficeNumber",
          type: "input",
          message: "Whats the managers office number?",
        },
      ])
      .then((answers) => {
        // ----it will creates a variable with all the answers pushing the content to an empty array an then it it will run the function createTeam() ---
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        myTeam.push(manager);
        createTeam();
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          name: "engineerName",
          type: "input",
          message: "Whats the engineers name?",
        },
        {
          name: "engineerId",
          type: "input",
          message: "Whats the engineers ID?",
        },
        {
          name: "engineerEmail",
          type: "input",
          message: "Whats the engineers email address?",
        },
        {
          name: "engineerGithub",
          type: "input",
          message: "Whats the engineers Github user name?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        myTeam.push(engineer);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          name: "internName",
          type: "input",
          message: "Whats the intern name?",
        },
        {
          name: "internId",
          type: "input",
          message: "Whats the intern ID?",
        },
        {
          name: "internEmail",
          type: "input",
          message: "Whats the intern email address?",
        },
        {
          name: "internSchool",
          type: "input",
          message: "Whats the intern School?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        myTeam.push(intern);
        createTeam();
      });
  }

  createTeam();
}

// ----function that creates the html file with all the answers that are allowed on myTeam array---
function builderHTML() {
  fs.writeFile(`index.html`, template(myTeam), (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log("Your Html its ready!");
}
runApp();
