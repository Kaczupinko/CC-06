//Tworzenie nowego elementu

const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div';
document.body.appendChild(newDiv);

//Modyfikowanie istniejącego elementu

const existingDiv = document.querySelector('div');
existingDiv.textContent = 'This is an existing div';

//Obsługa zdarzeń

const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Button clicked')
});

//Zdarzenia myszy

const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Button clicked with mouse')
});

//Zdarzenia klawiatury

const input = document.querySelector('input');
input.addEventListener('keydown', () => {
    console.log('Keydown')
});

//Iteracja po elementach

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    paragraphs.style.color = 'red';
});

//Zmiana stylu

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    p.style.color = 'red';
});

//Tworzenie i usuwanie elementów

const button = document.querySelector('button');
button.addEventListener('clicl', () => {
    const li = document.createElement('li');
    li.textContent = 'Something new to do';
});

//Dodawanie elementów do listy

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    const ul = document.querySelector('ul');
    ul.appendChild(li);
});

//Usuwanie elementów z listy

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const ul = document.querySelecotr('ul');
    const li = document.querySelector('li');
    ul.removeChild(li);
});

//Dodawanie i usuwanie klas

const myElement = document.querySelector('#my-element');
myElement.addEventListener('click', () => {
    myElement.classList.add('active');
});

//Modyfikacja stylow

const myElement = document.querySelector('#my-element');
myElement.style.backgroundColor = 'red';

//Przemieszczanie elementów

const myElement = document.querySelector('#my-element');
myElement.setAttribute('data-id', '123');

//Usuwanie elementów

const myElement = document.querySelector('#my-element');
myElement.remove();

//Zmiana tekstu

const myElement = document.querySelector('#my-element');
myElement.textContent = 'Hello World';

//Pobieranie wartosci formularzy

const myInput = document.querySelector('#my-input');
const inputValue = myInput.value;

//Pobieranie wartosci z formularza

const myInput = document.querySelector('#my-input');
const inputValue = myInput.value;

//Przypisywanie zdarzen

cont myElement = document.querySelector('#my-element');
myElement.addEventListener('click', myFunction);

//Pobieranie elementow z drzewa dokumentu

const allParagraphs = document.querySelectorAll('p');