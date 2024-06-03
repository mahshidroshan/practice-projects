const button = document.querySelector('.ripple');

button.addEventListener('click', function(e) {
    // Get the position of the button relative to the viewport
    const rect = button.getBoundingClientRect();
    // Calculate the click position inside the button
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create a new span element for the ripple effect
    const circle = document.createElement('span');
    // Add the 'circle' class to the new span element
    circle.classList.add('circle');
    // Position the circle at the click position
    circle.style.top = y + "px";
    circle.style.left = x + "px";

    // Append the circle to the button
    this.appendChild(circle);

    // Remove the circle after the animation ends
    circle.addEventListener('animationend', () => {
        circle.remove();
    });
});