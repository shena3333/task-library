// блок 4

//4-1
// Задача 1: Управление библиотекой
// Цель: создать систему управления для небольшой библиотеки. Ваша задача - разработать функционал для учета книг и запросов читателей.
// Базовые требования:
// У вас есть массив объектов books, где каждый объект представляет книгу с полями: id (уникальный идентификатор), title (название), author (автор), и isAvailable (доступность книги для выдачи).
// Есть массив объектов requests, где каждый объект содержит userId (идентификатор пользователя) и bookId (идентификатор запрашиваемой книги).
// Задачи:
//     1. Проверка доступности книги: Напишите функцию, которая принимает bookId и возвращает true, если книга доступна для выдачи, и false - в противном случае.
//     2. Поиск книги по автору: Разработайте функцию, которая принимает имя автора и возвращает массив всех книг этого автора, доступных в библиотеке.
//     3. Обработка запросов на выдачу книг: Создайте функцию, которая обрабатывает массив requests, проверяя каждый запрос. Если книга доступна, функция должна обновить статус isAvailable на false и выводить сообщение о том, что книга выдана пользователю. Если книга недоступна, выводить сообщение о том, что книга уже выдана.
//     4. Возврат книги: Напишите функцию, которая принимает bookId и обновляет статус isAvailable данной книги на true, с выводом сообщения о возврате книги.
// Пример данных:
// const books = [
//   { id: 1, title: "Война и мир", author: "Лев Толстой", isAvailable: true },
//   { id: 2, title: "Гарри Поттер и философский камень", author: "Дж. К. Роулинг", isAvailable: false },
//   { id: 3, title: "Улисс", author: "Джеймс Джойс", isAvailable: true }
// ];
// const requests = [
//   { userId: 101, bookId: 1 },
//   { userId: 102, bookId: 2 },
//   { userId: 103, bookId: 3 }
// ];
// Результаты вызовов функций, которые вы напишете (для самопроверки). Можете использовать такие же названия функций
// // Проверяем доступность книги с ID 1
// console.log(isBookAvailable(books, 1)); // Должно вернуть true
// // Находим книги автора "Лев Толстой"
// console.log(findBooksByAuthor(books, "Лев Толстой")); // Должен вернуть массив с одной книгой
// // Обрабатываем запросы на выдачу книг
// processRequests(books, requests);
// // Возвращаем книгу с ID 1
// returnBook(books, 1);
// // Проверяем, снова доступна ли книга с ID 1
// console.log(isBookAvailable(books, 1)); // Должно вернуть true
// Требования к выполнению:
// Используйте циклы для обхода массивов.
// Примените условные конструкции для проверки доступности книг.
// Управляйте объектами для обновления их состояния.

// состав библиотеки
const books = [
    { bookId: 1, title: "Война и мир", author: "Лев Толстой", isAvailable: true },
    { bookId: 2, title: "Гарри Поттер и философский камень", author: "Дж. К. Роулинг", isAvailable: false },
    { bookId: 3, title: "Улисс", author: "Джеймс Джойс", isAvailable: true },
    { bookId: 4, title: "Анна Каренина", author: "Лев Толстой", isAvailable: true },
];
// состав запросов , в который входит ид пользователя и ид книги, которую он взял
const requests = [
    { userId: 101, bookId: 1 },
    { userId: 102, bookId: 2 },
    { userId: 103, bookId: 4 }
];

// 4-1-1
//доступность книг
function isBookAvailable(needBookId, books) {
    let needBook;
    books.map((value) => {
        if (value.bookId === needBookId) {
            needBook = value.isAvailable;
        }
    })
    return needBook
}
// console.log(isBookAvailable(4,books))

//4-1-2
//поиск книг по автору
function findBooksByAuthor(needAuthor, books) {
    let needAuthortoLowerCase = needAuthor.toLowerCase();
    console.log(needAuthortoLowerCase);
    let booksByAutor = [];
    books.forEach(element => {
        element.author = element.author.toLowerCase()
    })
    console.log(books);
    books.map((value) => {
        if (value.author.includes(needAuthortoLowerCase)) {
            booksByAutor.push(value)
        }
    })
    return booksByAutor
}
// console.log(findBooksByAuthor('роули', books))

//4-1-3
// обработка запросов на выдачу книг

// request  - это живая очередь посетителей с запросами
function processRequests(mass) {
    for (let i = 0; i < mass.length; i++) {
        let currentRequest = mass[i];
        let currentRequestBook = currentRequest.bookId;
        // console.log('на текущей итерации обрабатываются:', 'запрос - ', currentRequest, 'идентификатор книги - ', currentRequestBook);
        for (let y = 0; y < books.length; y++) {
            if (books[y].bookId == currentRequestBook) {
                // console.log('нашел', books[y]);
                if (books[y].isAvailable == false) {
                    alert(`${books[y].title} автора ${books[y].author}- книга недоступна, так как уже выдана ранее`);
                    delete requests[i]
                } else {
                    alert(`${books[y].title} автора ${books[y].author}- книга выдана пользователю`);
                    books[y].isAvailable = false;
                    delete requests[i]
                }
            }
        }
    }
}
// processRequests(requests)
// console.log(books)
// console.log(requests)
//4-1-4
//возврат книги
//Напишите функцию, которая принимает bookId и обновляет статус isAvailable данной книги на true, с выводом сообщения о возврате книги.
function returnBook(needBookId, books) {
    let needBook = books.filter((item) => {
        return item.bookId == needBookId
    })
    needBook[0].isAvailable = true;
    alert(`${needBook[0].title} автор ${needBook[0].author} книга возвращена в библиотеку`)
}
// returnBook(2,books);
// console.log (books[1])

