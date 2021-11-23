// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let getLowestValue = (a, b, c) => {
    if (a <= b && a <= c) {
        return a;
    } else if (b <= a && b <= c) {
        return b;
    } else return c;
}
console.log(getLowestValue(140, 3, 52));
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let getBigestValue = (a, b, c) => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else return c;
}
console.log(getBigestValue(140, 3, 152));
// - створити функцію яка повертає найбільше число з масиву
let arr = [21, 66, 3, 79, 210, 55, 35, 1];
let bigestValueFromArrey = (array) => {
    let max = array[0];
    for (let arrayElement of array) {
        if (arrayElement > max)
            max = arrayElement;
    }
    return max;
};
console.log(bigestValueFromArrey(arr));
// - створити функцію яка повертає найменьше число з масиву
let lowestValueFromArrey = (array) => {
    let min = array[0];
    for (let arrayElement of array) {
        if (arrayElement < min)
            min = arrayElement;
    }
    return min;
};
console.log(lowestValueFromArrey(arr));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let countArrayElements = (array) => {
    let summ = null;
    for (let arrayElement of array) {
        summ += arrayElement;
    }
    return summ;
}
console.log(countArrayElements(arr));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let countMiddleValueArray = (array) => {
    let summ = null;
    for (let arrayElement of array) {
        summ += arrayElement;
    }
    return summ / array.length;
}
console.log(countMiddleValueArray(arr));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let returnMinimumAndLogMaximumValues = (...arr) => {
    let min = arr[0];
    let max = arr[0];
    for (let arrElement of arr) {
        if (arrElement > max) {
            max = arrElement;
        } else if (arrElement < min) {
            min = arrElement;
        }
    }
    console.log(max);
    return min;
}
console.log(returnMinimumAndLogMaximumValues(21, 66, 3, 79, 210, 55, 35, 1));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let generateArreyOfNumbers = (arraySize, arr = []) => {
    if (arr.length < arraySize) {
        arr.push(Math.round(Math.random() * 100));
        generateArreyOfNumbers(arraySize, arr);
    }
    return arr;
}
console.log(generateArreyOfNumbers(100));
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let generateArreyOfNumbersLimited = (arraySize, limit, arr = []) => {
    if (arr.length < arraySize) {
        arr.push(Math.round(Math.random() * limit));
        generateArreyOfNumbersLimited(arraySize, limit, arr);
    }
    return arr;
}
console.log(generateArreyOfNumbersLimited(100, 500));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let returnReverseArray = (array) => {
    let newArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArr.push(array[i]);
    }
    return newArr;
}
console.log(arr);
console.log(returnReverseArray(arr));