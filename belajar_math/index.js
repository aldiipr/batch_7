const absNum = Math.abs(-100)
const exp = 2 ** 3
const expNum = Math.pow(2, 4)
const squareRoot = Math.sqrt(20)

const akarPangkatDua = Math.pow(25, 1 / 2)

const maxBil = Math.max(100, 1, 2, 3, 4, -1, 10)
const minBil = Math.min(100, 1, 2, 3, 4, -1, 10)

const mathFloor = Math.floor(5.9)
const mathCeil = Math.ceil(5.1)
const mathRound = Math.round(5.4)
const randomNum = Math.random()



// console.log(mathFloor, 'halo')
// console.log(mathCeil, 'halo')
// console.log(mathRound, 'halo')
// console.log(Math.round(randomNum * 100), 'halo')

const max = 23;
const min = 20;

const random = Math.round(Math.random() * (max - min) + min)
// console.log(random)

var randomNum1 = Math.round(Math.random() * (23 - 20) + 20);
var randomNum1 = Math.floor(Math.random() * (23 - 20) + 20);


// console.log(randomNum1)




// console.log(absNum, 'abs')
// console.log(exp, 'abs')
// console.log(expNum, 'abs')
// console.log(squareRoot, 'abs')
// console.log(akarPangkatDua, 'akar pangkat 3 ')
// console.log(maxBil, 'max ')
// console.log(minBil, 'min ')

const variable1 = "Belajar"
const variable2 = "Javascript"


const getVar = variable1.slice(2)
const getVar1 = variable1.substring(2)

// console.log(getVar1, 'halo')

//B E L A J A R
//0 1 2 3 4 5 6
// const panjang = variable1.length
// console.log(variable1[7])
// console.log(panjang)
// console.log(variable2[variable2.length - 1])
// const gabungVariabel = variable1.concat(" ")
// const gabungVariabel2 = variable1 + " " + variable2
// const gabungVariabel3 = `${variable1} ${variable2}`
// const perulanganString = variable1.repeat(5)
const replaceString = variable2.replace('a', 'o')

//startindex, endindex
const slice = variable1.slice(1, 3)

const lowerCase = variable1.toLocaleLowerCase()
const upperCase = variable1.toUpperCase()


const convertVariabel = variable1.trim()
// console.log(convertVariabel.length)
// console.log(variable1.length)

// const mobil = {
//     merk: "Honda",
//     warna: "Merah",
//     tipe: "Jazz",
//     "seri-number": 123
// }
// const merkMobil = mobil.mobil
// const { merk } = mobil



// const listMobil = [{
//     merk: "Honda",
//     warna: "Merah",
//     tipe: "Jazz",
//     "seri-number": 123
// }, {
//     merk: "Toyota",
//     warna: "Putih",
//     tipe: "Avanza",
//     "seri-number": 345
// }]



// console.log(listMobil[1].tipe, 'halo')
// console.log(listMobil[2]['tipe'], 'halo')

// const loopMobil = listMobil.map((item) => {
//     console.log(item.warna, 'halo')
// })






// console.log(mobil["seri-number"])
// console.log(mobil.merk)
// console.log(Object.keys(mobil))

// Object.keys(mobil).map((item) => {
//     console.log(item + ":" + mobil[item])
// })





// console.log(gabungVariabel3)

// let mahasiswa = [
//     {
//         nama: 'John Doe',
//         nim: '12345',
//         jurusan: 'Informatika'
//     },
//     {
//         nama: 'Jane Smith',
//         nim: '54321',
//         jurusan: 'Manajemen'
//     },
//     {
//         nama: 'David Johnson',
//         nim: '98765',
//         jurusan: 'Akuntansi'
//     }
// ];

// const elementMahasiswaList = document.querySelector("#mahasiswa-list");

// mahasiswa.forEach(function (item) {
//     let listItem = document.createElement('li')
//     listItem.textContent = `Nama: ${item.nama}`

//     elementMahasiswaList.appendChild(listItem)
// })


// const buah = ["apple", "jeruk", "nanas"]

// const angka = [1, 2, 3]

// buah.push('semangka')
// const removedElement = buah.shift()

// const findBuah = buah.indexOf("semangka")
// const stringBuah = buah.join(', ')

// const newMap = buah.map((item) => {
//     return item
// })


