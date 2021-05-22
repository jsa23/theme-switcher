let count = 0;
let countDisplay = document.querySelector('.count');


function incrementCount() {
    countDisplay.innerText = ++count;
    console.log(count);
}

function decrementCount() {
    count--;
    countDisplay.innerText = count;
    console.log(count);
}

function resetCount() {
    count = 0;
    countDisplay.innerHTML = `<mark> ${count} </mark>`;
    console.log(count);
}

function switchTheme(theme) {
    document.querySelector('body').className = theme;
    document.querySelector('main').className = theme;

    const buttons = document.querySelectorAll('button');
    console.log(buttons)

    buttons.forEach(button => button.className = theme)
    // for(let i =0; i < buttons.length; i++){
    //     buttons[i].className = theme
    }

let incrementButton = document.querySelector('#increment-button');
incrementButton.addEventListener('click', incrementCount);

let decrementButton = document.querySelector('#decrement-button');
decrementButton.addEventListener('click', decrementCount);

let resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', resetCount);

document.getElementById('instructions').innerText = 'Choose a theme'