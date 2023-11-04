function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Dynamic key events
    const clearButton = document.getElementById('clr');
    function changeACtoC() {
        clearButton.textContent = 'C';
    }
    function clearDisplay() {
        document.getElementById('display').value ='';
        clearButton.textContent = 'AC';
    }
   // Add event listeners to all calculator buttons
    const calculatorButtons = document.querySelectorAll('.b, #b, #c');
    calculatorButtons.forEach(function (button) {
        button.addEventListener('click', changeACtoC);
    });

// Highlight keyboard key events
    function handleKeyPress(key, value, action) {
        const button = document.querySelector(value);
        if (button) {
            button.style.backgroundColor = 'red';
            setTimeout(() => {
                button.style.backgroundColor = ''; 
            }, 100);
            action();
        }
    }
    document.addEventListener('keydown', function (event) {
        const key = event.key;
        switch (key) {
            case 'Enter':
                handleKeyPress(key, 'input[value="="]', calculate);
                break;
            case 'Backspace':
                handleKeyPress(key, 'div[id="ph"]', deleteLastChar);
                break;
            case 'Escape':
                handleKeyPress(key, 'td[id="clr"]', clearDisplay);
                break;
            default:
                handleKeyPress(key, `input[value="${key}"]`, () => {
                    addToDisplay(key);
                    changeACtoC();
                });
        }
    });

// METHOD OF KEYBOARD KEY EVENTS   
/*var display = document.getElementById('display');
   document.addEventListener('keydown', function (event) 
   {
        switch (event.key) {
            case 'Enter':
                document.querySelector('input[value="="]').click();
                break;
            case 'Backspace':
                deleteLastChar();
                break;
            case 'Escape':
                clearDisplay();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
            case '.':    
                // When operator keys are pressed
                document.querySelector(`input[value="${event.key}"]`).click();
                break;
            default:
                // For numeric keys
                if (!isNaN(event.key)) {
                    document.querySelector(`input[value="${event.key}"]`).click();
                }
        }
    });*/


        