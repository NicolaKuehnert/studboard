let is_logged_in = localStorage.getItem("is_logged_in");

/*
Why is document.body here null?
 */
function check_login() {
    console.log("Login");
    if (is_logged_in === "1"){
        console.log("off");
        let in_button = document.body.children[0].children[1];
        let out_button = document.body.children[0].children[2];
        in_button.style.display = "none";
        out_button.style.display = "block";
    }  else if (is_logged_in === "0") {
        console.log("on");
        let in_button = document.body.children[0].children[1];
        let out_button = document.body.children[0].children[2];
        in_button.style.display = "block";
        out_button.style.display = "none";
    }
}

function login() {
    is_logged_in = "1";
    localStorage.setItem("is_logged_in", is_logged_in);
}

function logout(){
    is_logged_in = "0";
    localStorage.setItem("is_logged_in", is_logged_in);


}