'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);

};

function myFunc(a) {
    a = prompt('Введите значение:');
    if (isNumber(a)) {
        alert ('Не строка! Пожалуйста, введите строку.');
        myFunc();
    }else if (a.length > 30) {
        console.log(a.trim().slice(0,30), '...');
    }else if (a.length <= 30) {
        console.log(a.trim());
    }
    // console.log(a); - Можно проверить, что все числа ввелись и ничего не удалилось slice-ом
}

myFunc();