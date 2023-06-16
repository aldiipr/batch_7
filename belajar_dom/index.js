const titleElement = document.getElementsByClassName('title');
const titleElementId = document.getElementById('title');

const listElement = document.getElementById('list-olahraga');
const liElement = document.getElementsByTagName('li');

const titleElementQuery = document.querySelector('.title'); //manggilclass
const listElementQuery = document.querySelector('#list-olahraga');
const liElementQuery = document.querySelectorAll('li');
const titleIntiQuery = document.querySelector('.title_inti');

// const titleElementQueryall = document.querySelectorAll('.title') //manggilclass

// titleElementQuery.innerHTML = "Ini sebuah Title"

function onClickButton() {
    titleElementQuery.innerHTML = "Ini sebuah Title"
    titleElementQuery.style.backgroundColor = 'red'
    titleElementQuery.style = "background-color:red;color:white"
}

function onBackTitle() {
    titleElementQuery.innerHTML = "<div class='title_inti'>List Olahraga</div><div class='subtitle' style='font-size: small'>Kumpulan Olahraga</div>"
    titleElementQuery.style = "background-color:white;color:black"
}

// console.log(titleElementQuery)
// console.log(titleElementQuery)

// console.log(titleElementQuery)
// console.log(listElementQuery)


// console.log(titleElementId)

// titleElementQuery.innerHTML = "<b>Title</b> Olahraga"

const btnUbahJudul = document.querySelector('#btn_ubah_judul')
btnUbahJudul.addEventListener('click', function () {
    onClickButton()
})
// console.log(btnUbahJudul)

// const token = "ABACSHJAS";

// var firstName = "Messi"
// var full_name = "Messi"

// let pemain-lama = "Ronaldo"

// let title = "Kumpulan Olahraga";
// titleIntiQuery.innerHTML = title
const x = 10;
const y = 3;

const tambahResult = x + y;
const penguranganResult = x - y;
const perkalianResult = x * y;
const bagiResult = x / y;
const module = x % y;
const pangkat = x ** y;

const a = 5;
const b = '5';
const c = false;


let samaDengan = a == b;
let tidakSamaDengan = a != b
let lebihBesar = a > b;
let lebihKecil = a < b;
let lebihBesarSamaDengan = a >= b;
let lebihKecilSamaDengan = a <= b;


const d = true;
const e = false

console.log(d && e) //false ,dua dua harus true
console.log(d || e)//true,salah satu harus true
console.log(!d) //kecuali d

if (d || e) {
    console.log('hasil true')
}

const result = 10 + 5 * 2;
console.log(result, 'halo')

const resultHasil = (10 + 5) * 2;
console.log(resultHasil, 'halo')

if (0) {
    console.log('halo')
}

const isNight = true;
const time = false

const textMessage = isNight ? "Selamat Malam" : time ? "Selamat Pagi" : "Selamat Siang";

console.log(textMessage, 'halo')

let nama = "Messi"
let usia = "20"
let usia2 = 30;
let nilai = "90.5"


const hasil = parseInt(usia) + usia2

console.log(hasil)
console.log(parseFloat(nilai))
console.log(parseInt(nilai))

console.log(Number(nilai))
console.log(Number(usia))

const benar = true;
const convertBool = benar ? 1 : 0

console.log(!1, 'halo')







let person = {
    nama: "Messi",
    usia: 20,
    nilai: 90.5
}

let persons = [{
    nama: "Messi",
    usia: 20,
    nilai: 90.5
}, {
    nama: "Ronaldo",
    usia: 20,
    nilai: 90.5
}]















