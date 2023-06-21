const usernameElm = document.getElementById('username')
const passwordElm = document.getElementById('password')
const usiaElm = document.getElementById('usia')
const locationElm = document.getElementById('location')

const btn_loginElm = document.getElementById('btn_submit')

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=])[a-zA-Z!@#$%^&*()_+-=]{8,50}$/;



btn_loginElm.addEventListener('click', function () {


    console.log(regex.test(usernameElm.value))

    // console.log(usernameElm.value.trim() === "", 'username')
    // console.log(passwordElm.value, 'username')
    // console.log(usiaElm.value, 'username')



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