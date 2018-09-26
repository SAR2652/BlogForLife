$(document).ready(function () {
    //$("body > *:not(.container > *)").css("-webkit-filter", "blur(10px)");

    $("#submit_button").click(function () {
        var email = $("#email").val();
        var password = $("#password").val();

        //blank field check
        if(email == '' || password == '')
        {
            $('input[type="text"],input[type="password"]').css("border","2px solid red");
            $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
            alert("Please fill all fields...!!!!!!");
            return false;
        }

        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	    var regex = new RegExp(pattern, 'i');
	    if(regex.test(email) == false)
	    {
		    alert("Please enter a valid email");
		    return false;
        }

        alert("Successfully Logged in.....");
        return true;
    });

});