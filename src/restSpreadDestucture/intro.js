let sayi1 = 10;
sayi1 = "Mehmet Çabuk"
let student = {id: 1, name: "Mehmet Çabuk"};
//console.log(student);

function save1(ogrenci, puan= 10) { //type yok
    console.log(ogrenci.name + " " + puan)
}

function save2(puan= 10, ogrenci) { //type yok
    console.log(ogrenci.name + " " + puan)
}
//save1(student, 100);
//save2(undefined, student);

let students = ["Engin Demiroğ", "Halit Kalaycı", "Mehmet Çabuk"]
console.log(students)

let students2 = [student, {id: 2, name: "Ömer"}, "Engin Demiroğ", "Halit Kalaycı", "Mehmet Çabuk"]
console.log(students2)