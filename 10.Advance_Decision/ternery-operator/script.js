var a = 10
var hasil
if(a % 2 == 0) {
    hasil = 'genap'
} else {
    hasil = 'ganjil'
}
console.log(hasil)

var b = 10
var hasilTernery = b % 2 == 0 ? 'genap' : 'ganjil'
console.log(hasilternery);

//menggunakan ternery operator
var nilaiAkhirBootcamp = 80
var sertifikat = 
        nilaiAkhirBootcamp >= 100 ? 'Outstanding' :
        nilaiAkhirBootcamp >= 90 ? 'Excellent' :
        nilaiAkhirBootcamp >= 80 ? 'Good' :
        nilaiAkhirBootcamp >=  60 ? 'Not Bad' : 'Failed';
console.log(sertifikat);

//menggunkan if
var sertifikat
if(nilaiAkhirBootcamp >= 100) {
    sertifikat = 'Outstanding'
} else if(nilaiAkhirBootcamp >=90) {
    sertifikat = 'Excellent'
} else if(nilaiAkhirBootcamp >= 80){
    sertifikat = 'Good'
} else if( nilaiAkhirBootcamp >=60) {
    sertifikat = 'Not Bad'
} else {
    sertifikat = 'Failed' 
}
console.log(sertifikat);