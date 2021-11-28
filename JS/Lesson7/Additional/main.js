// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//

// class Obj {
//     address = {geo:{}};
//     company = {};
//     constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address.street = street;
//         this.address.suite = suite;
//         this.address.city = city;
//         this.address.zipcode = zipcode;
//         this.address.geo.lat = lat;
//         this.address.geo.lng = lng;
//         this.phone = phone;
//         this.website = website;
//         this.company.name = companyName;
//         this.company.catchPhrase = catchPhrase;
//         this.company.bs = bs;
//     }
// }
//
// let obj = new Obj(1,'Leanne Graham','Bret','Sincere@april.biz','Kulas Light','Apt. 556',
//     'Gwenborough','92998-3874','-37.3159','81.1496', '1-770-736-8031 x56442','hildegard.org',
//     'Romaguera-Crona',  'Multi-layered client-server neural-net',  'harness real-time e-markets');
//
// console.log(obj);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Tag{

    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

let tags= [];
tags.push(new Tag('a','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    [
        {titleOfAtte: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
        {titleOfAtte: 'coords', actionOfAttr: 'Yстанавливает координаты активной области.'},
        {titleOfAtte: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'}
    ]));

tags.push(new Tag('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента',
    [
        {titleOfAtte: 'align', actionOfAttr: 'Задает выравнивание содержимого тега'},
        {titleOfAtte: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
    ]));

tags.push(new Tag('h1','HTML предлагает шесть заголовков разного уровня,',
    [
        {titleOfAtte: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'},
    ]));

tags.push(new Tag('span','Тег <span> предназначен для определения строчных элементов документа.',
    [
        {titleOfAtte: 'accesskey', actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
        {titleOfAtte: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}
    ]));

console.log(tags);