function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log('Register End');
        }, 3000)
    })
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Email End');
            resolve();
        }, 3000)
    })
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Login End');
            resolve();
        }, 3000)
    })
}

register().then(sendEmail).catch(sendEmail);