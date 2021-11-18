// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function test() {
//     if (arguments.length === 1) {
//         console.log(arguments[0]);
//     } else if (arguments.length > 1) {
//         let sum = null;
//         for (let argument of arguments) {
//             if (typeof argument === 'string') {
//                 if (sum === null) {
//                     sum = argument;
//                 } else {
//                     sum = sum + ' ' + argument + ' ';
//                 }
//             } else {
//                 sum += argument;
//             }
//         }
//         console.log(sum);
//     }
//
// }
//
// test(1);
// test(5, 33);
// test(5, 33, 2, 4, 56, 8);
// test('first', 'step');
// test(65, 'first', 5, 'step');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function sumElementsOfArray(arr1, arr2){
//     let newArray = [];
//     if(arr1.length<arr2.length){
//         let a = [];
//         a = arr2.slice();
//         arr2 = arr1.slice();
//         arr1 = a.slice();
//     }
//     for(let i=0; i<arr1.length; i++){
//         if(arr2[i]){
//             newArray[i] = arr1[i]+arr2[i];
//         }else{
//             newArray[i] = arr1[i];
//         }
//     }
//
//     return newArray;
// }
//
// let arr1 = [2,5,8,9,4,3,6];
// let arr2 = [6,8,7,5,2,3,2,34,4];
// console.log(arr1);
// console.log(arr2);
// console.log(sumElementsOfArray(arr1,arr2));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function returnKeys(array){
//     let newArray = [];
//     for (let arrayElement of array) {
//         for (let arrayKey in arrayElement) {
//             newArray.push(arrayKey);
//         }
//     }
//     return newArray;
// }
//
// console.log(returnKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function returnKeys(array){
//     let newArray = [];
//     for (let arrayElement of array) {
//         for (let arrayKey in arrayElement) {
//             newArray.push(arrayElement[arrayKey]);
//         }
//     }
//     return newArray;
// }
//
// console.log(returnKeys([{name: 'Dima', age: 13}, {model: 'Camry'}]));