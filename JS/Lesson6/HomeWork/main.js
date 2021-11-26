// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strOne = 'hello world';
let strTwo = 'lorem ipsum';
let strThree = 'javascript is cool';
console.log(strOne.length);
console.log(strTwo.length);
console.log(strThree.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strOneUP = strOne.toUpperCase();
let strTwoUP = strTwo.toUpperCase();
let strThreeUP = strThree.toUpperCase();
console.log(strOneUP);
console.log(strTwoUP);
console.log(strThreeUP);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strOneD = strOneUP.toLowerCase();
let strTwoD = strTwoUP.toLowerCase();
let strThreeD = strThreeUP.toLowerCase();
console.log(strOneD);
console.log(strTwoD);
console.log(strThreeD);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyStr = ' dirty string   ';
console.log(dirtyStr.trim());
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
   let str = 'Каждый охотник желает знать';
   let stringToarray = (string) =>{
       return string.split(' ');
   }
   console.log(stringToarray(str));
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let delete_characters = (string, length) => {
        return string.substr(0, length);
    }
console.log(delete_characters(str, 10));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
    let str2 = "HTML JavaScript PHP";
    let  insert_dash1 = (string)=> {
        return string.replaceAll(' ', '-').toUpperCase();
    }
    let  insert_dash2 = (string)=> {
        return string.split(' ').join('-').toUpperCase();
    }

console.log(insert_dash1(str2));
console.log(insert_dash2(str2));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str3 = 'перша буква до верхнього регістру';

let firstLetterToUpperCase = (string) => {
    return string[0].toUpperCase() + string.slice(1);
}

console.log(firstLetterToUpperCase(str3));
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (string) => {
    return string.split(' ').map(xxx=>xxx[0].toUpperCase() + xxx.slice(1)).join(' ');
}
console.log(capitalize(str3));