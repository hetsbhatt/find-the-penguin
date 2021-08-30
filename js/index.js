$(document).ready(function () {

    //    var name = prompt("Who's playing?");
    //    $("#player_name").text(name);

    var randompenguins = $("#shuffle > div").remove().toArray();
    for (var i = randompenguins.length - 1; i >= 1; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp1 = randompenguins[i];
        var temp2 = randompenguins[j];
        randompenguins[i] = temp2;
        randompenguins[j] = temp1;
    }
    $("#shuffle").append(randompenguins);

    var score = 0;

    $("#penguin1").click(function () {
        $(this).css("background-image", "url('images/penguin_1.png')");
        score = score + 100;
        $("#score_number").text(score);
        $("#penguin1").off('click');
        checkscore();
    });

    $("#penguin2").click(function () {
        $(this).css("background-image", "url('images/penguin_2.png')");
        score = score + 100;
        $("#score_number").text(score);
        $("#penguin2").off('click');
        checkscore();
    });

    $("#penguin3").click(function () {
        $(this).css("background-image", "url('images/penguin_3.png')");
        score = score + 100;
        $("#score_number").text(score);
        $("#penguin3").off('click');
        checkscore();

    });

    $("#penguin4").click(function () {
        $(this).css("background-image", "url('images/penguin_4.png')");
        score = score + 100;
        $("#score_number").text(score);
        $("#penguin4").off('click');
        checkscore();
    });

    $("#penguin5").click(function () {
        $(this).css("background-image", "url('images/penguin_5.png')");
        score = score + 100;
        $("#score_number").text(score);
        $("#penguin5").off('click');
        checkscore();
    });

    $("#penguin6").click(function () {
        $(this).css("background-image", "url('images/penguin_6.png')");
        score = score + 100;
        $("#score_number").text(score);
        $("#penguin6").off('click');
        checkscore();
    });

    $("#penguin7").click(function () {
        $(this).css("background-image", "url('images/penguin_7.png')");
        score = score + 100;
        $("#score_number").text(score);
        $("#penguin7").off('click');
        checkscore();
    });

    $("#penguin8").click(function () {
        $(this).css("background-image", "url('images/penguin_8.png')");
        score = score + 100;
        $("#score_number").text(score);
        $("#penguin8").off('click');
        checkscore();
    });
    
//     $("#penguin8").click(function () {
//         $(this).css("background-image", "url('images/penguin_8.png')");
//         score = score + 100;
//         $("#score_number").text(score);
//         $("#penguin8").off('click');
//         checkscore();
//     });
    
//     $("#penguin8").click(function () {
//         $(this).css("background-image", "url('images/penguin_8.png')");
//         score = score + 100;
//         $("#score_number").text(score);
//         $("#penguin8").off('click');
//         checkscore();
//     });
    
    

    //This code will run after your page loads

    $("#yeti").click(function () {
        alert("Yaaaarrrr!");
        location.reload();
        score = 0;
    });

    function checkscore() {
        if ($("#score_number").text() == "800") {
            alert("You Win!");
            score = 0;
            location.reload();
        }
    };

});
