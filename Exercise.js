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

