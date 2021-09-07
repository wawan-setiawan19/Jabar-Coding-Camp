// soal 2
const readBooksPromise = require("./promise.js");

const books = [
    { name: "LOTR", timeSpent: 3000 },
    { name: "Fidas", timeSpent: 2000 },
    { name: "Kalkulus", timeSpent: 4000 },
    { name: "komik", timeSpent: 1000 },
];

const read = (time, books, index) => {
    readBooksPromise(time, books[index])
    .then(result=>{
        index++
        if(result > 0){
            read(result, books, index);
        }
    })
    .catch(err=>{
        console.error(err);
    })
};

read(10000, books, 0);