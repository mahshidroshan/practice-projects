const left = document.querySelector('.left-container');
const right = document.querySelector('.right-container');

left.addEventListener('mouseover', () => {
    left.classList.add('hover');
    right.classList.add('hover');
});

left.addEventListener('mouseout', () => {
    left.classList.remove('hover');
    right.classList.remove('hover');
});

right.addEventListener('mouseover', () => {
    left.classList.add('hover2');
    right.classList.add('hover2');
});

right.addEventListener('mouseout', () => {
    left.classList.remove('hover2');
    right.classList.remove('hover2');
});
