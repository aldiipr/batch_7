// alert('hello')

// const nilai = 2

// switch (nilai) {
//     case 1: //===
//         console.log('Angka 1')
//     case 2:
//         console.log('Angka 1 atau 2')
//         break;
//     default:
//         console.log('Angka bukan 1 dan 2')
//         break;
// }

// const nilai = prompt('Masukan nilai?')
// const isLogin = false

// function checkUser() {
//     if (isLogin) {
//         alert('Nilai anda A')
//     } else {
//         alert('Anda Belum Login')
//     }
// }

// switch (true) {
//     case nilai >= 90 && nilai <= 100:
//         checkUser()
//         break;
//     case nilai >= 80:
//         alert('Nilai anda B')
//         break;
//     case nilai >= 70:
//         alert('Nilai anda C')
//         break;
//     case nilai >= 60:
//         alert('Nilai anda C')
//         break;
//     default:
//         alert('Anda Tidak Lulus')
//         break;
// }

// document.write('Ini Buah Apel <br/>')
// document.write('Ini Buah Semangka <br/>')
// document.write('Ini Buah Jeruk <br/>')
// document.write('Ini Buah Salak')




const buah = ['Semangka', 'Apel', 'Jeruk', 'Salak']

// const user = {
//     nama: 'Rizal',
//     usia: 20,
//     hobby: 'Futsal'
// }

const users = [
    {
        nama: 'Bima',
        usia: 20,
        hobby: 'Futsal',
        'full name': 'Rizal Prasetya',
        isLogin: true
    },
    {
        nama: 'Ana',
        usia: 21,
        hobby: 'Main',
        'full name': 'Rizal Prasetya'

    },
    {
        nama: 'Rizal',
        usia: 10,
        hobby: 'Main',
        'full name': 'Rizal Prasetya'

    }
    ,
    {
        nama: 'Adam',
        usia: 14,
        hobby: 'Main',
        'full name': 'Rizal Prasetya'

    }
]

const sortUsert = users.sort(function (a, b) {
    console.log(a, 'a')
    console.log(b, 'b')

    let nameA = a.nama.toUpperCase();
    let nameB = b.nama.toUpperCase();

    if (nameA < nameB) {
        return -1;
    }

    if (nameA > nameB) {
        return 1;
    }


    return 0
})

console.log(sortUsert)


// for (let a = 0; a < buah.length; a++) {
//     document.write("Ini Buah " + buah[a])
// }

// for (let k in user) {
//     console.log(k, 'key')
//     console.log(`${k}:${user[k]}`, 'key')
// }
// const randomArray = [3, 18, 10, 26]

// console.log(buah.sort())

// //asc
// console.log(randomArray.sort(
//     function (a, b) {
//         return a - b
//     }
// ))

//desc
// console.log(randomArray.sort(
//     function (a, b) {
//         return b - a
//     }
// ))


// for (let user of users) {
//     console.log(user, 'halo')
// }

// users.map(function (user) {
//     console.log(user)
// })

// const userBelumLogin = users.map(function (user) {
//     return user.usia
// })
// console.log(users, 'fulluser')

// console.log(userBelumLogin, 'manipulasi user')


// console.log(buah.length)
