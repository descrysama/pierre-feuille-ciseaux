

let contentSelect = document.querySelector('.content');
let controllerBoxSelect = document.querySelector('.controllerBox');
let ImgPPC = ['/img/rock.png', '/img/paper.png', '/img/cisors.png'];
let scoreLeft = 0; //Score du joueur
let scoreRight = 0; //Score de l'IA

const randomChoice = (min, max) => {
  return Math.random() * (max - min);
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
      createChildDiv.setAttribute('type', 'submit');
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
// fonction qui réaffiche les valeurs
const updateInfos = () => {
  let getScore1 = document.getElementById('score0');
  let getScore2 = document.getElementById('score1');
  getScore1.textContent = score1;
  getScore2.textContent = score2;
  
}

//fonction déclanchée par le bouton "JOUER" dans le HTML et qui lance le jeu.
function beginGame() {
    document.getElementById('playButton').remove();
    gameInfos()
    controllerBox()
    
}

contentSelect.addEventListener('submit', (event) => {
  event.preventDefault()

  for (let i = 0; i < 3; i++) {
    let gameButtons = document.getElementById('gamebutton'+[i]);
    gameButtons.onclick = () => {
    if (gameButtons.textContent == 'Pierre') {
      document.getElementById('img0').src = ImgPPC[0]
      console.log('pierre');
    } else if (gameButtons.textContent == 'Papier') {
      console.log('papier');
      document.getElementById('img0').src = ImgPPC[1]
    } else {
      document.getElementById('img0').src = ImgPPC[2]
      console.log('ciseaux');
    }
  }
  }
})

