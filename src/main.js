const button = document.querySelector('.page-header__button--js');

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation--js');
    navigation.classList.toggle('navigation--open')
})