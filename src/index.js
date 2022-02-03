

let contentSelect = document.querySelector('.content');
let ImgPPC = ['/img/rock.png', '/img/paper.png', '/img/cisors.png'];
let score1 = 0; //Score du joueur
let score2 = 0; //Score de l'IA
let randomchoice;
let playerchoice;

// Choix aléatoire pour l'IA.
const randomChoice = () => {
  return Math.floor(Math.random()* 3);
}
// Fonction qui ajoute mes boutons de jeu.
const controllerBox = () => {
    let createParentDiv = document.createElement('div');
    createParentDiv.setAttribute('class','controllerBox')
    
    let ppc = ['Pierre', 'Papier', 'Ciseaux'];
    for (let i = 0; i < ppc.length; i++) {
      let createChildDiv = document.createElement('button');
      let createP = document.createElement('p');
      createChildDiv.setAttribute('class', 'gamebuttons');
      createChildDiv.setAttribute('id', 'gamebutton'+[i]);
      createP.textContent = ppc[i];
      createChildDiv.appendChild(createP);
      createParentDiv.appendChild(createChildDiv);
      contentSelect.appendChild(createParentDiv)
    }
}
// Fonction qui affiche les données de jeu.
const gameInfos = () => {
    let createParentDiv = document.createElement('div');
    createParentDiv.setAttribute('class','game-info');

    let leftright = ['left-content', 'right-content'];
    for (let i = 0; i < leftright.length; i++) {
      let createChildDiv = document.createElement('div');
      let createScore = document.createElement('h1');
      createScore.setAttribute('id', 'score'+ [i])
      let createImg = document.createElement('img');
      createImg.setAttribute('class', 'game-img');
      createImg.setAttribute('id', 'img'+ [i])
      createImg.src = './img/pending.png';
      createChildDiv.setAttribute('class', leftright[i]);
      createScore.textContent = 0;
      createChildDiv.appendChild(createScore);
      createChildDiv.appendChild(createImg);
      createParentDiv.appendChild(createChildDiv);
      contentSelect.appendChild(createParentDiv)
    }
}
// fonction qui réaffiche les valeurs.
const updateInfos = () => {
  let getScore1 = document.getElementById('score0');
  let getScore2 = document.getElementById('score1');
  let getImg1 = document.getElementById('img0')
  let getImg2 = document.getElementById('img1')
  getScore1.textContent = score1;
  getScore2.textContent = score2;
  getImg1.src = ImgPPC[playerchoice]
  getImg2.src = ImgPPC[randomchoice]
  
}
//fonction déclanchée par le bouton "JOUER" dans le HTML et qui lance le jeu.
function beginGame() {
    document.getElementById('playButton').remove();
    gameInfos()
    controllerBox()
    //boucle qui permet de savoir sur quoi on clique.
    for (let i = 0; i < 3; i++) {
      let gameButtons = document.getElementById('gamebutton'+[i]);
      gameButtons.onclick = () => {
        randomchoice = randomChoice();
        if (gameButtons.textContent == 'Pierre' && randomchoice == 1) {
          score2++
          playerchoice = 0;
        } else if (gameButtons.textContent == 'Papier' && randomchoice == 2) {
          score2++
          playerchoice = 1;
        } else if (gameButtons.textContent == 'Ciseaux' && randomchoice == 0) {
          score2++
          playerchoice = 2;
        } else if (gameButtons.textContent == 'Pierre' && randomchoice == 0) {
          console.log(randomchoice);
          playerchoice = 0;
        } else if (gameButtons.textContent == 'Papier' && randomchoice == 1) {
          console.log(randomchoice);
          playerchoice = 1;
        } else if (gameButtons.textContent == 'Ciseaux' && randomchoice == 2) {
          console.log(randomchoice);
          playerchoice = 2;
        } else {
          score1++
          if (gameButtons.textContent == 'Pierre') {
            playerchoice = 0;
          } else if (gameButtons.textContent == 'Papier') {
            playerchoice = 1;
          } else {
            playerchoice = 2;
          }
        }

        updateInfos()
      }
    }
}





