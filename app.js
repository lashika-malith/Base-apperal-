
function checkMail(params) {

    const mail = document.getElementById("inp").value;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(mail);
    
    if (!re.test(mail)) {
        const   icon =   document.getElementById("error-icon");
        const   msg = document.getElementById("err-msg");
        icon.classList.remove('err')             
        msg.classList.remove('err')             
        event.preventDefault() ;   

     }else{
         window.location.reload()
     }
}
