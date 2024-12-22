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
    }
    else{
        alert("login gagal")
    }
})