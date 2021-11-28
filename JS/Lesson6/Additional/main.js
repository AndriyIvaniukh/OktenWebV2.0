// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//

// let cutString = (str, n , arr=[]) => {
//     let start = arr.length*n;
//     arr.push(str.slice(start, n*(arr.length+1)));
//     if(str.length > n*(arr.length)){
//         cutString(str, n, arr);
//     }
//     return arr;
// }
//
// console.log(cutString('наслаждение', 3));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// let checkEmail = (str) => {
//     if(str.indexOf('@') === -1){
//         return console.log('no @');
//     }
//     if(str.indexOf('@')<3){
//         return console.log('short name before @');
//     }else if(str.lastIndexOf('.')<=str.indexOf('@')+2){
//         return console.log('short name before .');
//     }else console.log('all is ok');
//
// }
//
// checkEmail('someemail@gmail.com');
// checkEmail('someeMAIL@gmail.com');
// checkEmail('someeMAIL@i.ua');
// checkEmail('some.email@gmail.com');


// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// coursesArray.sort((a,b) => b.modules.length-a.modules.length);
// console.log(coursesArray);

//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// document.writeln(count(str, symb)) // 5
//     let symb = "о";
//     let str = "Астрономия это наука о небесных объектах";
//
//     let count = (str, symb) => {
//         let count=null;
//         for (let strElement of str) {
//             if (strElement===symb){
//                 count++;
//             }
//         }
//         return count;
//     }
// console.log(count(str, symb));

//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
//
//     let cutString = (str, n) =>{
//         let strArr = str.split(' ');
//         let newStr= '';
//         for (let i=0; i<n;i++){
//             newStr+=strArr[i] +' ';
//         }
//         return newStr;
//     }
//
// console.log(cutString(str, 5));
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'