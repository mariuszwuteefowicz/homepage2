import JSConfetti from 'js-confetti'
const jsConfetti  = new JSConfetti();

const buttonConfetti = document.querySelector('.page-header__buttonConfetti--js');
buttonConfetti.addEventListener('click', (e) => {

    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
     });

});