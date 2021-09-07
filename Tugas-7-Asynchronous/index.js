// soal 1
const readBooks = require("./callback.js");

const books = [
    { name: "LOTR", timeSpent: 3000 },
    { name: "Fidas", timeSpent: 2000 },
    { name: "Kalkulus", timeSpent: 4000 },
    { name: "komik", timeSpent: 1000 },
];

books.forEach(element=>{
    readBooks(10000, element, ()=>{});
})

