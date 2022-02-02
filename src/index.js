

let contentSelect = document.querySelector('.content');
const controllerBox = () => {
    let createParentDiv = document.createElement('div');
    createParentDiv.setAttribute('class','controllerBox')
    
    let ppc = ['Pierre', 'Papier', 'Ciseaux'];
    for (let i = 0; i < ppc.length; i++) {
      let createChildDiv = document.createElement('div');
      let createP = document.createElement('p');
      createChildDiv.setAttribute('class', 'gamebutton');
      createP.textContent = ppc[i];
      createChildDiv.appendChild(createP);
      createParentDiv.appendChild(createChildDiv);
      contentSelect.appendChild(createParentDiv)
    }
}
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


function beginGame() {
    document.getElementById('playButton').remove();
    gameInfos()
    controllerBox()
    
}


