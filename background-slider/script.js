const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('left');
const next = document.getElementById('right');

let currentSlideIndex = 0;

next.addEventListener('click', () => { 
// Remove active class from current slide
    slides[currentSlideIndex].classList.remove('active');

// Move to the next slide
    currentSlideIndex++;

// If the current slide index exceeds the number of slides, wrap around to the first slide
    if(currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }

// Add active class to the new current slide  
    slides[currentSlideIndex].classList.add('active');

    setBgToBody();
});


prev.addEventListener('click', () => { 
// Remove active class from current slide
        slides[currentSlideIndex].classList.remove('active');
    
// Move to the next slide
        currentSlideIndex--;
    
// If the current slide index is less than zero, loop back to the last slide
        if(currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
        }
    
// Add active class to the new current slide  
        slides[currentSlideIndex].classList.add('active');

        setBgToBody();
});

setBgToBody();

function setBgToBody() {
    document.body.style.backgroundImage = slides[currentSlideIndex].style.backgroundImage;
}

