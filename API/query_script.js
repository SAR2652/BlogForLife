$(document).ready(function() {
    
    $("#hides").click(function() {
        $("#hidden-text").hide();
    });

    $("#table-hider").on("click", function() {
        $("tr:odd").hide();
    });

    $(".change_bg_colors").on({
        
        mouseenter: function() {
            $(this).css("background-color", "lightgray");
        },

        mouseleave: function() {
            $(this).css("background-color", "lightblue");
        },

        click: function() {
            $(this).css("background-color", "yellow");
        } 
    });

    $("#flip").click(function() {
        var flip = 1;
        var content = document.getElementById("flip");
        if(flip == 1)
        {
            content.innerHTML = "Click to slide down the panel";
            $("#panel").slideUp("slow");
            flip--;
        }
        else
        {
            $("#panel").slideDown("fast");
            content.innerHTML = "Click to slide up the panel";
            flip++;
        }
    });

    $("#btn1").click(function() {
        $(".append").append(" <b>Appended text</b>.");
    });

    $("#btn2").click(function() {
        $("ol").append("<li>Appended item</li>");
    });

    $("#btn3").click(function() {
        $(".animated-object").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });
});