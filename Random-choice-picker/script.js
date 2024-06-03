const text = document.getElementById('textarea');
const tag = document.getElementById('tags');
let interValid;

textarea.focus();

function processInput(){
     // Clear existing tags
     tag.innerHTML = '';
     
    const arr = text.value.split(',').map(element => element.trim()).filter(Boolean);

    arr.forEach((element) => {
        const choices = document.createElement('span');
        choices.classList.add('tag');
        choices.innerHTML = element;
        tag.appendChild(choices);
    })
}

function randomSelect() {
    const tags = document.querySelectorAll('.tag');
    const randomIndex = Math.floor(Math.random() * tags.length);

    tags.forEach(tag => tag.classList.remove('highlight')); // Remove active class from all tags
    tags[randomIndex].classList.add('highlight'); // Add active class to the randomly selected tag
};




text.addEventListener('input', processInput);

text.addEventListener('keydown',(event) => {
    if (event.key === 'Enter'){
       event.preventDefault();

       text.value = ''; // Clear the textarea
       
       clearInterval(interValid); // Clear any existing interval
       interValid = setInterval(randomSelect, 100); // Start interval for random selection

       setTimeout(() => clearInterval(interValid), 2000); // Stop interval after 2 seconds (adjust as needed)
    }
});