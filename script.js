// блок 4 Управление библиотекой
// Цель: создать систему управления для небольшой библиотеки. Ваша задача - разработать функционал для учета книг и запросов читателей.
// Базовые требования:
// У вас есть массив объектов books, где каждый объект представляет книгу с полями: id (уникальный идентификатор), title (название), author (автор), и isAvailable (доступность книги для выдачи).
// Есть массив объектов requests, где каждый объект содержит userId (идентификатор пользователя) и bookId (идентификатор запрашиваемой книги).
// Задачи:
//     1. Проверка доступности книги: Напишите функцию, которая принимает bookId и возвращает true, если книга доступна для выдачи, и false - в противном случае.
//     2. Поиск книги по автору: Разработайте функцию, которая принимает имя автора и возвращает массив всех книг этого автора, доступных в библиотеке.
//     3. Обработка запросов на выдачу книг: Создайте функцию, которая обрабатывает массив requests, проверяя каждый запрос. Если книга доступна, функция должна обновить статус isAvailable на false и выводить сообщение о том, что книга выдана пользователю. Если книга недоступна, выводить сообщение о том, что книга уже выдана.
//     4. Возврат книги: Напишите функцию, которая принимает bookId и обновляет статус isAvailable данной книги на true, с выводом сообщения о возврате книги.

const books = [
    { id: 1, title: "Война и мир", author: "Лев Толстой", isAvailable: true },
    { id: 2, title: "Гарри Поттер и философский камень", author: "Дж. К. Роулинг", isAvailable: false },
    { id: 3, title: "Улисс", author: "Джеймс Джойс", isAvailable: true },
    { id: 4, title: "Анна Каренина", author: "Лев Толстой", isAvailable: true },
];
const requests = [
    { userId: 101, bookId: 1 },
    { userId: 102, bookId: 2 },
    { userId: 103, bookId: 4 }
];

// 4-1-1 доступность книг
function isBookAvailable(books, needBookId) {
    return books.find(book => book.id == needBookId).isAvailable
}

//4-1-2 поиск книг по автору
function findBooksByAuthor(books, needAuthor,) {
    books.forEach(book => {
        book.author = book.author.toLowerCase()
    })
    return books.filter((book) => book.author.includes(needAuthor.toLowerCase()))
    // return books
    //     .forEach(book => {
    //     book.author = book.author.toLowerCase()
    // })
    //     .filter((book) => book.author.includes(needAuthor.toLowerCase()))
}
console.log(findBooksByAuthor(books, 'толстой'))

//4-1-3 обработка запросов на выдачу книг
function processRequests (requests,books){
    requests.map((request)=>{
      let needBook= books.find((book)=> book.id===request.bookId);
      if(needBook.isAvailable){
        alert(`Книга ${needBook.title} выдана пользователю`);
        needBook.isAvailable=false;
      } else{
        alert(`Книга ${needBook.title} занята`);
      }
    })
}

//4-1-4 возврат книги
function returnBook (books,needBookId) {
   const needBook= books.find((book)=>book.id===needBookId);
    needBook.isAvailable=true;
    alert(`Книга ${needBook.title} возвращена в библиотеку`)
}


