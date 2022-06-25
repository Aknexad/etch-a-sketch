function boxs() {
  let container = document.querySelector('.container');
  let addDiv = document.createElement('div');
  container.appendChild(addDiv);
  addDiv.classList.add('empty');
}

for (let i = 0; i < 256; i++) {
  boxs();
}

let alldiv = document.querySelectorAll('.empty');
alldiv.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    element.classList.add('fill');
  });
});
