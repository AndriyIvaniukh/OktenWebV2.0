// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//  - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content".
let byID = document.getElementById('content').innerText;
console.log(byID);
// -- отримує текст з блоку з id "rules"
let byID2 = document.getElementById('rules').innerText;
console.log(byID2);
// -- замініть текст параграфа з id 'content' на будь-який інший
let changeByID = document.getElementById('content');
changeByID.innerText = 'Test change';
console.log(changeByID.innerText);
// -- замініть текст параграфа з id 'rules' на будь-який інший
let changeByID2 = document.getElementById('rules');
changeByID2.innerText = 'Change rules to something else';
console.log(changeByID2.innerText);
// -- змініть кожному елементу колір фону на червоний
let allChildrens = document.children;
for (let children of allChildrens) {
    children.style.backgroundColor = 'red';
}
// -- змініть кожному елементу колір тексту на синій
for (let children of allChildrens) {
    children.style.color = 'blue';
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById('rules').classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fcRules = document.getElementsByClassName('fc_rules');
for (let fcRule of fcRules) {
    fcRule.style.color = 'white';
}
