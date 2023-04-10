function greeting(name) {
    console.log (`hello` , name)
}

const nama = greeting(`Mida`)
console.log(nama)

function lulus(
    nilaiIPA, nilaiIPS,
    nilaiMatematika, nilaiBahasa
){
    const lulusKedokteran = nilaiIPA > 70 &&
        nilaiIPS > 70 && nilaiMatematika > 70 &&
        nilaiBahasa > 70;
    console.log('lulus kedokteran', lulusKedokteran)
}

lulusKedokteran(80, 70, 90, 85);

lulusKedokteran(90, 90, 90, 90)

function lulusInformatika(
    nilaiIPA,
    nilaiMatematika, nilaiBahasa
){
    const lulusInformatika = nilaiIPA > 70 &&
        nilaiMatematika > 70 &&
        nilaiBahasa > 70;
    console.log('lulus Informatika', lulusInformatika)
}
lulusInformatika(80, 90, 85);

lulusInformatika(90, 90, 90);
