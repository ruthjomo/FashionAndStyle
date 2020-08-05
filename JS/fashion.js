$(document).ready(function(){
    $("#move1").hover(function(){
        $("#move1").slideUp(3000);
        $("#move1").slideDown(3000);
    })
    $("#move2").hover(function(){
        $("#move2").slideUp(3000);
        $("#move2").slideDown(3000);
    })
    $("#blue").hover(function(){
        $("#blue").slideUp(3000);
        $("#blue").slideDown(3000);
    })
    $(".click").click(function(){
        $("#history").toggle();
        $("#click").toggle();
    })
    // $(".clicke").click(function(){
    //     $("#history").toggle();
    //     $("#image").toggle();
    // })
});