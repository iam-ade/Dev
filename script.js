/*
Name: Oduneye Adekunle
300564856
*/
"use strict";

//global variable
const form = document.getElementById("form");
const fnameinput = document.getElementById("fnameinput");
const lnameinput = document.getElementById("lnameinput");
const addrinput = document.getElementById("addrinput");
const cityinput = document.getElementById("cityinput");
var pcodeinput = document.getElementById("pcodeinput");
const provinceinput = document.getElementById("provinceinput");
const ageinput = document.getElementById("ageinput");
const passwordinput = document.getElementById("passwordinput");
const passwordcheck = document.getElementById("passwordcheck");
const emailinput = document.getElementById("emailinput");
const small = document.getElementById("small");


//function
function checkInputs()
{
    var pass = true;
    var pcodeinputValue = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/.test(pcodeinput.value.toUpperCase());
    const fnameinputValue = fnameinput.value.trim();
    const lnameinputValue = lnameinput.value.trim();
    const addrinputValue = addrinput.value.trim();
    const cityinputValue = cityinput.value.trim();
    const provinceinputValue = provinceinput.value.trim();
    const ageinputValue = ageinput.value.trim();
    const passwordinputValue = passwordinput.value.trim();
    const passwordcheckValue = passwordcheck.value.trim();
    const emailinputValue = emailinput.value.trim();
    resetWarning();

    if(fnameinputValue === "")
    {
        document.getElementsByClassName("content")[0].innerHTML = "Please enter first name";
        pass = false;`  `
    }

    if(lnameinputValue === "")
    {
        document.getElementsByClassName("content")[1].innerHTML = "Please enter last name";
        pass = false;`  `
    }

    if(addrinputValue === "")
    {
        document.getElementsByClassName("content")[2].innerHTML = "Please enter address";
        pass = false;
    }

    if(cityinputValue === "")
    {
        document.getElementsByClassName("content")[3].innerHTML = "Please enter city";
        pass = false;
    }

    if(pcodeinput.value.toUpperCase() === "")
    {
        document.getElementsByClassName("content")[4].innerHTML = "Please enter correct postal code";
        pass = false;
    } else 
    {
        if(pcodeinputValue === false)
        {
            document.getElementsByClassName("content")[4].innerHTML = "Invalid postal code";
            pass = false;
        }
    }

    if(provinceinputValue === "")
    {
        document.getElementsByClassName("content")[5].innerHTML = "Please select province";
        pass = false;
    }

    if(ageinputValue === "")
    {
        document.getElementsByClassName("content")[6].innerHTML = "Age cannot be empty";
        pass = false;
    } else 
    {
        if(ageinputValue < 18)
        {
            document.getElementsByClassName("content")[6].innerHTML = "Not qualified";
            pass = false;
        }
    }

    if(passwordinputValue === "")
    {
        document.getElementsByClassName("content")[7].innerHTML = "Please enter password";
        pass = false;
    }else 
    {
        if(passwordinputValue.length < 6)
        {
            document.getElementsByClassName("content")[7].innerHTML = "Password must be at least 6 characters";
            pass = false;
        }
    }

    if(passwordcheckValue === "")
    {
        document.getElementsByClassName("content")[8].innerHTML = "Please Confirm password";
        pass = false;
    }else 
    {
        if(passwordinputValue != passwordcheckValue)
        {
            document.getElementsByClassName("content")[8].innerHTML = "Password must match";
            pass = false;
        }
    }

    if(emailinputValue === "")
    {
        document.getElementsByClassName("content")[9].innerHTML = "Please enter last name";
        pass = false;
    }else if(!isEmail(emailinputValue))
    {
        document.getElementsByClassName("content")[9].innerHTML = "Email is invalid";
        pass = false;
    }

    if(pass)
    {
        alert("You have successfully created an account with us. Welcome to the VIP club")
    }
}
//email regex
function isEmail(emailinput)
{
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(emailinput);
}
//clear input
function clearForm()
    {
        document.getElementById("form").reset();
        resetWarning();
    }
//error messages
 function resetWarning()
 {       
        for (var i = 0; i < 10; i++){
        document.getElementsByClassName('content')[i].innerHTML = '';}
 }

function createEventListener()
{
    var submitBtn = document.getElementById("submitBtn");
    if (submitBtn.addEventListener) {
        submitBtn.addEventListener("click", checkInputs, false);
    }
    else if (submitBtn.addEventListener) {
        submitBtn.addEventListener("onclick", checkInputs);
    }

    var clearBtn = document.getElementById("clearBtn");
    if (clearBtn.addEventListener) {
        clearBtn.addEventListener("click", clearForm, false);  
    }
    else if (clearBtn.addEventListener) {
        clearBtn.addEventListener("onclick", clearForm);
    }
}

function setUpPage() {
    createEventListener();
}
/*run setUpPage() function when page finishes loading*/
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}