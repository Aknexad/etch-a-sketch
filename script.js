function gridArea(sizeValue = 16) {
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
    document.querySelector(
      'p'
    ).innerHTML = `${selectValue} x ${selectValue}`;
  });
};

const cleanArea = () => {
  let clearBtn = document.querySelector('#clear');
  clearBtn.addEventListener('click', () => {
    gridArea();
    draw();
    document.querySelector('#gtidSize').value = 16;
    document.querySelector('p').innerHTML = `16 x 16`;
  });
};

const randomBgColor = () => {
  let randumBtn = document.querySelector('#random');
  randumBtn.disabled = true;
  randumBtn.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);

    document.querySelector(
      '.fill'
    ).style.backgroundColor = `rbg(${r},${b},${g})`;
  });
};

gridArea();
draw();
game();
cleanArea();
randomBgColor();
