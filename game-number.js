'use strict';

console.log('Hello');

function isNumber(num) {
  return isNaN(parseFloat(num)) && isFinite(num);
}

function guessNumber(x) {
  function askNumber() {
    let number = prompt('Угадай число от 1 до 100');

    console.log(number);

    if (number === null) {
      alert('Игра окончена');
    } else if (isNaN(+number) || number.trim()==='') {
        alert('введи число');
         askNumber();
    } else if (+number > x) {
      alert('Загаданное число меньше');
      askNumber();
    } else if (+number < x) {
      alert('Загаданное число больше');
      askNumber();
    }  else if (+number === x) {
      alert('Поздравляю, Вы угадали!!!');
    }


    console.log(number);
    console.log(x);
    console.log(+number === x);
  }

  askNumber();
}

guessNumber(25);

// function countdown(i) {
//     console.log(i)
//     if (i <= 1) {  // base case
//       return;
//     } else {       // recursive case
//       countdown(i - 1)
//     }
//   }
//   countdown(5);


