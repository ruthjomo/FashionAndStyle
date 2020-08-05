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

                 