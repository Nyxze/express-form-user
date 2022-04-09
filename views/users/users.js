$(document).ready(function () {


    // cache references to input controls
    var password = $('#password');
    var confirmPassword = $('#confirm-password');
    var email = $('#email');
    var confirmEmail = $('#confirm-email');

    function checkPasswordMatch() {
        var password = $("#txtNewPassword").val();
        var confirmPassword = $("#txtConfirmPassword").val();
        if (password != confirmPassword)
            $("#CheckPasswordMatch").html("Passwords does not match!");
        else
            $("#CheckPasswordMatch").html("Passwords match.");
    }
})