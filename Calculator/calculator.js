



//DISPLAY IDS
const display = document.getElementById('display');
const displayCurrent = document.getElementById('current');
const displayPrev = document.getElementById('prev');
const waitingOperator = document.getElementById('waitingOperator');

//NUMBER IDS
const numbers = document.getElementsByClassName('numbers');
const numberText = document.getElementsByClassName('number-text');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven= document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zereo = document.getElementById('ten');

  //OPERATOR IDS
const operators = document.getElementById('operators');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');



//CONTENT
let currentString = '0';
let prevString = '0';

//NUMBER HANDLING

function numberClick(){
  for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click',() => {
    currentString += numberText[i].textContent;
    displayCurrent.textContent = Number(currentString);
  })
}
}
numberClick();


//WAITING FUNCTION
let plusSelected = false;
let minusSelected = false;
let divideSelected = false;
let multiplySelected = false;

//OPERATOR HANDLING

function currentToPrev(){
  if(plusSelected){
  prevString = Number(prevString) + Number(currentString);
  }else if(minusSelected){
    prevString = Number(prevString) - Number(currentString);
  }else if(divideSelected){
    prevString = Number(prevString) / Number(currentString);
  }else if(multiplySelected){
    prevString = Number(prevString) * Number(currentString);
  }else if(currentString !== 0){
     prevString = Number(currentString)
    };
  displayPrev.textContent = Number(prevString);
  currentString = 0;
  displayCurrent.textContent = 0;
  plusSelected = false;
  minusSelected = false;
  divideSelected = false;
  multiplySelected = false;
  }

plus.addEventListener('click', plusFunction)
function plusFunction(){
  currentToPrev();
  waitingOperator.innerText = '+';
  plusSelected = true;
}


minus.addEventListener('click', minusFunction)
function minusFunction(){
 currentToPrev();
 waitingOperator.innerText = '-'
 minusSelected = true;
}

divide.addEventListener('click', divideFunction)
function divideFunction(){
  waitingOperator.innerText = '/'
  currentToPrev();
 divideSelected = true
}


multiply.addEventListener('click', multiplyFunction)
function multiplyFunction(){
  waitingOperator.innerText = 'x'
  currentToPrev();
 multiplySelected = true
}

equal.addEventListener('click', equalFunction)
function equalFunction(){
  waitingOperator.innerText = ''
  currentToPrev();
}


//CLEAR

clear.addEventListener('click', clearFunction);

function clearFunction(){
  plusSelected = false;
  minusSelected = false;
  divideSelected = false;
  multiplySelected = false;
  waitingOperator.innerText = '';
  currentString = '0'
  prevString = 'o'
  displayCurrent.textContent = '0';
  displayPrev.textContent = '0';
}


function keyDown(e){
  console.log(e.code);
  switch(e.code){
    case ('Digit1') :
      currentString += '1';
      displayCurrent.textContent = Number(currentString);
    break;
    case ('Digit2') :
      currentString += '2';
    displayCurrent.textContent = Number(currentString);
    break;
    case ('Digit3') :
      currentString += '3';
      displayCurrent.textContent = Number(currentString);
    break;
    case ('Digit4') :
      currentString += '4';
      displayCurrent.textContent = Number(currentString);
    break;
    case ('Digit5') :
      currentString += '5';
      displayCurrent.textContent = Number(currentString);
    break;
    case ('Digit6') :
      currentString += '6';
      displayCurrent.textContent = Number(currentString);
    break;
    case ('Digit7') :
      currentString += '7';
      displayCurrent.textContent = Number(currentString);
    break;
    case ('Digit8') :
      currentString += '8';
      displayCurrent.textContent = Number(currentString);
    break;
    case ('Digit9') :
      currentString += '9';
      displayCurrent.textContent = Number(currentString);
    break;
    case ('Digit0') :
      currentString += '0';
      displayCurrent.textContent = Number(currentString);
    break;
    //OPERATOR KEY PRESS
    case ('Equal') :
      if(e.shiftKey === true){
        plusFunction();
      } else {
        equalFunction();
      }
    break;
    case('KeyX') :
    multiplyFunction();
    break;
    case('Slash') :
    divideFunction();
    break;
    case('KeyC') :
    clearFunction();
    break;
    }

}

document.addEventListener('keypress', keyDown)