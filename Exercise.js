//Tworzenie nowego elementu

const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div';
document.body.appendChild(newDiv);
//Ten kod tworzy nowy element div i dodaje go do drzewa DOM jako dziecko elementu body.
//Tekst `this is a new div` jest ustawiany jako tekst wewnetrzny nowego elementu div.

//Modyfikowanie istniejącego elementu

const existingDiv = document.querySelector('div');
existingDiv.textContent = 'This is an existing div';
//Ten kod pobiera pierwszy element `div` z drzewa DOM przy uzyciu metody `querySelector()`,
//a nastepnie zmienia jego tekst wewnetrzny na wartosc `This is an existing div`.

//Obsługa zdarzeń

const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Button clicked')
});
// ten kod pobiera pierwszy element `button` z drzewa DOM przy uzyciu metody `querySelector()`,
// a nastepnie dodaje do niego nasluchiwacz zdarzen, ktory wywola funkcje anonimowa
// w momencie klikniecia przycisku.

//Zdarzenia myszy

const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Button clicked with mouse')
});
//Ten kod pobiera pierwszy element `button` z drzewa DOM przy uzyciu metody `querySelector()`,
//a nastepnie dodaje do niego nasluchiwacz zdarzen, ktory wywola funkcje anonimowa
// w momencie klikniecia przycisku.

//Zdarzenia klawiatury

const input = document.querySelector('input');
input.addEventListener('keydown', () => {
    console.log('Keydown')
});
//Ten kod pobiera pierwszy element `input` z drzewa DOM przy uzyciu metody `querySelector()`,
//a nastepnie dodaje do niego nasluchiwacz zdarzen, ktory wywola funkcje anonimowa
// w momencie wcisniecia klawisza.

//Iteracja po elementach

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    paragraphs.style.color = 'red';
});
//Ten kod pobiera wszystkie elementy `p` z drzewa DOM przy uzyciu metody `querySelectorAll()`,
//a nastepnie iteruje po kazdym z nich przy uzyciu metody `forEach()`.
//Wewnatrz funkcji anonimowej, ktora jest wywolywana dla kazdego elementu `p`,
//ustawia kolor tekstu na czerwony.

//Zmiana stylu

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    p.style.color = 'red';
});
//Ten kod pobiera wszystkie elementy `p` z drzewa DOM przy uzyciu metody `querySelectorAll()`,
//a nastepnie iteruje po kazdym z nich przy uzyciu metody `forEach()`.
//Wewnatrz funkcji anonimowej, ktora jest wywolywana dla kazdego elementu `p`,
//ustawia kolor stylu na czerwony.

//Tworzenie i usuwanie elementów

const button = document.querySelector('button');
button.addEventListener('clicl', () => {
    const li = document.createElement('li');
    li.textContent = 'Something new to do';
});
//Ten kod pobiera pierwszy element `button` z drzewa DOM przy uzyciu metody `querySelector()`,
//a nastepnie dodaje do niego nasluchiwacz zdarzen, ktory wywola funkcje anonimowa
// w momencie klikniecia przycisku.
//Wewnatrz funkcji anonimowej, ktora jest wywolywana dla kazdego elementu `p`,
//tworzy nowy element `li` i ustawia jego tekst wewnetrzny na `Something new to do`.

//Dodawanie elementów do listy

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    const ul = document.querySelector('ul');
    ul.appendChild(li);
});
//Ten kod pobiera pierwszy element `button` z drzewa DOM przy uzyciu metody `querySelector()`,
//a nastepnie dodaje do niego nasluchiwacz zdarzen, ktory wywola funkcje anonimowa
// w momencie klikniecia przycisku.
//Wewnatrz funkcji anonimowej, ktora jest wywolywana dla kazdego elementu `p`,
//tworzy nowy element `li` i ustawia jego tekst wewnetrzny na `Something new to do`.
//Nastepnie pobiera pierwszy element `ul` z drzewa DOM przy uzyciu metody `querySelector()`,
//a nastepnie dodaje do niego nowy element `li` przy uzyciu metody `appendChild()`.

//Usuwanie elementów z listy

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const ul = document.querySelecotr('ul');
    const li = document.querySelector('li');
    ul.removeChild(li);
});
//Ten kod pobiera pierwszy element `button` z drzewa DOM przy uzyciu metody `querySelector()`,
//a nastepnie dodaje do niego nasluchiwacz zdarzen, ktory wywola funkcje anonimowa
// w momencie klikniecia przycisku.
//Wewnatrz funkcji anonimowej, ktora jest wywolywana dla kazdego elementu `p`,
//pobiera pierwszy element `ul` z drzewa DOM przy uzyciu metody `querySelector()`,
//a nastepnie pobiera pierwszy element `li` z drzewa DOM przy uzyciu metody `querySelector()`.
//Nastepnie usuwa element `li` z elementu `ul` przy uzyciu metody `removeChild()`.

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