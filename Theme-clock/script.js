const time = document.querySelector('.time');
const date_month = document.querySelector('.date');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const toggle = document.querySelector('.toggle');
const html = document.querySelector('html');

//toggle dark-light
toggle.addEventListener('click', () => {
    if(toggle.textContent === 'Dark mode') {
        html.classList.add('dark');
        toggle.textContent = "Light mode";
    } else if(toggle.textContent === 'Light mode'){
        html.classList.remove('dark');
        toggle.textContent = 'Dark mode';
    }
})

//date and month and time
function showTime(){
    const date = new Date();
    const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
      ];
    const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }); // Format time with AM/PM
    const formattedDate = date.toLocaleDateString('en-US', {month: 'short'}); 
    
    time.textContent = `${formattedTime}`;
    
    // Set the formatted date text content
    date_month.innerHTML = `
    ${daysOfWeek[date.getDay()]}, ${formattedDate}
    <span class="circle"> ${date.getDate()}</span>
    `;
}


//needles
function setTime(){
    const currentDate= new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const hourAngle = ((hours * 30) + (minutes / 2)) % 360;
    const minuteAngle = (minutes * 6) % 360; 
    const secondAngle = (seconds * 6) % 360;

    hour.style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
    minute.style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`;
    second.style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`;
}

showTime();
setTime();
setInterval(setTime, 1000);
