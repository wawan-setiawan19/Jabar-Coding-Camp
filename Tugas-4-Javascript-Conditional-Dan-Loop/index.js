// soal 1
var nilai = 78;

if (nilai >= 85) {
    console.log("indeksnya A");
} else if (nilai >= 75 && nilai < 85) {
    console.log("indeksnya B");
} else if (nilai >= 65 && nilai < 75) {
    console.log("indeksnya C");
} else if (nilai >= 55 && nilai < 65) {
    console.log("indeksnya D");
} else {
    console.log("indeksnya E");
}

// soal 2
var tanggal = 19;
var bulan = 9;
var tahun = 1999;

switch (bulan) {
    case 1:
        var namaBulan = "Januari";
        break;
    case 2:
        var namaBulan = "Februari";
        break;
    case 3:
        var namaBulan = "Maret";
        break;
    case 4:
        var namaBulan = "April";
        break;
    case 5:
        var namaBulan = "Mei";
        break;
    case 6:
        var namaBulan = "Juni";
        break;
    case 7:
        var namaBulan = "Juli";
        break;
    case 8:
        var namaBulan = "Agustus";
        break;
    case 9:
        var namaBulan = "September";
        break;
    case 10:
        var namaBulan = "Oktober";
        break;
    case 11:
        var namaBulan = "November";
        break;
    case 12:
        var namaBulan = "Desember";
        break;
    default:
        break;
}

console.log(tanggal + " " + namaBulan + " " + tahun);

// soal 3
var n = 5;
var pagar = "";
for (var i = 0; i < n; i++) {
    for (let j = n; j <= n; j++) {
        pagar += "#";
    }
    console.log(pagar);
}

// soal 4
var iterasi = 1;
var m = 10;

while (iterasi <= m) {
    switch (iterasi % 3) {
        case 0:
            var skill = "Vue JS";
            break;
        case 1:
            var skill = "programming";
            break;
        case 2:
            var skill = "Javacript";
            break;
        default:
            break;
    }
    console.log(iterasi + " - I love " + skill);
    if (iterasi % 3 == 0) {
        var simbol = "";
        for (let index = 0; index < iterasi; index++) {
            simbol += "=";
        }
        console.log(simbol);
    }
    iterasi++;
}
