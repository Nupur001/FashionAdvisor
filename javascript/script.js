//This is for validation
function validateEmail(mail) {
    var pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    return pattern.test(mail);
}
function validateName(name) {
    var pattern = new RegExp("^([A-Za-z ]+)$");
    return pattern.test(name);
}
function validatePhone(phone) {
    var pattern = new RegExp("^([0-9]{10})$");
    return pattern.test(phone);
}
function validateForm() {
    var mail = document.forms["myform"]["email"].value;
    var name = document.forms["myform"]["name"].value;
    var phone = document.forms["myform"]["phone"].value;
    if (!validateName(name)) {
        alert("Kindly enter valid name");
        return false;
    }
    if (!validatePhone(phone)) {
        alert("Kindly enter valid phone number");
        return false;
    }
    if (!validateEmail(mail)) {
        alert("Kindly enter valid email");
        return false;
    }
    alert("Registered Successfully!");
    return true;
}
//Change number of slides shown in different sizes of screen
var isScreenSmall = window.matchMedia("(max-width: 700px)");
function resizeSlider(isScreenSmall) {
    if (isScreenSmall.matches) {
        //if screen is small show only 4 slides at a time
        $(document).ready(function () {
            $('.brand-bar').slick({

                slidesToShow: 4,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 1000,
            });
        });
    } else {
        //if screen is small show 8 slides at a time
        $(document).ready(function () {
            $('.brand-bar').slick({

                slidesToShow: 8,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 1000,
            });
        });
    }
}
resizeSlider(isScreenSmall);// Call listener function at run time
isScreenSmall.addListener(resizeSlider); // Attach listener function on state changes