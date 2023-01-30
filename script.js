const text = 'Hi, I am Dimitri Brontsema, a 18 year old full stack web developer student located in Groningen, the Netherlands. ';
const typingSpeed = 50;
const typingText = document.querySelector('#typing-text');

let index = 0;

function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    }
}

type();