// JavaScript Document
$(document).ready(function(){
    // creating the variables
    "use strict";
    var nextSlide = $("#slides img:first-child");
    var nextCaption;
    var nextSlideSource;
    
    // starting the slide show

    
    var runSlideShow = function(){
        $("#caption").fadeOut(2000);
        $("#slide").fadeOut(2000,
            function(){
            if(nextSlide.next().length === 0){
                nextSlide = $("#slides img:first-child");
            }
            else{
                nextSlide = nextSlide.next();
            }
            nextSlideSource = nextSlide.attr("src");
            nextCaption = nextSlide.attr("alt");
            $("#slide").attr("src", nextSlideSource).fadeIn(2000);
            $("#caption").text(nextCaption).fadeIn(2000); 
            }
       );
    };
            
 


    // start slide show
    var timer1 = setInterval(runSlideShow, 4000);

    // starting and stopping the slide show
    $("#slide").click(function(){
        if(timer1 !== null){
            clearInterval(timer1);
            timer1 = null;
        }
        else{
            timer1 = setInterval(runSlideShow, 3000);
        }
    });
    
});