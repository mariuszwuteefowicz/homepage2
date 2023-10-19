const firstName = 'Mariusz';
const age = 35;

console.log(firstName);
console.log(age);

console.log(`Nazywam sie ${firstName} i mam ${age} lat.`);

////////////////////////

const header = document.querySelector('.page-header__heading--js')

console.log (header)    //wyswietla h1

console.log (header.innerHTML)  //wyswietla tylko tekst

//header.innerHTML = 'Hej!';  //modyfikacja tresci

console.log (header.innerHTML)

//header.innerHTML = `Nazywam sie ${firstName} i mam ${age} lat.`;    //modyfikacja tresci

console.log (header.innerHTML)

console.log (header.style)  //mozliwe modyfikacje styli

//header.style.color = 'red';     //modyfikacja koloru

////////////////////////homework

const contentJs = document.querySelector('.my-article__paragraph--js');
contentJs.innerHTML = 'jestem podmieniony JS 🤯';