const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'main'), (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
});

fs.mkdir(path.join(__dirname, 'main', 'online'), err => {
    if (err) {
        console.log(err);
        throw err;
    }
});

fs.mkdir(path.join(__dirname, 'main', 'inPerson'), err => {
    if (err) {
        console.log(err);
        throw err;
    }
});

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

for (const onLineUser of onLineUsers) {
    fs.appendFile(path.join(__dirname, 'main', 'online', 'onLineUser.txt'),
        `Name: ${onLineUser.name} \nAge: ${onLineUser.age} \nCity: ${onLineUser.city} \n\n`,
        err => {
            if (err) {
                console.log(err);
                throw err;
            }
        }
    )
}

for (const inPersonUser of inPersonUsers) {
    fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPersonUser.txt'),
        `Name: ${inPersonUser.name} \nAge: ${inPersonUser.age} \nCity: ${inPersonUser.city} \n\n`,
        err => {
            if (err) {
                console.log(err);
                throw err;
            }
        }
    )
}

fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPersonUser.txt'),
    path.join(__dirname, 'main', 'online', 'inPersonUser.txt'),
    (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    });

fs.rename(path.join(__dirname, 'main', 'online', 'onLineUser.txt'),
    path.join(__dirname, 'main', 'inPerson', 'onLineUser.txt'),
    (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
});