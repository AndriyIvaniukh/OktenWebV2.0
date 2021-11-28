// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let deleteMarks = (string) => {
//     let newStr = '';
//     let inc = 0;
//     for (let strEl of string) {
//         if(strEl.charCodeAt()>64 && strEl.charCodeAt()<91 || strEl.charCodeAt()>96 && strEl.charCodeAt()<123 ){
//             newStr = newStr.concat(strEl);
//         }else{
//            inc<1 ? newStr = newStr.concat(' ') : false;
//            inc ++;
//         }
//     }
//     return newStr;
// }
//
// console.log(deleteMarks(n1));
// console.log(deleteMarks(n2));
// console.log(deleteMarks(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
// let randomIntegerArray = (size, limit) => {
//     let array = [];
//     for (let i=0;i<size;i++){
//         array.push(Math.floor(Math.random() * limit));
//     }
//     return array;
// }
// console.log(randomIntegerArray(10, 100));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// console.log(randomIntegerArray(10, 50).sort((a,b)=>a-b));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// console.log(randomIntegerArray(10,50).filter((xxx)=>xxx%2===0));
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// console.log(randomIntegerArray(10,50).map(xxx => xxx.toString()));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
// let nums = [11,21,3];
// let sortNums = (direction) => {
//     if(direction === 'ascending'){
//         return (a,b)=>a-b;
//     } else if(direction === 'descending'){
//         return (a,b)=>b-a;
//     }
// }
// console.log(nums.sort(sortNums('ascending')));
// console.log(nums.sort(sortNums('descending')));

//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.sort((a ,b)=>a.monthDuration-b.monthDuration));
console.log(coursesAndDurationArray.filter(obj => obj.monthDuration>5));