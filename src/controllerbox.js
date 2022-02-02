const controllerBox = () => {
  let contentSelect = document.querySelector('.content');
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

export default controllerBox