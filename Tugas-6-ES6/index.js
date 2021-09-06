// soal 1
const luasPersegiPanjang = (panjang, lebar) => panjang * lebar;

console.log(luasPersegiPanjang(9, 4));

// soal 2
const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName() {
            console.log(`${firstName} ${lastName}`);
        },
    };
};

newFunction("Wawan", "Setiawan").fullName();

// soal 3
const newObject = {
    firstName: "Wawan",
    lastName: "Setiawan",
    address: "Jalan aja dulu",
    hobby: "menghapus data di android supaya bisa buka telegram, tapi tetep aja ketinggalan info, boleh ga infonya dibagi melalui email aja",
};

const { firstName, lastName, address, hobby } = newObject;
console.log(firstName, lastName, address, hobby);

// soal 4
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];

const combined = [...west, ...east];
console.log(combined);

// soal 5
const planet = "earth";
const view = "glass";
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam`;
console.log(before);
