const num = 266219;
const arrNums = num.toString().split('');
let lang = 'en';
let namePerson = '';

let number = 1;
for (let i = 0; i < arrNums.length; i++) {
  number *= arrNums[i];
}

const cubeNumber = number ** 3;

if (lang === 'ru') {
  console.log(
    'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье '
  );
} else if (lang === 'en') {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

switch (lang) {
  case 'ru':
    console.log(
      'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье '
    );
    break;

  case 'en':
    console.log(
      'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
    );
    break;
}

const weekdays = [
  ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
  ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'],
];
const langs = ['ru', 'en'];

lang = 'ru';

let indexLangs = langs.indexOf(lang);

let massage =
  namePerson == 'Артем'
    ? console.log('директор')
    : namePerson == 'Александр'
    ? console.log('преподаватель')
    : console.log('');

const getStringMassege = function (text) {
  if (typeof text !== 'string' || text.trim().length == 0) {
    alert('Введите строку');
  }

  let newText = text.trim();

  if (newText.length >= 29) {
    newText = newText.slice(0, 29) + '...';
    return console.log(newText);
  }
  return console.log(newText);
};

getStringMassege('Впрочем, если быть точнее, из-за того, что большие');

console.log(`Произведение чисел переменной num - ${number}`);
console.log(cubeNumber.toString().slice(0, 2));
console.log(...weekdays[indexLangs]);

