// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// a
// let arr =[];
// let i=1;
// while (arr.length<50){
//     if (i%2===0){
//         arr.push(i);
//     }
//     i++;
// }
// console.log(arr);

// b
// let arr =[];
// let i=1;
// while (arr.length<50){
//     if (i%2!==0){
//         arr.push(i);
//     }
//     i++;
// }
// console.log(arr);

// c
// let arr =[];
// for(let i=0; i<20;i++){
//     arr.push(Math.round(Math.random() * 100));
// }
// console.log(arr);

// d
// let arr =[];
// for(let i=0; i<20;i++){
//     arr.push(Math.round(Math.random() * 724 + 8));
// }
// console.log(arr);


// 2. Вивести за допомогою console.log кожен третій елемен

// let arr =[];
// for(let i=0; i<20;i++){
//     arr.push(Math.round(Math.random() * 724 + 8));
// }
// console.log(arr)
// for(let i=0; i<arr.length;i++){
//     if(i%3===0){
//         console.log(arr[i]);
//     }
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let arr =[];
// for(let i=0; i<20;i++){
//     arr.push(Math.round(Math.random() * 724 + 8));
// }
// console.log(arr)
// for(let i=0; i<arr.length;i++){
//     if(i%3===0 && arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let arr =[];
// let newArray = [];
// for(let i=0; i<20;i++){
//     arr.push(Math.round(Math.random() * 724 + 8));
// }
// console.log(arr)
// for(let i=0; i<arr.length;i++){
//     if(i%3===0 && arr[i]%2===0){
//         console.log(arr[i]);
//         newArray.push(arr[i]);
//     }
// }
// console.log(newArray);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let arr =[];
// for(let i=0; i<10;i++){
//     arr.push(Math.round(Math.random() * 25));
// }
// console.log(arr)
// for(let i=0; i<arr.length;i++){
//     if(arr[i]%2===0 && i!==0){
//         console.log(arr[i-1]);
//
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arr = [100,250,50,168,120,345,188];
// let sum = null;
// for (let number of arr) {
//     sum+=number;
// }
// let middleCheck = sum/arr.length;
// console.log(middleCheck);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arr =[];
// let arr2 = [];
// for(let i=0; i<10;i++){
//     arr.push(Math.round(Math.random() * 100));
// }
// console.log(arr)
// for (let num of arr) {
//     num*=5;
//     arr2.push(num);
// }
// console.log(arr2);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arr = ['asfgsd', 23, true, 234, 'sgfreve', 'verve', 0, false];
// let arr2 = [];
// for (let arrElement of arr) {
//     if (typeof arrElement === 'number'){
//         arr2.push(arrElement);
//     }
// }
// console.log(arr2);

// - Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Масиви:
// let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let fullUsers = [];
// for (let user of usersWithId) {
//     for (let cities of citiesWithId) {
//         if(user.id === cities.user_id){
//             let obj = {
//                 id: user.id,
//                 name: user.name,
//                 age: user.age,
//                 status: user.status,
//                 address: {
//                     country: cities.country,
//                     city: cities.city,
//                 },
//             }
//             fullUsers.push(obj);
//         }
//     }
// }
// console.log(fullUsers)
//
//
//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr =[];
// for(let i=0; i<10;i++){
//     arr.push(Math.round(Math.random() * 30));
// }
// for (let arrElement of arr) {
//     if(arrElement%2===0){
//         console.log(arrElement);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr =[];
// for(let i=0; i<10;i++){
//     arr.push(Math.round(Math.random() * 30));
// }
// let arr2 = [];
// for (let arrElement of arr) {
//     arr.push(arrElement);
// }

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
// let arr = [ 'a', 'b', 'c'];
// let str ='';
// for (let i=0; i<arr.length; i++) {
//     str+=arr[i];
// }
// console.log(str);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.


// let arr = [ 'a', 'b', 'c'];
// let str ='';
// let i=0;
// while(i<arr.length) {
//     str+=arr[i];
//     i++;
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let arr = [ 'a', 'b', 'c'];
// let str ='';
// for (let a of arr) {
//     str+=a;
// }
// console.log(str);