'use strict';


let lang = 'ru',
    array,
    arrRus = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    arrEng = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'];

if (lang === 'ru'){
    array = arrRus;
}else if(lang === 'en'){
    array = arrEng;
}
console.log(array);
let arr1 = [
    ['en'],
    ['ru']
];


switch(lang){
    case  'ru':
        console.log(arrRus); 
        break;
    case 'en':
        console.log(arrEng);
        break;
}


let arr3 = [];

arr3[['ru']] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
arr3[['en']] = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(arr3[lang]);


let namePerson = 'Артем',
    result = (namePerson === 'Артем') ? 'Директор' : (namePerson === 'Максим') ? 'Преподаватель' : 'Студент';

console.log(result);