var counter1 = 30;
console.log(counter1);

var counter2 = 30;


var gifCounter = 5;

var correct = "";

var a = 0;

var b = 0;

// var formPages = ["$('#one')", "$('#two')", "$('#three')", "$('#four')", "$('#five')", "$('#six')"];
// var formPages = [$('#one'), $('#two'), $('#three'), $('#four'), $('#five'), $('#six')];

// var gifPages = ["$('#gifOne')", "$('#gifTwo')", "$('#gifThree')", "$('#gifFour')", "$('#gifFive')", "$('#gifSix')"];
// var gifPages = ["$('#gifOne')", "$('#gifTwo')", "$('#gifThree')", "$('#gifFour')", "$('#gifFive')", "$('#gifSix')"];



// function decreaseCounter1(){
    
// timeOut1 = setInterval(decreaseCounter1, 1*1000);
// // timeOut1 = Math.floor((distance % (1000 * 60)) / 1000);

//     if (counter1 > 0){

//         counter1--;
//         $('#timerOne').text(counter1);

//     }else if(counter1 == 0){
//         clearInterval(timeOut1);
//         // clearTimeout(timeOut);
//         // counter1 = 30;
//     }

// }

// function decreaseCounter2(){
    
//     var timeOut2 = setInterval(decreaseCounter2, 1*1000);

//     if (counter2 > 0){
//         counter2--;
//         $('#timerTwo').text(counter2);

      
//     }else if (counter2 == 0){
//   clearInterval(timeOut2);
        
//         counter2 = 30;
//     }

// }




function decreaseGifCounter(){

gifTime = setInterval(decreaseGifCounter, 1*1000);

    if (gifCounter > 0){
        gifCounter--;  
        console.log(gifCounter);

    
        // clearTimeout(gifTime);
    }
    else if (gifCounter == 0){
        formPage();
        $('#gifOne').hide();
        $("#gifTwo").hide();
        $("#gifThree").hide();
        $("#gifFour").hide();
        $("#gifFive").hide();
        $("#gifSix").hide();
        b++;
        clearInterval(gifTime);
        // return gifCounter = 5;
    }
  
    
}

function gifPage(){
    
    decreaseGifCounter();
if (b == 0){

    
    $('#gifOne').show();
    $('#one').hide();

}if (b == 1){
  

    $("#gifTwo").show();
    $('#two').hide();

}
}
var decreaseCounter1 = setInterval(function() {
    counter1--;
    $('#timerOne').text(counter1);
    // Display 'counter' wherever you want to display it.
    if (counter1 == 0) {
        // Display a login box
        clearInterval(decreaseCounter1);
    }
}, 1000);

function formPage(){


if (a == 0){
decreaseCounter1;
    $('#one').show();

}else if (a == 1){
    decreaseCounter1;
    $('#two').show();

}else if (a == 2){
    $('#three').show();
}
}

$("input[type='button']").on('click', function(){
    if ($(this).attr('data-type') == 'start'){

         $("#startPage").hide();
         formPage();

         $('#one').show();
         event.preventDefault();
    }

    if ($(this).attr('data-type') == 'correct'){
        $('#content').text('SUPER DUPER');

        // clearTimeout(timeOut1);
        // clearTimeout(timeOut1);
        clearInterval(decreaseCounter1);
        gifPage();
        a++;
    }
    
    if ($(this).attr('data-type') == 'wrong'){
        $('#content').text('incorrect')
        // clearInterval(timeOut1);
        // clearTimeout(timeOut);
        clearInterval(decreaseCounter1);
        gifPage();
        a++;
    }

    event.preventDefault();

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
    
    })