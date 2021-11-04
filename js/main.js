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
];


// VARIABILI
const teamCont = document.querySelector(".team-container");
let teamCard = "";

const nomeImput = document.getElementById("name");
const ruoloImput = document.getElementById("role");
const imgImput = document.getElementById("image");
const aggiungiFileImput = document.getElementById("addMemberButton");


// ATTRAVERO UN CICLO INSERISCO TUTTE LE SCHEDE DEL TEAM
for (i = 0; i < team.length; i++) {
    let nameCand = "";
    let imgCand = "";
    let roleCand = "";

    for (let key in team) {
        nameCand = team[i].nameTeam;
        imgCand = team[i].imgteam;
        roleCand = team[i].roleTeam;
    }

    teamCard += `
    <div class="team-card">
            <div class="card-image">
              <img
                src="${imgCand}"
                alt="${nameCand}"
              />
            </div>
            <div class="card-text">
              <h3>${nameCand}</h3>
              <p>${roleCand}</p>
            </div>
          </div>`
}
// IN QUESTO MODO INSERISCO LE SCHEDE CREATE NELL'HTML
teamCont.innerHTML = teamCard;


// CREO UN EVENTO AL CLICK DEL PULSANTE AGGIUNGI
aggiungiFileImput.addEventListener('click',
    function() {

    // ASSEGNO DELLE VARIABILI IN MODO DA POI POTERLE RICHIAMARE PER LA CREAZIONE DELLA NUOVA SCHEDA CON I DATI INSERITI NEL FORM
    let nome = nomeImput.value;
    let ruolo = ruoloImput.value;
    let foto = imgImput.value;
    
    // IN QUESTO MODO DOPO CHE L'UTENTE SCRIVE I DATI SI VA A CREARE LA NUOVA CARD
    let nuovaCard = {
        "nameTeam" : nome,
        "imgTeam" : foto,
        "roleTeam" : ruolo
    }

    // E QUI DOPO AVER INSERITO I DATI E CLICCATO SU ADD MI VA A PUSHARE LA NUOVA SCHEDA DELL'IMPIEGATO
    team.push(nuovaCard);
    console.log(nuovaCard);

    // INFINE CREO IL NUOVO FILE DA INSERIRE NELL'HTML
    teamCard += `
    <div class="team-card">
            <div class="card-image">
              <img
                src="${foto}"
                alt="${nome}"
              />
            </div>
            <div class="card-text">
              <h3>${nome}</h3>
              <p>${ruolo}</p>
            </div>
          </div>`

    // QUI ALLEGO IL NUOVO FILE SUL CONTENITORE TEAM 
    teamCont.innerHTML = teamCard;
    }
)