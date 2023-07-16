function setGrid(size) {
  for(i = 0; i < Math.pow(size,2); i++){
    let tile = document.createElement('div');
    tile.classList.add('tile');
    let tileSize = 720/size;
    tile.style.width = tileSize.toString() + "px";
    tile.style.height = tileSize.toString() + "px";
    tile.addEventListener('mouseover', () => {
      tile.classList.add('colored');
    });
    container.appendChild(tile);
  }
}

function killGrid(){
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
}

const container = document.querySelector('.container');
let gridSize = 16;

setGrid(gridSize);