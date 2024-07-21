'use strict'

let age = 16;
console.log(age);

const name = 'Sobaka';
console.log(name);

const IsStudent = true;
const NotAStudent = false;
console.log(IsStudent);
console.log(NotAStudent);

const myString = 'Клавиатура не тот кто кальмар, а тигр ловит двадцать семь акула, цельсий апельсиновая корка стол квадрат стакан труба.';
console.log(myString);

let myNumber = 42;
console.log(myNumber + 10);

let myNull = null;
console.log(myNull);

const userName = prompt('Як тебе звати?');
console.log(userName);
alert(`Hello ${userName}`);

let validation = confirm('підтвердіть дію')
if (validation){
    alert('Дякую за підтвердження!')
} else {
    alert('Дію відмінено')
}
alert('Ця дія небезпечна, підтвердіть її','');
let danger = confirm('Ви підтверджуєте цю дію?')
if (danger){
    alert('Дякую за підтвердження!')
} else {
    alert('Дію відмінено!')
}

