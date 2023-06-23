function login(username) {
    const token = [Math.random() * 12345678]
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (username == 'Rizal') {
                success({ username })
            } else {
                failed("Sorry wrong username")
            }
        }, 2000)
    })

}

function getUser(token) {
    return new Promise((success, faile) => {
        setTimeout(() => {
            if (token) success({ access_token: "key" })
        }, 2000)
    })
}

function getPictures(access_token, callback) {
    setTimeout(() => {
        const pictures = ['1.jpg', '2.jpg']
        if (access_token) callback(pictures)
    }, 2000)
}

//ASYNC AWAIT

async function displayUser() {
    const response = await login("Rizal")
    const accessToken = await getUser(response?.token)

    if (response.token) {
        const accessToken = await getUser(response.token)
    }
    console.log(accessToken, 'halo')
}

displayUser()

