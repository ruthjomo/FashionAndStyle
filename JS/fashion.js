$(documeent).ready(function(){
    $(".image1").hover(function(){
        $(".image2").slideUp();
        $(".image1").slideDown();
    })
});