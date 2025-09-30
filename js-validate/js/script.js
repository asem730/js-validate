document.getElementById("reg").onsubmit = function () {
    let emin = document.getElementById("email").value;
    let emiR = /\w+@\w+.\w+/;
    let va = emiR.test(emin);

    if (document.querySelector("#name").value == "") {
        alert("يجب عليك إدخال الاسم");
        return false;
    }
    if (/^[A-Za-z]*\s{1}[A-Za-z]*$/s.test(document.querySelector("#name").value) === false) {
        alert("يجب عليك إدخال الاسم مع اللقب");
        return false;
    }
    if (document.querySelector("#pass").value.length < 3 || document.querySelector("#pass").value.length > 5) {
        alert("يجب عليك إدخال كلمة المرور ويجب ان تكون مابين 3-5 احرف");
        return false;
    }
    if (document.querySelector("#pass1").value.length == 0) {
        alert("يجب عليك إعادة كلمة المرور");
        return false;
    }
    if (document.querySelector("#pass1").value !== document.querySelector("#pass").value) {
        alert("إعادة كلمة المرور غير صحيحة");
        return false;
    }
    if (emin === "") {
        alert("يجب عليك إدخال البريد الالكتروني");
        return false;
    }
    if (va === false) {
        alert("يجب عليك إدخال البريد الالكتروني بشكل صحيح");
        return false;
    }
    if (document.getElementById("tel").value.length == 0 || isNaN(document.getElementById("tel").value)){
        alert("يجب عليك إدخال الرقم ويجب ان يكون بشكل صحيح");
        return false;
    }
    if (Register.user_gender[0].checked == false && Register.user_gender[1].checked == false) {
        alert("يجب عليك إختيار الجنس");
        return false;
    }
    if (document.querySelector("#country").selectedIndex == 0) {
        alert("يجب عليك إختيار الدولة");
        return false;
    }
    return true;
}
function theChecker() {
    if (document.Register.agree.checked == true)
        document.Register.ok.disabled = false;
    else
        document.Register.ok.disabled = true;
}