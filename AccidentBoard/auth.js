class auth {
    constructor() {
        this.init();
    }

    init() {
        //this.testAlert();
        this.authValidation();
        this.sessionValidation();
        this.timestamp();
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
        const activeSession = localStorage.getItem('session');

        // set looping per 1 minute
        setInterval(() => {
            const timestamp = Date.now();
            if(timestamp >= activeSession) {
                // redirect to login page
                this.redirectToLogin();
            } 
        }, 60 * 1000);
    }

    timestamp() {
        // set looping per 1 second
        setInterval(() => {
            const timestamp = Date.now();
            localStorage.setItem('timestamp', timestamp);
        }, 1000);
    }

    logout() {
        document.getElementById("auth-logout").addEventListener("click", (e) => {
            e.preventDefault();

            // redirect to login page
            this.redirectToLogin();
        });
    }

    redirectToLogin() {
        // clear auth session
        localStorage.setItem('auth', '');
        localStorage.setItem('session', '');
        localStorage.setItem('timestamp', '');

        const loginUrl = 'login.html';
        window.location.href = loginUrl;
    }
}

new auth();