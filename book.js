'use strict';

console.log('hello');

const body = document.querySelector('body');
const books = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const titleBook3 = books[4].querySelector('h2 > a');
const listBook2 = books[0].querySelectorAll('ul > li');
const listBook5 = books[5].querySelectorAll('li');
const listBook6 = books[2].querySelectorAll('li');
let li = document.createElement('li');



books[0].before(books[1]);
books[4].after(books[3]);
books[5].after(books[2]);


body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
titleBook3.textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove()

listBook2[10].before(listBook2[2]);
listBook2[3].after(listBook2[6]);
listBook2[6].after(listBook2[8]);


listBook5[2].before(listBook5[9]);
listBook5[2].before(listBook5[3]);
listBook5[3].after(listBook5[4]);
listBook5[8].after(listBook5[5]);
listBook5[5].after(listBook5[8]);



li.textContent ='Глава 8: За пределами ES6';
listBook6[8].append(li);


// listBook6[8].

console.log(listBook6[8])
console.log(li);

console.log(books[2]);
console.log(adv);

// Восстановить порядок книг.+
// Заменить картинку заднего фона на другую из папки image+
// Исправить заголовок в книге 3
// ( Получится - "Книга 3. this и Прототипы Объектов")+
// Удалить рекламу со страницы +
// Восстановить порядок глав во второй и пятой книге
// (внимательно инспектируйте индексы элементов, 
// поможет dev tools)+
// в шестой книге добавить главу “Глава 8: За пределами ES6”
// и поставить её в правильное место


console.log('hello');