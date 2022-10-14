const display = document.querySelector('.display');
const inputs = document.querySelector('.inputs');
const cancel = document.querySelector('.cancel');
const brackets = document.querySelector('.brackets');
const percentage = document.querySelector('.percentage');
const divide = document.querySelector('.divide');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const multiple = document.querySelector('.multiple');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const minus = document.querySelector('.minus');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const plus = document.querySelector('.plus');
const plusMinus = document.querySelector('.plus-minus');
const zero = document.querySelector('.zero');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');



function clearDisplay() {
    display.innerText = ''
}

function updateDisplay(value) {
    display.innerText += value
}
inputs.addEventListener('click', function(e) {
    const clicked = e.target.innerText;
    switch (clicked) {
        case cancel.innerText:
            clearDisplay();
            break;
        case brackets.innerText:
            let stringRE = /[0-9]/;
            console.log(display.innerText.lastIndexOf('('));
            // updateDisplay('(');
            if (display.innerText.lastIndexOf('(') && stringRE.test(display.innerText.lastIndexOf('(') + 1)) updateDisplay(')');
            else updateDisplay('(')
            break;
        case percentage.innerText:
            updateDisplay('%');
            break;
        case divide.innerText:
            updateDisplay('/');
            break;
        case seven.innerText:
            updateDisplay('7');
            break;
        case eight.innerText:
            updateDisplay('8');
            break;
        case nine.innerText:
            updateDisplay('9');
            break;
        case multiple.innerText:
            updateDisplay('*');
            break;
        case four.innerText:
            updateDisplay('4');
            break;
        case five.innerText:
            updateDisplay('5');
            break;
        case six.innerText:
            updateDisplay('6');
            break;
        case minus.innerText:
            updateDisplay('-');
            break;
        case one.innerText:
            updateDisplay('1')
            break;
        case two.innerText:
            updateDisplay('2')
            break;
        case three.innerText:
            updateDisplay('3')
            break;
        case plus.innerText:
            updateDisplay('+')
            break;
        case plusMinus.innerText:

            break;
        case zero.innerText:
            updateDisplay('0')
            break;
        case dot.innerText:
            updateDisplay('.')
            break;
        case equal.innerText:
            const answer = eval(display.innerText);
            clearDisplay();
            display.focus();
            updateDisplay(answer)
            break;
        default:

    }

})