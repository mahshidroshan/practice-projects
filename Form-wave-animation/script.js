const emailLabel = document.querySelector('#emailLabel');
const pswLabel = document.querySelector('#pswLabel');
const emailInput = document.querySelector('input[type="email"]');
const pswInput = document.querySelector('input[type="password"]');
const emailLabelArray = Array.from(emailLabel.textContent);
const pswLabelArray = Array.from(pswLabel.textContent);

//email
emailLabel.innerHTML = emailLabelArray.map((letter) => `<span> ${letter} </span>`).join('');
const emailLabelSpans = document.querySelectorAll('#emailLabel span');

//password
pswLabel.innerHTML = pswLabelArray.map((letter) => `<span> ${letter} </span>`).join('');
const pswLabelSpans = document.querySelectorAll('#pswLabel span');


const applyLabelAnimation = (input, labelSpans) => {
    input.addEventListener('click', () => {
        labelSpans.forEach((span, idx) => {
            setTimeout(() => {
                span.style.transform = 'translateY(-20px)';
                span.style.color = 'lightblue';
                input.style.borderBottomColor= 'lightblue';
            }, idx * 60)
            input.focus();
        });
    });
}
   

const unclick = (input, labelSpans) => {document.addEventListener('click', (event) => {
    // Check if the click did not occur inside the email input
    if(!input.contains(event.target)){
        labelSpans.forEach((span, idx) => {
            setTimeout(() => {
                span.style.transform = 'translateY(0px)';
                span.style.color = 'white';
                input.style.borderBottomColor= 'white';
            }, idx * 60)
        });
    }
})
};

applyLabelAnimation(emailInput, emailLabelSpans);
applyLabelAnimation(pswInput, pswLabelSpans);
unclick(emailInput, emailLabelSpans);
unclick(pswInput, pswLabelSpans);