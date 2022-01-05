// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
let div1 = document.createElement('div');
let div2 = document.createElement('div');
div1.innerText = 'Form 1';
div2.innerText = 'Form 2';

let form1 = document.createElement('form');
form1.setAttribute('name', 'form1');
let form2 = document.createElement('form');
form2.setAttribute('name', 'form2');

let input1 = document.createElement('input');
input1.setAttribute('name', 'input1');
let input2 = document.createElement('input');
input2.setAttribute('last', 'input2');
let input3 = document.createElement('input');
input3.setAttribute('age', 'input3');
let input4 = document.createElement('input');
input4.setAttribute('status', 'input4');

form1.append(input1,input2);
form2.append(input3,input4);

let btn = document.createElement('button');
btn.innerText = 'check';


div1.appendChild(form1);
div2.appendChild(form2);
document.body.append(div1,div2,btn);

btn.addEventListener('click', function (){
    console.log(document.forms.form1.input1.value);
    console.log(document.forms.form1.input2.value);
    console.log(document.forms.form2.input3.value);
    console.log(document.forms.form2.input4.value);

});

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
