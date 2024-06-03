const circles = document.querySelectorAll(".circle");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("progress");

next.addEventListener("click", () => {
    const activeCircles = Array.from(circles).filter(circle => circle.classList.contains('active'));

    activeCircles.forEach(activeCircle => {
        const nextCircle =  activeCircle.nextElementSibling;
        
        if (nextCircle) {
            nextCircle.classList.add('active');
            
            prev.disabled = false;
            if (nextCircle === circles[3]) {
                next.disabled = true;
            }
        }
    });
   updateProgressBar();
})

prev.addEventListener("click", () => {
    const activeCircles = Array.from(circles).filter(circle => circle.classList.contains('active'));

    activeCircles.forEach((activeCircle) => {
        const prevCircle =  activeCircle.previousElementSibling;
        progress.classList.remove('active');
        if(prevCircle) {
            activeCircle.classList.remove('active');
            prevCircle.classList.add('active');
            next.disabled = false;

            prev.disabled = Array.from(circles).indexOf(prevCircle) === 0;
        }
    });
   updateProgressBar();
})

function updateProgressBar() {
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
}

