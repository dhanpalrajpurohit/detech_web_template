function validation(){
    var fname = document.forms["contactform"]["fullname"].value;
    var email = document.forms["contactform"]["email_txtbox"].value;
    var contact = document.forms["contactform"]["contactnumber_txtbox"].value;
    var message = document.forms["contactform"]["message_txtbox"].value;
   
    if (fname == "") {
        document.getElementById('fnameValid').innerHTML = "Enter Full Name";
        return false;
    }
    else if (email == "") {
        document.getElementById('emailValid').innerHTML = "Enter Email";
        return false;
    }
    else if (contact == "") {
        document.getElementById('contactValid').innerHTML = "Enter Contact";
        return false;
    }
    else if (message == "") {
        document.getElementById('messageValid').innerHTML = "Enter Message";
        return false;
    }
    else{
        return true;
    }
     
}