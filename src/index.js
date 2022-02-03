import { create } from 'canvas-confetti';
import Signe from './signe'


let contentSelect = document.querySelector('.content');
let score1 = 0; //Score du joueur
let score2 = 0; //Score de l'IA
let randomchoice;
let imgRandomChoice;
let imgPlayerChoice;
let toggle = false;
let winSound = new Audio('./sounds/winning.wav')
let loseSound = new Audio('./sounds/loosing.wav')


let pierreSigne = new Signe('Pierre', 'Papier', 'Ciseaux', './img/rock.png');
let papierSigne = new Signe('Papier', 'Ciseaux', 'Pierre', './img/paper.png');
let ciseauxSigne = new Signe('Ciseaux', 'Pierre', 'Papier', './img/cisors.png');

let signeArray = [pierreSigne, papierSigne, ciseauxSigne]
let signeArrayImg = [pierreSigne.image, papierSigne.image, ciseauxSigne.image]

// Choix aléatoire pour l'IA.
const randomChoice = () => {
  let randomnumber = Math.floor(Math.random() * 3);
  randomchoice = signeArray[randomnumber].name;
  return randomchoice;
  
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
    let createMiddleDiv = document.createElement('div');
    let createh1 = document.createElement('h1');
    createh1.setAttribute('id', 'statusinfo')
    createMiddleDiv.setAttribute('class','splitter');
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
      createMiddleDiv.appendChild(createChildDiv)
      createParentDiv.appendChild(createMiddleDiv);
      
    }
    createParentDiv.appendChild(createh1)
    contentSelect.appendChild(createParentDiv)
}
// fonction qui réaffiche les valeurs.
const updateInfos = () => {
  let getScore1 = document.getElementById('score0');
  let getScore2 = document.getElementById('score1');
  let getImg1 = document.getElementById('img0');
  let getImg2 = document.getElementById('img1');
  getScore1.textContent = score1;
  getScore2.textContent = score2;
  getImg1.src = imgPlayerChoice;
  getImg2.src = imgRandomChoice;

  
}
//fonction déclanchée par le bouton "JOUER" dans le HTML et qui lance le jeu.
document.getElementById('playButton').onclick = () => {
  document.getElementById('playButton').remove();
  gameInfos()
  controllerBox()
  //boucle qui permet de savoir sur quoi on clique.
  for (let i = 0; i != 3; i++) {
    let gameButtons = document.getElementById('gamebutton'+[i]);
    let statusinfo = document.getElementById('statusinfo')
    gameButtons.onclick = () => {
      randomChoice();
      statusinfo.textContent = "";
      if (toggle == true) {
        statusinfo.classList.toggle('green')
        toggle = false;
      }
      //cycle de conditions pour le jeu (Ordre de supériorité des signes).
      if (gameButtons.textContent == pierreSigne.name && randomchoice == pierreSigne.loseAgainst) {
        score2++
        imgPlayerChoice = pierreSigne.image
        imgRandomChoice = papierSigne.image
        statusinfo.textContent = "Perdu t'es nul( le ) 🤣!";
        loseSound.play()
      } else if (gameButtons.textContent == papierSigne.name && randomchoice == papierSigne.loseAgainst) {
        score2++
        imgPlayerChoice = papierSigne.image
        imgRandomChoice = ciseauxSigne.image
        statusinfo.textContent = "Perdu t'es nul( le ) 🤣!";
        loseSound.play()
      } else if (gameButtons.textContent == ciseauxSigne.name && randomchoice == ciseauxSigne.loseAgainst) {
        score2++
        imgPlayerChoice = ciseauxSigne.image
        imgRandomChoice = pierreSigne.image
        statusinfo.textContent = "Perdu t'es nul( le ) 🤣!";
        loseSound.play()
      } else if (gameButtons.textContent == pierreSigne.name && randomchoice == pierreSigne.name) {
        imgPlayerChoice = pierreSigne.image
        imgRandomChoice = pierreSigne.image
        statusinfo.textContent = "Egalité 🥱";
        loseSound.play()
      } else if (gameButtons.textContent == papierSigne.name && randomchoice == papierSigne.name) {
        imgPlayerChoice = papierSigne.image
        imgRandomChoice = papierSigne.image
        statusinfo.textContent = "Egalité 🥱";
        loseSound.play()
      } else if (gameButtons.textContent == ciseauxSigne.name && randomchoice == ciseauxSigne.name) {
        imgPlayerChoice = ciseauxSigne.image
        imgRandomChoice = ciseauxSigne.image
        statusinfo.textContent = "Egalité 🥱";
        loseSound.play()
      } else {
        score1++
        statusinfo.textContent = "Gagné (Bien joué) ✔!";
        winSound.play()
        statusinfo.classList.toggle('green')
        toggle = true;
        if (gameButtons.textContent == pierreSigne.name && randomchoice == pierreSigne.winAgainst) {
          imgPlayerChoice = pierreSigne.image
          imgRandomChoice = ciseauxSigne.image
        } else if (gameButtons.textContent == papierSigne.name && randomchoice == papierSigne.winAgainst) {
          imgPlayerChoice = papierSigne.image
          imgRandomChoice = pierreSigne.image
        } else {
            imgPlayerChoice = ciseauxSigne.image
            imgRandomChoice = papierSigne.image
        }
      }

      updateInfos()
    }
  }
}





