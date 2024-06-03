const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = 0;

    const updateNumber = () => {
        const target = +counter.getAttribute('data-target');
        const currentNumber = +counter.innerText;
        
        const increment = target / 200;

        if(currentNumber < target) {
            counter.innerText = Math.ceil( currentNumber + increment);
           setTimeout(updateNumber, 1);
        } else {
            counter.innerText = target;
        }
    }
    updateNumber();
})