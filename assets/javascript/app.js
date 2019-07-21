var counter = 60;
$('span').text(counter);

var gifCounter = 5;
var correct = "";

function decreaseCounter(){
    counter--;
    $('span').text(counter);

    if (counter == 0){
        clearInterval(timeOut);
        $('#content').text('timer is up!')
    }

}

function nextPage(){
    gifCounter--;
    gifTime = setInterval(nextPage, 1*1000);
    $("#one").hide();
    $("#gifOne").show();

    if (gifCounter == 0){
        $("#gifOne").hide();
        $("#two").show();
    }
}


$("input[type='button']").on('click', function(){
    ($(this).attr('data-type') == 'start')
    timeOut = setInterval(decreaseCounter, 1*1000);
    $("#startPage").hide();
    $("#one").show();


    if ($(this).attr('data-type') == 'correct'){
        console.log(correct);
        $('#content').text('SUPER DUPER');
        clearInterval(timeOut);
        nextPage();

    }
    
    if ($(this).attr('data-type') == 'wrong'){
        $('#content').text('incorrect')
        clearInterval(timeOut);
        nextPage();
    }



})



$(document).ready(function(){
    
    $("#startPage").show();

      $("#one").hide();
    $("#gifOne").hide();

      $("#two").hide();
    $("#gifTwo").hide();

      $("#three").hide();
    $("#gifThree").hide();

      $("#four").hide();
    $("#gifFour").hide();

      $("#five").hide();
    $("#gifFive").hide();

      $("#six").hide();
    $("#gifSix").hide();
    });
