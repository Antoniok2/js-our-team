let team = [
    {
        "imgteam" : "img/angela-caroll-chief-editor.jpg",
        "nameTeam" : "Angela Carol",
        "roleTeam" : "Chief Editor"
    },

    {
        "imgteam" : "img/angela-lopez-social-media-manager.jpg",
        "nameTeam" : "Angela Lopez",
        "roleTeam" : "Social Media Manager"
    },

    {
        "imgteam" : "img/barbara-ramos-graphic-designer.jpg",
        "nameTeam" : "Barbara Ramos",
        "roleTeam" : "Graphic Designer"
    },

    {
        "imgteam" : "img/scott-estrada-developer.jpg",
        "nameTeam" : "Scott Estrada",
        "roleTeam" : "Developer"
    },

    {
        "imgteam" : "img/walter-gordon-office-manager.jpg",
        "nameTeam" : "Walter Gordon",
        "roleTeam" : "Office Manager"
    },

    {
        "imgteam" : "img/wayne-barnett-founder-ceo.jpg",
        "nameTeam" : "Wayne Barnett",
        "roleTeam" : "Founder-Ceo"
    }
]

console.log(team);

// VARIABILI
const teamCont = document.querySelector(".team-container");
let teamCard = "";

// ATTRAVERO UN CICLO INSERISCO TUTTE LE SCHEDE DEL TEAM
for (i = 0; i < team.length; i++) {
    console.log(i);
    teamCard += `
    <div class="team-card">
            <div class="card-image">
              <img
                src="img/wayne-barnett-founder-ceo.jpg"
                alt="Wayne Barnett"
              />
            </div>
            <div class="card-text">
              <h3>Wayne Barnett</h3>
              <p>Founder & CEO</p>
            </div>
          </div>`
}

teamCont.innerHTML = teamCard;

