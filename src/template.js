// ----Function that create a team and display the cards of each one----
const teamEmployees = (team) => {
  // ---Create the manager html---
  const addManager = (manager) => {
    return `<div style="width: 19rem">
          <div class="card-header p-3 mb-2 bg-danger text-white">
            <h3>${manager.getName()}</h3>
            <h4><i class="bi bi-person-workspace"></i> ${manager.getRole()}</h4>
          </div>
          <div class="card">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Id: ${manager.getId()}</li>
              <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a>
             </li>
              <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
      </div>`;
  };
  // ---Create the engineer html card---
  const addEngineer = (engineer) => {
    return `<div style="width: 19rem">
    <div class="card-header p-3 mb-2 bg-danger text-white">
      <h3>${engineer.getName()}</h3>
      <h4><i class="bi bi-laptop"></i>  ${engineer.getRole()}</h4>
    </div>
    <div class="card">
      <ul class="list-group">
        <li class="list-group-item">Id: ${engineer.getId()}</li>
        <li class="list-group-item">Email:<a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a>
        <li class="list-group-item">Github:<a href="https://github.com/${engineer.getGithub()}"> ${engineer.getGithub()}</a></li>
      </ul>
    </div>
  </div>
  `;
  };
  // ---Create the intern html ---
  const addIntern = (intern) => {
    return `<div style="width: 19rem">
    <div class="card-header p-3 mb-2 bg-danger text-white">
      <h3>${intern.getName()}</h3>
      <h4><i class="bi bi-journal-text"></i> ${intern.getRole()}</h4>
    </div>
    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${intern.getId()}</li>
        <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div> `;
  };
  // ----it will filter the answers an select the team member---
  const employeeCards = [];

  employeeCards.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => addManager(manager))
  );
  employeeCards.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => addEngineer(engineer))
  );
  employeeCards.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => addIntern(intern))
  );

  return employeeCards;
};
// ----- export function to generate entire page----
module.exports = (team) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Team Selector</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
      </head>
      <body>
        <header class="p-3 mb-2 bg-primary text-white text-center">
          <h1>My Team</h1>
        </header>
    
        <main class="row team-area col-12 d-flex justify-content-evenly">
        ${teamEmployees(team)}
        </main>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossorigin="anonymous"></script>
      </body>
    </html>
    
        `;
};
