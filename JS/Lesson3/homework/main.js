// --створити масив з:
// //     - з 5 числових значень
// let arrNum = [1, 5, 6, 4, 2];
// console.log(arrNum);
// // - з 5 стічкових значень
// let arrStr = ['Petro', 'Andriy', 'Olia', 'Yaruna', 'Nazar'];
// console.log(arrStr);
// // - з 5 значень стрічкового, числового та булевого типу
// let arrMixed = ['Andriy', 23, true, false, 'lol'];
// console.log(arrMixed);
// // - та вивести його в консоль
// //
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// for (let i=0;i<10;i++){
//     arr[i] = i+1;
// }
// console.log(arr);
// //
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for(let i=0;i<10;i++){
//     document.write('<div>test string</div>')
// }
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for(let i=0;i<10;i++){
//     document.write(`<div>string ${i+1}</div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i<20){
//     document.write(`<h1>Test h1</h1>`);
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i<20){
//     document.write(`<h1>Test h1 with index - ${i} </h1>`);
//     i++;
// }
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for (let number of arr) {
//     console.log(number);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['test1','test2','test3','test4','test5','test6','test7','test8','test9','test10'];
// for (let number of arr) {
//     console.log(number);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = ['test1', 12, true, 5, 'test5', false, 'test7', 21, 'test9', 'test10'];
// for (let number of arr) {
//     console.log(number);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = ['test1', 12, true, 5, 'test5', false, 'test7', 21, 'test9', 'test10'];
// for (let number of arr) {
//     if(typeof number === "boolean"){
//         console.log(number);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = ['test1', 12, true, 5, 'test5', false, 'test7', 21, 'test9', 'test10'];
// for (let number of arr) {
//     if(typeof number === "number"){
//         console.log(number);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arr = ['test1', 12, true, 5, 'test5', false, 'test7', 21, 'test9', 'test10'];
// for (let number of arr) {
//     if(typeof number === "string"){
//         console.log(number);
//     }
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[1] = true;
// arr[2] = 22;
// arr[3] = 'test';
// arr[4] = 21;
// arr[5] = false;
// arr[6] = 'text';
// arr[7] = 'lorem';
// arr[8] = 65;
// arr[9] = false;
// arr[10] = true;
// for (let arrElement of arr) {
//     console.log(arrElement);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<10;i++){
//     document.write(i + '<br>');
//     console.log(i);
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<100;i++){
//     document.write(i + '<br>');
//     console.log(i);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<100;i+=2){
//     document.write(i + '<br>');
//     console.log(i);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=0;i<100;i++){
//     if(i%2===0){
//     document.write(i + '<br>');
//     console.log(i);
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i=0;i<100;i++){
//     if(i%2!==0){
//         document.write(i + '<br>');
//         console.log(i);
//     }
// }