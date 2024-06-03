const boxes = document.querySelectorAll('.box');
const btns = document.querySelectorAll('button');


btns.forEach((button, index) => {
    button.addEventListener('click', () => {
        boxes[index].classList.toggle('active');
    })
})