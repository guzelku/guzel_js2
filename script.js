'use strict';
function game (a)
{

let b = 45;

if (a==b)
{
alert('Поздравляю ты выиграл');
}
else{ if (a< b){

alert('Загаданное число больше ');
a= prompt('Попробуй еще');
while (isNaN(a) || a === '' ){
alert('Введи число!!!');
a = prompt ('Попробуй еще');}
if (a != null){
game(a);}
}
if (a>b){

alert('Загаданное число меньше');
a= prompt('Попробуй еще');
while (isNaN(a) || a === '' ){
alert('Введи число!!!');
a = prompt ('Попробуй еще');}
if (a != null){
game(a);}
}
}
}
let a = prompt('Угадай число от 1 до 100');
while (isNaN(a) || a === '' ){
alert('Введи число!!!');
a = prompt ('Угадай число от 1 до 100');

}

if (a != null){
game(a);}