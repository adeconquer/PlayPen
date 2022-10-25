const display = document.querySelector('.display');
const inputs = document.querySelector('.inputs');
const cancel = document.querySelector('.cancel');
const brackets = document.querySelector('.brackets');
const percentage = document.querySelector('.percentage');
const divide = document.querySelector('.divide');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const multiply = document.querySelector('.multiply');
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
const strNumArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operatorArr = ['/', '*', '-', '+'];


function clearDisplay() {
    display.innerText = ''
}

function updateDisplay(value) {
    display.innerText += value
}

function setDisplay(value) {
    display.innerText = value
}

function replaceOperatorDisplay(val) {
    display.innerText = display.innerText.replace(display.innerText[display.innerText.length - 1], val);
}

function updateOperator(operator) {
    if (strNumArr.includes(display.innerText[display.innerText.length - 1]) || display.innerText[display.innerText.length - 1] === ')') updateDisplay(operator);
    else {
        replaceOperatorDisplay(operator);
    }
}
inputs.addEventListener('click', function(e) {
    const clicked = e.target.innerText;;

    switch (clicked) {
        case cancel.innerText:
            clearDisplay();
            break;
        case brackets.innerText:
            if (display.innerText.lastIndexOf('(') === -1 && !strNumArr.includes(display.innerText[display.innerText.length - 1])) updateDisplay('(');
            else if (strNumArr.includes(display.innerText[display.innerText.length - 1]) && !operatorArr.includes(display.innerText[display.innerText.length - 1]) && display.innerText.lastIndexOf('(') === -1) updateDisplay('*(');
            else if (strNumArr.includes(display.innerText[display.innerText.length - 1])) updateDisplay(')');
            else if (display.innerText[display.innerText.length - 1] === ')') updateDisplay(')');
            else updateDisplay('(');
            break;
        case percentage.innerText:
            let temp = display.innerText[display.innerText.length - 1]
            const percent = display.innerText[display.innerText.length - 1] / 100;
            console.log(temp + '+' + percent);
            setDisplay(percent * temp);
            break;
        case divide.innerText:
            updateOperator('/');
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
        case multiply.innerText:
            updateOperator('*');
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
            updateOperator('-');
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
            updateOperator('+')
            break;
        case plusMinus.innerText:
            if (display.innerText == '') updateDisplay('(-');
            else if (strNumArr.includes(display.innerText)) setDisplay(`(-${display.innerText}`);
            else if (operatorArr.includes(display.innerText[display.innerText.length - 1])) updateDisplay('(-')
            break;
        case zero.innerText:
            updateDisplay('0')
            break;
        case dot.innerText:
            if (display.innerText.includes('.')) return;
            else updateDisplay('.')
            break;
        case equal.innerText:
            try {
                const answer = eval(display.innerText);
                clearDisplay();
                display.focus();
                setDisplay(answer)
            } catch (err) {
                updateDisplay(err)
            }
            break;
        default:
            return
    }

})

// Make the DIV element draggable:
dragElement(document.querySelector('.calculator'));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    // move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}