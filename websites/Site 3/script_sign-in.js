function login_validate() {
    var usn = document.getElementById("usn").value;
    var pwd = document.getElementById("pwd").value;

    if (usn === "shubhendu" || pwd === "abc123") {
        return true;
    } else if (usn === "amitava" || pwd === "abc123") {
        return true;
    } else if (usn === "samad" || pwd === "abc123") {
        return true;
    } else if (usn === "saranya" || pwd === "abc123") {
        return true;
    } else if (usn === "ranjit" || pwd === "abc123") {
        return true;
    } else {
        document.getElementById("msg").innerHTML = "x Either Username or Password is Incorrect"
        return false;
    }
}

function register_validate() {
    console.log("Inside Register")

    var name = document.getElementById("_name").value;
    var mobile = document.getElementById("_mobile").value;
    var city = document.getElementById("_city").value;
    var passwd = document.getElementById("_pwd").value;
    var cpasswd = document.getElementById("_cpwd").value;

    // Name Validation
    if (name.length <= 3) {
        document.getElementById("msg1").innerHTML = "x name should be more than 3 letters"
        return false;
    } else if (name.length >= 15) {
        document.getElementById("msg1").innerHTML = "x name should be less than 15 letters"
        return false
    }

    //Mobile Validation using RegEx
    var exp = (/^[789]\d{9}$/);
    if (!(exp.test(mobile))) {
        document.getElementById("msg1").innerHTML = "x enter valid mobile number"
        return false;
    }

    if (passwd !== cpasswd) {
        document.getElementById("msg1").innerHTML = "x Password not matching";
        return false;
    }

    //City Validation
    if (city == "bangalore" || city == "bengaluru" || city == "delhi" || city == "kolkata" || city == "bhubaneswar" || city == "chennai" || city == "mumbai" || city == "jaipur") {
        return true;
    } else {
        document.getElementById("msg1").innerHTML = "* Sorry We are not available at your city"
        alert("We are Available at \n1. Bangalore\n2. Delhi\n3. Kolkata\n4. Bhubaneswar\n5. Chennai\n6. Mumbai\n7. Jaipur")
        return false;
    }
    var exp2 = (/^[A-Za-z]\w{7,14}$/);
    if (exp2.test(passwd)) {
        document.getElementById("msg1").style.backgroundColor = "green";
        document.getElementById("msg1").innerHTML = "Strong Password";
        return true;
    } else {
        document.getElementById("msg1").style.backgroundColor = "red";
        document.getElementById("msg1").innerHTML = "Weak Password";
        return false;
    }
}