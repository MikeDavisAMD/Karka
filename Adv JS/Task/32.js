const books = [
    { title: '1984', author: 'George Orwell' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
];
const findBookByTitle = ((data,key) => data.find(data => data.title===key))
console.log(findBookByTitle(books, '1984'))