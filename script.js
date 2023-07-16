const container = document.querySelector('.container');
let gridSize = 16;
for(i = 0; i < Math.pow(gridSize,2); i++){
  let tile = document.createElement('div');
  tile.classList.add('tile');
  let tileSize = 720/gridSize;
  tile.style.width = tileSize.toString() + "px";
  tile.style.height = tileSize.toString() + "px";
  container.appendChild(tile);
}