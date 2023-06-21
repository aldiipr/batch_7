alert('hello')

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