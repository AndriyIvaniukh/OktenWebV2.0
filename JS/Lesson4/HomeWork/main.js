// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square(a,b){
//     return a*b;
// }
//
// console.log(square(4,4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function squareCircle(radius){
//     return Math.PI*Math.pow(radius,2);
// }
//
// console.log(squareCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function squareCilinder(radius, h){
//     return Math.PI * Math.pow(radius,2) * h;
// }
//
// console.log(squareCilinder(5,12));

// - створити функцію яка приймає масив та виводить кожен його елемент

// function logArrayElements(arr){
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
//
// let arr = [2,5,6,4,3,4,8,6,41,5];
// logArrayElements(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function createParagrefWithText(text){
//     document.write(`<p>${text}</p>`);
// }
//
// createParagrefWithText("Test sentense");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function createUlWithThreeLiAndTheSameText(text){
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
//
// createUlWithThreeLiAndTheSameText("test li");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createUlWithAnyLiAndTheSameText(text, count) {
//     document.write(`<ul>`);
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// createUlWithAnyLiAndTheSameText("test li", 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function createOlWithArrayOfPrimitives(array) {
//     document.write(`<ol>`);
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ol>`);
// }
//
// createOlWithArrayOfPrimitives(['fasf', 2133, true, 5, 'oleh']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function createDivWithObject(arrObjects){
//     document.write('<div>');
//     for (let obj of arrObjects) {
//         document.write(`<div><p>Id - ${obj.id}, Name - ${obj.name}, Age - ${obj.age}</p></div>`);
//     }
//     document.write('</div>');
// }
//
// let arr = [
//     {
//         id: 1,
//         name: 'Andriy',
//         age: 25,
//     },
//     {
//         id: 2,
//         name: 'Oleh',
//         age: 22,
//     },
//     {
//         id: 3,
//         name: 'Taras',
//         age: 26,
//     },
//     {
//         id: 4,
//         name: 'Bogdan',
//         age: 18,
//     },
//     {
//         id: 5,
//         name: 'Myroslav',
//         age: 32,
//     },
// ]
//
// createDivWithObject(arr);