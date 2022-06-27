function gridArea(sizeValue) {
  // clean grid area
  let clearGrid = document.querySelectorAll('div.empty');
  clearGrid.forEach((element) => {
    element.remove();
  });

  // Change css style grid
  let columRowSize = document.querySelector('.gridArea');
  columRowSize.style.gridTemplateColumns = `repeat(${sizeValue}, 1fr)`;
  columRowSize.style.gridTemplateRows = `repeat(${sizeValue}, 1fr)`;

  // create gride
  for (let i = 0; i < sizeValue * sizeValue; i++) {
    let container = document.querySelector('.gridArea');
    let addDiv = document.createElement('div');
    container.appendChild(addDiv);
    addDiv.classList.add('empty');
  }
}

const draw = () => {
  let alldiv = document.querySelectorAll('.empty');
  alldiv.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      element.classList.add('fill');
    });
  });
};

const game = () => {
  let selectInput = document.querySelector('#gtidSize');
  selectInput.addEventListener('click', (e) => {
    let selectValue = e.target.value;
    gridArea(selectValue);
    draw();
  });
};

game();
