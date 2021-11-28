// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// function Car(model, brand, year, topSpeed, engine) {
//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.topSpeed = topSpeed;
//     this.engine = engine;
//
//     this.drive = () => console.log(`їдемо зі швидкістю ${this.topSpeed} на годину`);
//     this.info = () => console.log(`модель - ${this.model}, виробник - ${this.brand}, рік випуску - ${this.year}, максимальна швидкість - ${this.topSpeed}, обєм двигуна - ${this.engine}`);
//     this.increaseMaxSpeed = (newSpeed) => {this.topSpeed += newSpeed};
//     this.changeYear = (newYear) => {this.year = newYear};
//     this.addDriver = (driver) => {this.driver = driver};
// }
//
// let car = new Car('e300', 'mers', 2013, 250, 3.0);
// car.drive();
// car.info();
// car.increaseMaxSpeed(40);
// car.changeYear(2020);
// car.addDriver({name: 'vasyl', age: 23});
// console.log(car);

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, brand, year, topSpeed, engine) {
//         this.model = model;
//         this.brand = brand;
//         this.year = year;
//         this.topSpeed = topSpeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.topSpeed} на годину`);
//     }
//
//     info() {
//         console.log(`модель - ${this.model}, виробник - ${this.brand}, рік випуску - ${this.year}, максимальна швидкість - ${this.topSpeed}, обєм двигуна - ${this.engine}`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.topSpeed += newSpeed;
//     }
//
//     changeYear(newYear){
//         this.year = newYear;
//     }
//
//     addDriver(driver){
//         this.driver = driver;
//     }
// }
//
// let car = new Car('e300', 'mers', 2013, 250, 3.0);
// car.drive();
// car.info();
// car.increaseMaxSpeed(40);
// car.changeYear(2020);
// car.addDriver({name: 'vasyl', age: 23});
// console.log(car);

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
function Popelushka(name,age,legSize){
    this.name = name;
    this.age = age;
    this.legSize = legSize;
}
let popelushkas = [
    new Popelushka('oksana' , 17,34),
    new Popelushka('natalia' , 18,35),
    new Popelushka('marta' , 16,36),
    new Popelushka('olia' , 17,37),
    new Popelushka('yaruna' , 21,35),
    new Popelushka('lesia' , 20,36),
    new Popelushka('roksa' , 19,34),
    new Popelushka('tania' , 16,37),
    new Popelushka('khrystyna' , 15,35),
    new Popelushka('vasilina' , 18,38)
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Princ{
    constructor(name, age, shuesSize) {
        this.name = name;
        this.age = age;
        this.shuesSize = shuesSize;
    }
}

let princ = new Princ('Taras', 25, 38);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let popelushka of popelushkas) {
    if (popelushka.legSize === princ.shuesSize){
        console.log(popelushka);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(popelushkas.find(popelushka => popelushka.legSize === princ.shuesSize));
