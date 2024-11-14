let currentInput = '';
let previousInput = '';
let operator = null;
let scientificOperation = null;

const display = document.getElementById('display');

// Function to append numbers to the display
function appendNumber(number) {
  if (currentInput === '0') {
    currentInput = number.toString();
  } else {
    currentInput += number.toString();
  }
  display.textContent = currentInput;
}

// Function to set the operator (+, -, *, /)
function setOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

// Function to set the scientific operation (sin, cos, tan, log, sqrt, pow)
function setScientificOperation(op) {
  scientificOperation = op;
  if (currentInput) {
    calculateScientific();
  }
}

// Function to calculate the result
function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        result = 'Error';
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  display.textContent = currentInput;
}

// Function to calculate scientific operations
function calculateScientific() {
  const current = parseFloat(currentInput);
  let result;

  switch (scientificOperation) {
    case 'sin':
      result = Math.sin(current);
      break;
    case 'cos':
      result = Math.cos(current);
      break;
    case 'tan':
      result = Math.tan(current);
      break;
    case 'log':
      result = Math.log(current);
      break;
    case 'sqrt':
      result = Math.sqrt(current);
      break;
    case 'pow':
      result = Math.pow(current, 2);
      break;
    default:
      return;
  }

  currentInput = result.toString();
  scientificOperation = null;
  display.textContent = currentInput;
}

// Function to clear the display
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  scientificOperation = null;
  display.textContent = '0';
}

// Function to create floating bubbles
function createBubbles() {
  const bubbleCount = 30;
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 50 + 20;
    const positionX = Math.random() * window.innerWidth;
    const positionDelay = Math.random() * 5 + 's';
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = positionX + 'px';
    bubble.style.animationDuration = positionDelay;
    document.querySelector('.bubbles').appendChild(bubble);
  }
}

// Initialize bubbles on page load
createBubbles();
