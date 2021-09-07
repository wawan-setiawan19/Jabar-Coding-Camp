// soal 2
const readBooksPromise = require("./promise.js");

const books = [
    { name: "LOTR", timeSpent: 3000 },
    { name: "Fidas", timeSpent: 2000 },
    { name: "Kalkulus", timeSpent: 4000 },
    { name: "komik", timeSpent: 1000 },
];

books.forEach(element=>{
    readBooksPromise(10000,element)
})