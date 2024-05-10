const button = document.querySelector('.page-header__button--js');
button.addEventListener('click', (e) => {
    const header = document.querySelector('.page-header__heading--js');
    header.innerHTML = 'Proszę nie hakować mojej strony 🤯😄👌';
});


const buttonBackground = document.querySelector('.page-header__buttonBackground--js');
buttonBackground.addEventListener('click', (e) => {
    document.documentElement.style.setProperty('--backgroundColor', 'rgb(131, 225, 255');
    document.documentElement.style.setProperty('--textColor', 'black');
});