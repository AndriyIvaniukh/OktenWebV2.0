// - Дано натуральное число n. Выведите все числа от 1 до n.
// let logAllValueFromOneToLimit = (limit, i = 1) => {
//     if (i <= limit) {
//         console.log(i);
//         i++;
//         logAllValueFromOneToLimit(limit, i);
//     }
// }
// logAllValueFromOneToLimit(10);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let logAllValueFromAToB = (a, b, i = a) => {
//     if (i <= b && a < b) {
//         console.log(i);
//         i++;
//         logAllValueFromAToB(a, b, i);
//     } else if (i >= b && a > b) {
//         console.log(i);
//         i--;
//         logAllValueFromAToB(a, b, i);
//     }
// }
// logAllValueFromAToB(20,10);
// logAllValueFromAToB(10,20);
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let changeArrayElementsPosition = (array, index) => {
//     let value = null;
//     if(index<array.length-1 && index>=0 ){
//         value= array[index];
//         array[index]=array[index+1];
//         array[index+1]=value;
//         return array;
//     }else{
//         return 'wrong index value';
//     }
// }
// console.log([9,8,0,4]);
// console.log(changeArrayElementsPosition([9,8,0,4],0));
// console.log(changeArrayElementsPosition([9,8,0,4],1));
// console.log(changeArrayElementsPosition([9,8,0,4],2));
// console.log(changeArrayElementsPosition([9,8,0,4],3));
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


let zeroToEnd = (array) => {
    let coutZero = 0;
    for (let i=0;i<array.length;i++){
        if (array[i]===0){
            array.splice(i,1);
            coutZero++;
            i--;
        }
    }
    for (let i = 0; i< coutZero;i++){
        array.push(0);
    }
    return array;
}
console.log(zeroToEnd([1,0,6,0,3]));
console.log(zeroToEnd([0,1,2,3,4]));
console.log(zeroToEnd([0,0,1,0]));
console.log(zeroToEnd([0,0,0,0,1,0]));