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
// let isValue = false;
// console.log(isValue, 'hal')
// while (isValue == false) {
//     isValue = confirm('Anda Yakin?')
// }

//Ajax 
//fetch
//axios

// function getUsers() {
//     console.log("get users")
// }

// const getLogin = (user) => {
//     console.log(user)
//     // const { nama, usia } = user
//     // console.log(nama, 'halo')
//     // console.log(usia, 'halo')
// }

// const user = {
//     nama: 'Rizal',
//     usia: 20
// }


// getLogin('Rizal')


// getUsers()

// function satu() {
//     console.log('satu')
// }
// function dua() {
//     setTimeout(() => {
//         console.log('eksekusi dua')
//     }, 2000)
// }
// function tiga() {
//     console.log('eksekusi tiga')

// }

// satu()
// dua()
// tiga()

function login(username) {
    const token = [Math.random() * 12345678]
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (username == 'Rizal') {
                success({ username, token })
            } else {
                failed("Sorry wrong username")
            }
        }, 2000)
    })
    // setTimeout(() => {
    //     // return { token, username }
    //     callback({ token, username })
    // }, 2000)
}

function getUser(token, callback) {
    setTimeout(() => {
        if (token) callback({ access_token: "key" })
    }, 2000)
}

function getPictures(access_token, callback) {
    setTimeout(() => {
        const pictures = ['1.jpg', '2.jpg']
        if (access_token) callback(pictures)
    }, 2000)
}


//CALLBACK
// login('Rizal', function (response) {
//     getUser(response, function (response) {
//         getPictures(response, function (response) {
//             console.log(response, 'halo')
//         })

//     })
// })







// const access_token = getUser(token)
// console.log(access_token)

// function getPictures(access_token) {
//     setTimeout(() => {
//         const pictures = ['1.jpg', '2.jpg']
//         if (access_token) return pictures
//     }, 2000)
// }

// login('Rizal', function (response) {
//     console.log(response, 'dapet token , loading')

//     getUser(response.token, function (response) {
//         console.log(response, 'dapet accesstoken , loading')

//         console.log(response.access_token, 'halo')
//     })

// })
// const access_token = getUser(token)

// console.log(access_token, 'halo')


