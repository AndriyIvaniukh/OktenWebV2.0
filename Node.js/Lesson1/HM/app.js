const fs = require('fs');
const path = require('path');


const onLineUsers = [
    {name: 'Andriy', age: 26, city: 'Lviv'},
    {name: 'Kolia', age: 22, city: 'London'},
    {name: 'Marta', age: 21, city: 'Rivne'},
    {name: 'Oleh', age: 24, city: 'Ternopil'},
    {name: 'Taras', age: 25, city: 'Kyiv'},
];

const inPersonUsers = [
    {name: 'Olia', age: 19, city: 'Barcelona'},
    {name: 'Lesia', age: 20, city: 'Rome'},
    {name: 'Bogdan', age: 27, city: 'Berlin'},
    {name: 'Myroslav', age: 29, city: 'Athens'},
    {name: 'Petro', age: 20, city: 'Krakow'},
];


fs.mkdir(path.join(__dirname, 'main'), (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    fs.mkdir(path.join(__dirname, 'main', 'online'), err => {
        if (err) {
            console.log(err);
            throw err;
        }
        addToFile(onLineUsers, 'online', 'onLineUsers.txt');
        moveToOtherFoolder('online', 'inPerson', 'onLineUsers.txt')
    });

    fs.mkdir(path.join(__dirname, 'main', 'inPerson'), err => {
        if (err) {
            console.log(err);
            throw err;
        }
        addToFile(inPersonUsers, 'inPerson', 'inPersonUsers.txt');
        moveToOtherFoolder('inPerson', 'online', 'inPersonUsers.txt')
    });
});

function moveToOtherFoolder(oldWay, newWay, fileName) {
    fs.rename(path.join(__dirname, 'main', oldWay, fileName),
        path.join(__dirname, 'main', newWay, fileName),
        (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        });
}

function addToFile(arrayOfUsers, foolderName, fileName) {
    for (const user of arrayOfUsers) {
        fs.appendFile(path.join(__dirname, 'main', foolderName, fileName),
            `Name: ${user.name} \nAge: ${user.age} \nCity: ${user.city} \n\n`,
            err => {
                if (err) {
                    console.log(err);
                    throw err;
                }
            }
        )
    }
}