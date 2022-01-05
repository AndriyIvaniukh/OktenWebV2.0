// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let p = document.createElement("p");
// p.id = 'text';
// p.innerText = 'example';
// document.body.appendChild(p);
// let example = document.getElementById('text');
// example.onclick = () => {example.style.display = 'none';}

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let btn = document.createElement("button");
// btn.innerText = 'click me';
// document.body.appendChild(btn);
//
// btn.onclick = function (){this.style.display = 'none';}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let form = document.forms.f1;
// f1.onsubmit = e => {
//     e.preventDefault();
//     if(f1.age.value<18){
//         console.log("Age less than 18");
//     }else
//     console.log('All is good');
// };


// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let menu = document.getElementsByClassName("menu")[0];
//     menu.onclick = function (){
//         if(menu.getElementsByTagName('ul')[0].style.display === 'none'){
//             menu.getElementsByTagName('ul')[0].style.display = 'block';
//         }
//         else
//             menu.getElementsByTagName('ul')[0].style.display = 'none';
//
//     };

//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let arr = [{title : 'lorem0', body:'lorem ipsum dolo sit ameti0'},
    {title : 'lorem1', body:'lorem ipsum dolo sit ameti1'},
    {title : 'lorem2', body:'lorem ipsum dolo sit ameti2'},
    {title : 'lorem3', body:'lorem ipsum dolo sit ameti3'},
    {title : 'lorem4', body:'lorem ipsum dolo sit ameti4'},
    {title : 'lorem5', body:'lorem ipsum dolo sit ameti5'},
    {title : 'lorem6', body:'lorem ipsum dolo sit ameti6'},
    {title : 'lorem7', body:'lorem ipsum dolo sit ameti7'},
    {title : 'lorem8', body:'lorem ipsum dolo sit ameti8'},
];

for (let arrElement of arr) {

    let div = document.createElement('div');
    let div2 = document.createElement('div');
    let h2 = document.createElement('h2');
    h2 = arrElement.title;
    let p = document.createElement('p');
    p = arrElement.body
    let button = document.createElement('button');
    button.innerText = 'show';
    button.onclick = function (){
        if(div2.className === 'hidden'){
            div2.classList.remove('hidden');
        }else
        div2.classList.add('hidden');
    }
    div2.append(h2,p);
    div.style.display = 'flex';
    div.append(div2,button);
    document.body.append(div);
}

