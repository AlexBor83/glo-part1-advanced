const num = 266219;
const arrNums = num.toString().split('');

console.log(arrNums);
console.log(typeof arrNums);

let number = 1;

for (let i = 0; i < arrNums.length; i++) {   

   number *= arrNums[i];    
}

console.log(number);
const cubeNumber = number ** 3;

console.log(cubeNumber.toString().slice(0,2));

let lang = 'en';

if (lang == 'ru') {
   console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье ');
} else if (lang == 'en') {
   console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

switch (lang) {
   case 'ru':
      console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье ');
      break;

   case 'en':
      console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
      break;
}

const weekdays = [['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'], ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']];
const langs = ['ru', 'en'];

lang = 'ru';

let indexLangs = langs.indexOf(lang);

console.log(...weekdays[indexLangs]);

let namePerson = '';
let massage = (namePerson == 'Артем') ? console.log('директор') : (namePerson == 'Александр') ? console.log('преподаватель') : console.log('');
