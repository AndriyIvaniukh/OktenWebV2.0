// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let div = document.createElement('div');
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// div.style.backgroundColor = 'blue';
// div.style.color = 'red';
// div.style.fontSize = '36px';
// div.innerText = 'lorem';
// document.body.appendChild(div);
// document.body.appendChild(div.cloneNode(true));



//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//

// let arr = ['Main','Products','About us','Contacts'];
// let byClass = document.getElementsByClassName('menu')[0];
//
// for (let elemArr of arr) {
//     let li = document.createElement('li');
//     li.innerText= elemArr;
//     byClass.appendChild(li);
// }


// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
//
// for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.innerHTML = coursesAndDurationArrayElement.title + ': ' + coursesAndDurationArrayElement.monthDuration;
//     document.body.appendChild(div);
// }



// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//

for (let coursesAndDurationArrayElement of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = coursesAndDurationArrayElement.title;
    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = coursesAndDurationArrayElement.monthDuration;

    div.append(h1,p);
    document.body.appendChild(div);
}