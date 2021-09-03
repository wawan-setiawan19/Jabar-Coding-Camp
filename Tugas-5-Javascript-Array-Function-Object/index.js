// soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

var hewanUrut = daftarHewan.sort();

for (let index = 0; index < hewanUrut.length; index++) {
    console.log(hewanUrut[index]);
}

// soal 2
function introduce(data) {
    var string =
        "Nama saya " +
        data.name +
        ", umur saya " +
        data.age +
        " tahun, alamat saya di " +
        data.address +
        ", dan saya punya hobby yaitu " +
        data.hobby;
    return string;
}

var data = { name: "Wawan Setiawan", age: 21, address: "Jalan Kenangan", hobby: "Ngoding" };

var perkenalan = introduce(data);
console.log(perkenalan);

// soal 3
function hitung_huruf_vokal(nama) {
    var vokal = 0;
    for (let i = 0; i < nama.length; i++) {
        if (
            nama[i] === "a" ||
            nama[i] === "i" ||
            nama[i] === "u" ||
            nama[i] === "e" ||
            nama[i] === "o" ||
            nama[i] === "A" ||
            nama[i] === "I" ||
            nama[i] === "U" ||
            nama[i] === "E" ||
            nama[i] === "O"
        ) {
            vokal++;
        }
    }
    return vokal;
}

var hitung_1 = hitung_huruf_vokal("Muhammad");
var hitung_2 = hitung_huruf_vokal("Iqbal");

console.log(hitung_1, hitung_2);

// soal 4
function hitung(angka) {
    return (angka - 1) * 2;
}

console.log(hitung(0));
console.log(hitung(1));
console.log(hitung(2));
console.log(hitung(3));
console.log(hitung(5));
