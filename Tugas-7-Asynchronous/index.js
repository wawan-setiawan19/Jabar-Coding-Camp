// soal 1
const readBooks = require("./callback.js");

const books = [
    { name: "LOTR", timeSpent: 3000 },
    { name: "Fidas", timeSpent: 2000 },
    { name: "Kalkulus", timeSpent: 4000 },
    { name: "komik", timeSpent: 1000 },
];

const read = (time, books, index) =>{
    if (index < books.length) {
        readBooks(time,books[index], (rest)=>{
            if(rest >= 0){
                index++
                read(rest, books, index)
            }
        })
    }
}

read(10000, books, 0)