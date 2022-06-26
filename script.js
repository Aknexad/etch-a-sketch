function boxs() {
  let container = document.querySelector('.gridArya');
  let addDiv = document.createElement('div');
  container.appendChild(addDiv);
  addDiv.classList.add('empty');
}

const Draw = () => {
  let alldiv = document.querySelectorAll('.empty');
  alldiv.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      element.classList.add('fill');
    });
  });
};

for (let i = 0; i < 256; i++) {
  boxs();
}

Draw();
