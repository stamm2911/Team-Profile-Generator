const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const { inherits } = require("util");
const { StringDecoder } = require("string_decoder");
const teamMembers = [];

const managerQuestions = [
  {
    type: "input",
    message: "Enter manager name",
    name: "name",
  },
  {
    type: "input",
    message: "Enter manager id",
    name: "id",
  },
  {
    type: "input",
    message: "Enter manager email",
    name: "email",
  },
  {
    type: "input",
    message: "Enter manager office number",
    name: "officeNumber",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "Enter engineer's name",
    name: "name",
  },
  {
    type: "input",
    message: "Enter engineer's id",
    name: "id",
  },
  {
    type: "input",
    message: "Enter engineer's email",
    name: "email",
  },
  {
    type: "input",
    message: "Enter engineer's gitHub username",
    name: "github",
  },
];

const interQuestions = [
  {
    type: "input",
    message: "Enter inter name",
    name: "name",
  },
  {
    type: "input",
    message: "Enter inter id",
    name: "id",
  },
  {
    type: "input",
    message: "Enter inter email",
    name: "email",
  },
  {
    type: "input",
    message: "Enter inter school",
    name: "school",
  },
];

function createManager(data) {
  const manager = new Manager(
    data.id,
    data.name,
    data.email,
    data.officeNumber
  );
  manager.getName();
  manager.getId();
  manager.getEmail();
  manager.getofficeNumber();
  manager.getRole();

  teamMembers.push(manager);

  nextTeamMember();
}

function createEngineer(data) {
  const engineer = new Engineer(data.id, data.name, data.email, data.github);
  engineer.getName();
  engineer.getId();
  engineer.getEmail();
  engineer.getGitHub();
  engineer.getRole();

  teamMembers.push(engineer);

  nextTeamMember();
}

function createIntern(data) {
  const intern = new Intern(data.id, data.name, data.email, data.school);
  intern.getName();
  intern.getId();
  intern.getEmail();
  intern.getSchool();
  intern.getRole();

  teamMembers.push(intern);

  nextTeamMember();
};

function nextTeamMember() {
  inquirer
    .prompt({
      type: "list",
      message: "Whichtype of team members would you like to add?",
      name: "member",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members",
      ],
    })
    .then((data) => {
      switch (data.member) {
        case "Engineer":
          inquirer.prompt(engineerQuestions).then((data) => {
            createEngineer(data);
          });
          break;
        case "Intern":
          inquirer.prompt(interQuestions).then((data) => {
            createIntern(data);
          });
          break;
        default:
          renderPage();
          break;
      };
    });
};

function renderPage() {
  console.log(teamMembers);
  let cardsHTML = ``;
  for (let i = 0; i < teamMembers.length; i++) {
    console.log(teamMembers[i].role);
    switch(teamMembers[i].role){
      case 'manager':
        cardsHTML += `
        <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header card-title2 text-white bg-success">${teamMembers[i].name}</div>
            <div class="card-body">
              <h5 class="card-title"><i class="icon fas fa-tasks fa-2x"></i>${teamMembers[i].role.toUpperCase()}</h5>
              <div class="card-text">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-dark bg-light">ID: ${teamMembers[i].id}</li>
                  <li class="list-group-item text-dark bg-light">Email: ${teamMembers[i].email}</li>
                  <li class="list-group-item text-dark bg-light">Office: ${teamMembers[i].officeNumber}</li>
                </ul>
              </div>
            </div>
          </div>`;
          break;
        case 'engineer':
          cardsHTML += `
          <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header card-title2 text-white bg-success">${teamMembers[i].name}</div>
            <div class="card-body">
              <h5 class="card-title"><i class="icon fas fa-microchip fa-2x"></i>${teamMembers[i].role.toUpperCase()}</h5>
              <div class="card-text">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-dark bg-light">ID: ${teamMembers[i].id}</li>
                  <li class="list-group-item text-dark bg-light">Email: ${teamMembers[i].email}</li>
                  <li class="list-group-item text-dark bg-light">GitHub:<a href="https://github.com/${teamMembers[i].github}" target="_blank"> ${teamMembers[i].github}</a></li>
                </ul>
              </div>
            </div>
          </div>`;
          break;
        case 'intern':
          cardsHTML += `
          <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header card-title2 text-white bg-success">${teamMembers[i].name}</div>
            <div class="card-body">
              <h5 class="card-title"><i class="icon fas fa-graduation-cap fa-2x"></i>${teamMembers[i].role.toUpperCase()}</h5>
              <div class="card-text">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-dark bg-light">ID: ${teamMembers[i].id}</li>
                  <li class="list-group-item text-dark bg-light">Email: ${teamMembers[i].email}</li>
                  <li class="list-group-item text-dark bg-light">School: ${teamMembers[i].school}</li>
                </ul>
              </div>
            </div>
          </div>`;        
          break;
        default:
          break;
    };
  };
  const indexHTMLFile = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css" />
      <title>My team</title>
  </head>
  <header>
    <h1>
        My team
    </h1>
  </header>
  <body>
    <section>
        ${cardsHTML}
    </section>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
  </body>
  </html>`;

  fs.writeFile('./dist/indexTest.html', indexHTMLFile, (err) =>
    err ? console.log(err) : console.log(`Success!`)
  );
};

function init() {
  inquirer.prompt(managerQuestions).then((data) => {
    createManager(data);
  });
};

init();