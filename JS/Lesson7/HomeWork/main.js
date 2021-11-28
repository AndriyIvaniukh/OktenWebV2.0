// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let arrUsers = [];
arrUsers.push(new User(1, 'Vasl', 'ASdaf', 'dasf@gmail.com', 213432512));
arrUsers.push(new User(2, 'Petro', 'asfasf', 'dasf@gmail.com', 213432512));
arrUsers.push(new User(3, 'Taras', 'sdgsrgv', 'dasf@gmail.com', 213432512));
arrUsers.push(new User(8, 'Oleh', 'wqrfewf', 'dasf@gmail.com', 213432512));
arrUsers.push(new User(5, 'Serhii', '3qrfwef', 'dasf@gmail.com', 213432512));
arrUsers.push(new User(6, 'Orest', 'sdaffa', 'dasf@gmail.com', 213432512));
arrUsers.push(new User(7, 'Maks', 'asfasv', 'dasf@gmail.com', 213432512));
arrUsers.push(new User(4, 'Bogdan', 'fdgdb', 'dasf@gmail.com', 213432512));
arrUsers.push(new User(9, 'Rostik', 'Sdghytnb', 'dasf@gmail.com', 213432512));
arrUsers.push(new User(10, 'Myroslav', 'thjytjnbv', 'dasf@gmail.com', 213432512));

console.log(arrUsers);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let newArrayUser = arrUsers.filter(xxx => xxx.id % 2 === 0);
console.log(newArrayUser);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
arrUsers.sort((a, b) => a.id - b.id);
console.log(arrUsers);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrClient = [
    new Client(1, 'Vasl', 'ASdaf', 'dasf@gmail.com', 213432512, ['qwdr', 'werwe', 'werw', 'ewrr2w']),
    new Client(2, 'Petro', 'asfasf', 'dasf@gmail.com', 213432512, ['qwdr', 'werwe', 'werw', '234rw', 'werwer','2342rw']),
    new Client(3, 'Taras', 'sdgsrgv', 'dasf@gmail.com', 213432512, ['qwdr', 'werwe']),
    new Client(8, 'Oleh', 'wqrfewf', 'dasf@gmail.com', 213432512, ['qwdr']),
    new Client(5, 'Serhii', '3qrfwef', 'dasf@gmail.com', 21343251, ['qwdr', 'werwe', 'werw', 'werwer', 'werwer', 'werwer', 'werwer', 'werwer']),
    new Client(6, 'Orest', 'sdaffa', 'dasf@gmail.com', 213432512, ['qwdr', 'werwe', 'werw', 'werwer', 'werwer']),
    new Client(7, 'Maks', 'asfasv', 'dasf@gmail.com', 213432512, ['qwdr', 'werwe', 'werw']),
    new Client(4, 'Bogdan', 'fdgdb', 'dasf@gmail.com', 213432512, ['qwdr', 'werwe', 'werw', 'werwer', 'werwer', 'werwer', 'werwer', 'werwer', 'werwer', 'werwer']),
    new Client(9, 'Rostik', 'Sdghytnb', 'dasf@gmail.com', 2134325123124, ['qwdr', 'werwe', 'werw', 'werwer', 'werwer', 'werwer']),
    new Client(10, 'Myroslav', 'thjytjnbv', 'dasf@gmail.com', 2132142421, ['qwdr', 'werwe'])
]

// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

arrClient.sort((a,b)=>a.order.length-b.order.length);
console.log(arrClient);