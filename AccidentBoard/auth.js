class auth {
    constructor() {
        this.init();
    }

    init() {
        //this.testAlert();
        this.authValidation();
        this.logout();
    }

    testAlert() {
        alert('hello tes from class');
    }

    authValidation() {
        // get auth value
        const auth = localStorage.getItem("auth");
        const authNumber = Number(auth);

        if(!auth || authNumber !== 1) {
            // redirect to login page
            this.redirectToLogin();
        }
    }

    sessionValidation() {

    }

    logout() {
        document.getElementById("auth-logout").addEventListener("click", (e) => {
            e.preventDefault();

            // clear auth session
            localStorage.setItem('auth', '');
            localStorage.setItem('session', '');

            // redirect to login page
            this.redirectToLogin();
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