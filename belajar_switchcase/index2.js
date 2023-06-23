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

}

function getUser(token) {
    return new Promise((succ, fail) => {
        setTimeout(() => {
            if (token) {
                succ({ access_token: "key" })
            } else {
                fail("Sorry token not valid")
            }
        }, 2000)
    })

}

function getPictures(access_token, callback) {
    setTimeout(() => {
        const pictures = ['1.jpg', '2.jpg']
        if (access_token) callback(pictures)
    }, 2000)
}

login('Rizal').then(function (response) {
    getUser(response).then(function (res) {
        console.log(res)
    })
}).catch(err => {
    console.log(err)
})

