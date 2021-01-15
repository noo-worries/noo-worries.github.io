let passSave = "admin";
let userSave = "admin";

function checkPass() {

    let userName = document.forms["formName"]["username"].value;
    let passWord = document.forms["formName"]["password"].value;
    
    
		if (userName != userSave) {
            document.getElementById("userStatus").innerHTML = "Wrong username";
            return false;
            
        } if (passWord != passSave) {
            document.getElementById("passStatus").innerHTML = "Wrong password";
            return false;
            
        } else {
            return true;
        }
}
