// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let allSelectors = document.querySelectorAll('*');

let arrList = [];

for (let allSelector of allSelectors) {
    for (let classListElement of allSelector.classList) {
        if (classListElement !== ''){
            for (let arrListElement of arrList) {
                    arrList.push(classListElement);
            }

        }
    }

}

console.log(arrList);
// console.log(arrList);
