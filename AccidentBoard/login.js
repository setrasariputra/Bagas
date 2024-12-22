document.getElementById("login-form").addEventListener("submit",(e)=>{
    e.preventDefault();

    const userlogin = document.getElementById("userlogin").value;
    const userpass = document.getElementById("userpass").value;
    const userPassString=userpass.toString();

    // encrypt credential
    const rawCredential = userlogin+userPassString;
    const base64Encryption = btoa(rawCredential); // model base64 encryption
    
    if(base64Encryption === 'c2FmZXR5MDAwMDAw') {
        alert("login berhasil")
        // redirect ke dashboard
        const dashbordUrl = 'http://127.0.0.1:5500/AccidentBoard/dashboard.html';
        window.location.href = dashbordUrl;

        // save to localStorage
        const auth = 1;
        localStorage.setItem("auth", auth);
    }
    else{
        alert("login gagal")
    }
});