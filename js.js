var score = 0

$(".robot").click(function(){
    $(".robot").css({"box-shadow": "yellow 0px 0px 4px 4px"})
    score++
    ds()
    $(".robot").attr('disabled','disabled');
 });

 $(".cyborg").click(function(){
    $(".cyborg").css({"box-shadow": "yellow 0px 0px 4px 4px"})
    score++
    ds()
    $(".cyborg").attr('disabled','disabled');
 });

 $(".cyberpunk").click(function(){
    $(".cyberpunk").css({"box-shadow": "yellow 0px 0px 4px 4px"})
    score++
    ds()
    $(".cyberpunk").attr('disabled','disabled');
    
 });

 $(".bionic").click(function(){
    $(".bionic").css({"box-shadow": "yellow 0px 0px 4px 4px"})
    score++
    ds()
    $(".bionic").attr('disabled','disabled');
    
 });

 $(".agent").click(function(){
    $(".agent").css({"box-shadow": "yellow 0px 0px 4px 4px"})
    score++
    ds()
    $(".agent").attr('disabled','disabled');

 });

function ds(){
 if(score == 5){
    $(".congratulations").fadeIn("slow");;
 }
}