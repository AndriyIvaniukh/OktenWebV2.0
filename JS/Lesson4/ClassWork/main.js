// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minimalValue(a,b,c){
//     if(a<=b && a<=c){
//         console.log(a);
//     }else if(b<=a && b<=c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
// }
//
// minimalValue(14,5,7);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maximalValue(a,b,c){
//     if(a>=b && a>=c){
//         console.log(a);
//     }else if(b>=a && b>=c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
// }
//
// maximalValue(14,5,7);

// - створити функцію яка повертає найбільше число з масиву

// function logMaximalValueFromArray(array){
//     let max = array[0];
//     for (let arrayElement of array) {
//         if (arrayElement>max){
//             max=arrayElement;
//         }
//     }
//     console.log(max);
// }
//
// logMaximalValueFromArray([10,55,3,48,44,6,97]);

// - створити функцію яка повертає найменьше число з масиву

// function logMinimalValueFromArray(array){
//     let min = array[0];
//     for (let arrayElement of array) {
//         if (arrayElement<min){
//             min=arrayElement;
//         }
//     }
//     console.log(min);
// }
//
// logMinimalValueFromArray([10,55,3,48,44,6,97]);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function arraySum(array){
//     let sum = null;
//     for (let arrayElement of array) {
//         sum+=arrayElement;
//     }
//     return sum;
// }
//
// console.log(arraySum([1,2,10]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function arrayMediumValue(array){
//     let sum = null;
//     for (let arrayElement of array) {
//         sum+=arrayElement;
//     }
//     return sum/array.length;
// }
//
// console.log(arrayMediumValue([5,7,9]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function returnMinimalnumberAndLogMax(){
//     let min = arguments[0];
//     let max = arguments[0];
//
//     for (let argument of arguments) {
//         if (argument>max){
//             max=argument;
//         }
//         if (argument<min){
//             min=argument;
//         }
//     }
//     console.log('Maximal - ' + max);
//     return min;
// }
//
// console.log('Minimal - ' + returnMinimalnumberAndLogMax(55,64,3,17,99,47));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function randArray() {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     console.log(arr);
// }
//
// randArray();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randArrayWithLimit(limit) {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     console.log(arr);
// }
//
// randArrayWithLimit(55);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function reverseArray(array){
//     let newArray = [];
//     for (let i = array.length-1; i>=0; i--){
//         newArray.push(array[i]);
//     }
//     return(newArray);
// }
//
// console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));