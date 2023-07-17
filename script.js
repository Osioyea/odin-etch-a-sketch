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

function resetGrid(size){
  killGrid();
  setGrid(size);
}

function sizeSelector(){
  let size = prompt("Select a new grid size", "16");
  size = Number(size);
  if(size > 0 && size <101){
    resetGrid(size);
  }
}

const container = document.querySelector('.container');
const reset = document.querySelector('.reset');
reset.addEventListener('click', sizeSelector);
let gridSize = 16;

setGrid(gridSize);