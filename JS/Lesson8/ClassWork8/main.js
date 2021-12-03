// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
    document.getElementById('main_header').className = 'september_21';
// b) робить шириниу елементу ul 400px
let uls = document.getElementsByTagName('ul');
uls[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkListElements = document.getElementsByClassName('linkList');
for (let linkListElement of linkListElements) {
    linkListElement.style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2

let text = 'dsfe g wmpegwepg wepgwe, weg, ';
let listElement2 = document.getElementsByClassName('listElement2');
for (let listElement2Element of listElement2) {
    listElement2Element.innerHTML = text;
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let allLi = document.getElementsByTagName('li');
for (let li of allLi) {
    li.style.backgroundColor = 'gray';
}
// f) отримує всі елементи 'a' та додає їм клас anchor

let allA = document.getElementsByTagName('a');
for (let a of allA) {
    a.className = 'anchor';
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (let a of allA) {
    if(a.innerText === 'link3'){
        a.style.fontSize = '40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (let a of allA) {
    a.className = a.className + ' ' + `element_${a.innerText}`;
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let subHeaders = document.getElementsByClassName('sub-header');
let setColor = 'green';
// setColor = prompt('which color you like?')
for (let subHeader of subHeaders) {
    subHeader.style.backgroundColor = setColor;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

for (let subHeader of subHeaders) {
    if (subHeader.innerHTML = 'content 2 segment'){
        // setColor = prompt('which color you like?')
        subHeader.style.color = setColor;
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let content1s = document.getElementsByClassName('content_1');

for (let content1 of content1s) {
    // content1.innerHTML = prompt('your text');
}
// l) отримати елементи p та змінити їм padding на 20px

let p = document.getElementsByTagName('p');

for (let pElement of p) {
    pElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let text2s = document.getElementsByClassName('text2');
for (let text2 of text2s) {
    text2.innerHTML = 'sep-2021';
}