const bg = document.querySelector('.bg');
const text = document.querySelector('.loading-text');

let i = 0;

function count() {
    text.textContent = i + "%";

    if (i === 0) {
        text.style.opacity = 1; // Set text opacity to 100% at the beginning
    } else {
        text.style.opacity = 1 - (i / 100); // Set text opacity based on the progress
    }

    const blurValue = 30 - (30 * (i / 100));
    bg.style.filter = `blur(${blurValue}px)`;

    i++;

    if (i <= 100) {
        setTimeout(count, 30);
    }
}

count();


