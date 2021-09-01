// soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

console.log(
    pertama.substr(0, 4) +
        pertama.substr(11, 8) +
        kedua.substr(0, 7) +
        kedua.substr(7, 11).toUpperCase()
);

// soal 2
        var kataPertama = "10";
        var kataKedua = "2";
        var kataKetiga = "4";
        var kataKeempat = "6";

        var bilanganPertama = Number(kataPertama);
        var bilanganKedua = Number(kataKedua);
        var bilanganKetiga = Number(kataKetiga);
        var bilanganKeempat = Number(kataKeempat);

        console.log(bilanganKedua*(bilanganPertama-bilanganKetiga+bilanganKeempat));

        // soal 3
        var kalimat = 'wah javascript itu keren sekali'; 

        var kataPertama = kalimat.substring(0, 3); 
        var kataKedua = kalimat.substring(3,14); 
        var kataKetiga = kalimat.substring(14,18);
        var kataKeempat = kalimat.substring(18,24);
        var kataKelima = kalimat.substring(24);

        console.log('Kata Pertama: ' + kataPertama); 
        console.log('Kata Kedua: ' + kataKedua); 
        console.log('Kata Ketiga: ' + kataKetiga); 
        console.log('Kata Keempat: ' + kataKeempat); 
        console.log('Kata Kelima: ' + kataKelima);