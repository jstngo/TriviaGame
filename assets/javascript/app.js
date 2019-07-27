// var counter1 = 10;
// console.log(counter1);

// var counter2 = 30;

var counter = 30;
var gifCounter = 5;

var nextCounter = 30;

var timer;
var gifTimer;

var correct = "";

var f = 0;


var b = 0;
console.log(b);
var a = 0;

var questions = { "first": "This burrito is delicious but it is filling", "second": "Todd, where's my goddamn latte!?", "third": "Help me Jesus, help me Jewish God, help me Allah, HELP ME TOM CRUISE", "fourth": "I swear, I'm so pissed off at my mom. As soon as she's of age, I'm putting her in a home.", "fith": "Maybe we should call ourselves the febreeze brothers because things are feeling so fresh right now", "sixth": "I'm in a store, and I'm singing" };

var answers = { "row1": ["Old School", "A Night at the Roxburry", "Talladega Nights", "Blades of Glory", " Other Guys", "Get Hard"], "row2": ["Anchorman", "Lego Movie", "Kicking and Screaming", "Land of the Lost", "Megamind", "Elf"], "row3": ["Get Hard", "Everything Must Go", "The Campaign", "Step Brothers", "Stranger than Fiction", "Kicking and Screaming"], "row4": ["Blades of Glory", "Zoolander", "Casa Padre", "Semi-Pro", "Austin Powers", "Lego Movie 2"] };

var correct = { "answers": ["Anchorman", "Zoolander", "Talladega Nights", "Step Brothers", "Other Guys", "Elf"] };

var start = {"Timer": function formTimer(){setInterval}};

function decreaseGifCounter() {

    gifTime = setInterval(function (){

        gifCounter--;
        console.log(gifCounter);
        // clearTimeout(gifTime);
        if (gifCounter == 0) {
        formPage();
        $('#gifOne').hide();
        $("#gifTwo").hide();
        $("#gifThree").hide();
        $("#gifFour").hide();
        $("#gifFive").hide();
        $("#gifSix").hide();
        // b++;
        a++;
        clearInterval(gifTime);
        // return gifCounter = 5;
    }
}, 1000)
}

// function decreaseGifCounter() {

//     gifTime = setInterval(decreaseGifCounter, 1 * 1000);

//     if (gifCounter > 0) {
//         gifCounter--;
//         console.log(gifCounter);
//         // clearTimeout(gifTime);
//     }
//     else if (gifCounter == 0) {
//         formPage();
//         $('#gifOne').hide();
//         $("#gifTwo").hide();
//         $("#gifThree").hide();
//         $("#gifFour").hide();
//         $("#gifFive").hide();
//         $("#gifSix").hide();
//         // b++;
//         a++;
//         clearInterval(gifTime);
//         // return gifCounter = 5;
//     }
// }
function formTimer() { 

    timer = setInterval(function () { //starts the countdown timer
        counter--;
        $('#formTime').text(counter);

        if (counter == 0) {
            clearInterval(timer);
        }
    }, 1000)
}
function gifPage() {

    decreaseGifCounter();

    if (b == 0) {
    formTimer();
        $('#gifOne').show();
        $('#one').hide();
 
    }if (b == 1) {
        formTimer();
        $("#gifTwo").show();
        $('#one').hide();

    }if (b == 2) {
        formTimer();
        $("gifThree").show();
        $('#one').hide();
    }if (b == 3) {
        formTimer();
        $("gifFour").show();
        $('#one').hide();
    }if (b == 4) {
        formTimer();
        $("gifFive").show();
        $('#one').hide();
    }if (b == 5) {
        formTimer();
        $("gifSix").show();
        $('#one').hide();
    }
}

function formPage() {
    
    $('#one').show();
    $("input[data-type='answer1']").val(answers.row1[f]);
    $("input[data-type='answer2']").val(answers.row2[f]);
    $("input[data-type='answer3']").val(answers.row3[f]);
    $("input[data-type='answer4']").val(answers.row4[f]);

};

$("input[type='button']").on('click', function () {

    if ($(this).attr('data-type') == 'start') {

        $("#startPage").hide();

        formPage();

        $('#one').show();


        formTimer();

        event.preventDefault();
    } else {
        // for (var i=0; i<correct.answers.length; i++);
        if ($(this).attr('value') == correct.answers[a]) {
            $('#content').text('SUPER DUPER');
            f++;
            clearInterval(timer);
            counter = 33;
            gifCounter = 5;
            $('#formTime').text(counter);
            gifPage();
            b++;

        }
        // for (var i=0; i<correct.answers.length; i++);
        if ($(this).attr('value') != correct.answers[a]) {
            $('#content').text('incorrect')
            f++;
            clearInterval(timer);
            gifPage();
            counter = 33;
            gifCounter = 5;
            $('#formTime').text(counter);
            b++;
        }

        event.preventDefault();
    }
})

$(document).ready(function () {

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