// const angkaExp = angka.map((item) => {
//     return item * 2
// })
// const angkaExp2 = []

// buah.forEach((item) => {
//     angkaExp2.push(item * 2)
// })

// console.log(angkaExp, 'halo')


// console.log(stringBuah)
const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni"]
const Listday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// 0,1,2,3,4,5

// const date = new Date("December 20 2022");

// const tahun = date.getFullYear()
// const month = date.getMonth()
// console.log(month)
// const con_month = bulan[month]
// const day = date.getDay()
// const con_day = Listday[day]
// const dateDay = date.getDate()
// const hours = date.getHours()
// const minutes = date.getMinutes()
// const seconds = date.getSeconds()

// //YYYY-MM-DD hh:mm
// const dateFormat = `${tahun}-${converNum(month + 1)}-${dateDay} ${hours}:${minutes}`

// console.log(dateFormat)

function converNum(num) {
    if (num < 10) {
        return '0' + num
    } else {
        return num
    }
}

const dateElement = document.getElementById('date')

// setInterval(() => {
//     const date = new Date();

//     const tahun = date.getFullYear()
//     const month = date.getMonth()
//     console.log(month)
//     const con_month = bulan[month]
//     const day = date.getDay()
//     const con_day = Listday[day]
//     const dateDay = date.getDate()
//     const hours = date.getHours()
//     const minutes = date.getMinutes()
//     const seconds = date.getSeconds()

//     const dateFormat = `${tahun}-${converNum(month + 1)}-${converNum(dateDay)} ${converNum(hours)}:${converNum(minutes)}:${converNum(seconds)}`
//     // if (seconds == 50) {
//     //     alert("Udah detik ke 50")
//     // }
//     dateElement.textContent = dateFormat
//     // console.log('halo')
// }, 2000)

setTimeout(() => {
    console.log('halo')
}, 2000)

const date = new Date("August 20 2022 12:00").toLocaleString();
// const dateFormat = new Date(2010, 12, 12).toLocaleString();




// function convertNumber(num) {
//     if (num < 10) {
//         return '0' + num
//     } else {
//         return num
//     }
// }


// console.log(date)
// console.log(tahun)
// console.log(month)
// console.log(con_month)
// console.log(day)
// console.log(con_day)
// console.log(dateDay)
// console.log(hours)
// console.log(minutes)
// console.log(seconds)

// let username = 'admin12'
// let isVerify = true;

// if (username === 'admin' && isVerify) {
//     alert('anda berhasil login')
// } else {
//     if (isVerify == false) {
//         alert('anda berlum verifikasi')

//     } else {
//         alert('Username Salah')
//     }
// }

// if (num > 0) {
//     if (num == 10) {
//         console.log('nilai 10')
//     }
// } else if (num < 0) {
//     console.log('number negative')
// } else {
//     console.log('nilai 0')
// }


// const grade = prompt('Masukan Nilai Siswa?');
// const nilaiElm = document.getElementById('nilai');

// if (grade >= 90 && grade <= 100) {
//     nilaiElm.textContent = 'A'
// } else if (grade >= 80 && grade < 90) {
//     nilaiElm.textContent = 'B'
// } else if (grade >= 70 && grade < 80) {
//     nilaiElm.textContent = 'C'
// } else if (grade >= 60 && grade < 70) {
//     nilaiElm.textContent = 'D'
// } else if (grade < 60 && grade >= 0) {
//     nilaiElm.textContent = 'E'
// } else {
//     nilaiElm.textContent = 'Tidak Valid'
// }
// console.log(grade)
const user = {
    username: 'admin',
    password: 'admin123'
}

const usernameElm = document.getElementById('username')
const passwordElm = document.getElementById('password')
const usiaElm = document.getElementById('usia')
const locationElm = document.getElementById('location')

const btn_loginElm = document.getElementById('btn_submit')

btn_loginElm.addEventListener('click', function () {
    if ((usernameElm.value.length > 0 && passwordElm.value.length > 0) && (usiaElm.value.length > 0 || locationElm.value.length > 0)) {
        if (usernameElm.value == user.username && passwordElm.value == user.password) {
            alert('Anda Berhasil Login')
        } else {
            alert('Username & Password Salah')

        }
    } else {
        alert('Form harus diisi')
    }
})



















