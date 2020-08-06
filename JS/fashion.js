$(document).ready(function(){
        $("#move2").hover(function(){
        $("#move2").slideUp(3000);
        $("#move2").slideDown(3000);
    })
    $("#blue").hover(function(){
        $("#blue").slideUp(3000);
        $("#blue").slideDown(3000);
    })
    $("#topmen").hover(function(){
        $("#topmen").slideUp(3000);
        $("#topmen").slideDown(3000);
    })
});
$(document).ready(function(){
    $(".pic1").click(function(){
        $("#pic1-p").toggle(3000);
        $("#pic1").toggle(3000);
    })
    $(".pic2").click(function(){
        $("#pic2-p").toggle(3000);
        $("#pic2").toggle(3000);
    })
    $(".pic3").click(function(){
        $("#pic3-p").toggle(3000);
        $("#pic3").toggle(3000);
    })
    $(".pic4").click(function(){
        $("#pic4-p").toggle(3000);
        $("#pic4").toggle(3000);
    })
    $(".pic5").click(function(){
        $("#pic5-p").toggle(3000);
        $("#pic5").toggle(3000);
    })
    $(".pic6").click(function(){
        $("#pic6-p").toggle(3000);
        $("#pic6").toggle(3000);
    })
    $(".pic7").click(function(){
        $("#pic7-p").toggle(3000);
        $("#pic7").toggle(3000);
    })
    $(".pic8").click(function(){
        $("#pic8-p").toggle(3000);
        $("#pic8").toggle(3000);
    })
    $(".pic9").click(function(){
        $("#pic9-p").toggle(3000);
        $("#pic9").toggle(3000);
    })
    $(".pic10").click(function(){
        $("#pic10-p").toggle(3000);
        $("#pic10").toggle(3000);
    })
    $(".pic11").click(function(){
        $("#pic11-p").toggle(3000);
        $("#pic11").toggle(3000);
    })
    $(".pic12").click(function(){
        $("#pic12-p").toggle(3000);
        $("#pic12").toggle(3000);
    })

});

var slideIndex = 0;
showSlides();

function showSlides() {
var i;
var slides = document.getElementsByClassName("slides");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 2000); 
}
$(document).ready(function(){
    $(".twenties").click(function(){
        $("#slide1-p").toggle(3000);
        $("#slide1").toggle(3000);
        
        
    })
    $(".slide").click(function(){
        $("#slide2-p").toggle(3000);
        $("#slide2").toggle(3000);
    })
    $(".slider").click(function(){
        $("#slide3-p").toggle(3000);
        $("#slide3").toggle(3000);
    })
    $(".men1").click(function(){
        $("#men1-p").toggle(3000);
        $("#men1").toggle(3000);
    })
    $(".men2").click(function(){
        $("#men2-p").toggle(3000);
        $("#men2").toggle(3000);
    })
    $(".men3").click(function(){
        $("#men3-p").toggle(3000);
        $("#men3").toggle(3000);
    })
    $(".kid1").click(function(){
        $("#kid1-p").toggle(3000);
        $("#kid1").toggle(3000);
    })
    $(".kid2").click(function(){
        $("#kid2-p").toggle(3000);
        $("#kid2").toggle(3000);
    })
    $(".kid3").click(function(){
        $("#kid3-p").toggle(3000);
        $("#kid3").toggle(3000);
    })
});             