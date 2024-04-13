const button = document.querySelector('.page-header__button--js');

button.addEventListener('click', (e) => {
    const header = document.querySelector('.page-header__heading--js');
    header.innerHTML = 'Proszę nie hakować mojej strony 🤯😄👌';
});
