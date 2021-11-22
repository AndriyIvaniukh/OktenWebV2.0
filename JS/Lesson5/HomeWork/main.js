// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let square = (a, b) => a * b;
console.log(square(4, 5));
// - створити функцію яка обчислює та повертає площу кола
let squareCircle = (radius) => Math.PI * Math.pow(radius, 2);
console.log(squareCircle(5));
// - створити функцію яка обчислює та повертає площу циліндру
let squareCilinder = (radius, h) => Math.PI * Math.pow(radius, 2) * h;
console.log(squareCilinder(5, 10));
// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [23, 453, 'asdf', 23, true];
let logAllArraysElements = (arr) => arr.filter(n => console.log(n));
logAllArraysElements(array);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let paragrafWithText = (text) => {
    document.write(`<p>${text}</p>`)
};
paragrafWithText(' slkfnan lfan s;mnd;alm ;adm');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUlWithThreeLi = (text) => {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}
createUlWithThreeLi('afsfdsfwefew');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUlWithAnyCountOfLi = (text, count) => {
    document.write('<ul>');
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

createUlWithAnyCountOfLi('sedgwefw', 10);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let createOLWithAnyCountOfLi = (array) => {
    document.write('<ol>');
    for (let arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write('</ol>');
}

createOLWithAnyCountOfLi(array);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arraysObj = [
    {
        id: 1,
        name: 'Andriy',
        age: 25,
    },
    {
        id: 2,
        name: 'Oleh',
        age: 22,
    },
    {
        id: 3,
        name: 'Taras',
        age: 26,
    },
    {
        id: 4,
        name: 'Bogdan',
        age: 18,
    },
    {
        id: 5,
        name: 'Myroslav',
        age: 32,
    },
];
let objToDocument = (arrayObj) => {
    document.write('<div>');
    for (let obj of arrayObj) {
        document.write(`<div><p>Id - ${obj.id}, Name - ${obj.name}, Age - ${obj.age}</p></div>`);
    }
    document.write('</div>');
}

objToDocument(arraysObj);




