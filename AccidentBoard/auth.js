class auth {
    constructor() {
        this.init();
    }

    init() {
        //this.testAlert();
        this.logout();
    }

    testAlert() {
        alert('hello tes from class');
    }

    authValidation() {

    }

    sessionValidation() {

    }

    logout() {
        document.getElementById("auth-logout").addEventListener("click", (e) => {
            e.preventDefault();

            alert('click logout');
        });
    }

    redirectToLogin() {
        const loginUrl = 'http://127.0.0.1:5500/AccidentBoard/login.html';
        window.location.href = loginUrl;
    }
}

new auth();


/*
// validasi auth
const auth = localStorage.getItem("auth");
const authNumber = Number(auth);

// auth validation
if(authNumber === 1) {
    // session validation


}else{
    // redirect to login page
    const loginUrl = 'http://127.0.0.1:5500/AccidentBoard/login.html';
    window.location.href = loginUrl;
}
*/