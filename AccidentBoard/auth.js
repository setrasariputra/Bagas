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