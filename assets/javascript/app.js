var counter = 30;
var gifCounter = 5;

// var nextCounter = 30;

var timer;
var gifTimer;

var correct = "";

var f = 0;

var b = 0;

var a = 0;

var c = 0; //Correct answers tracker

var w = 0; //Wrong answers tracker

var u = 0; //Unanswered tracker

var question = { "s": ["This burrito is delicious but it is filling", "Todd, where's my goddamn latte!?", "Help me Jesus, help me Jewish God, help me Allah, HELP ME TOM CRUISE", "I swear, I'm so pissed off at my mom. As soon as she's of age, I'm putting her in a home.", "Maybe we should call ourselves the febreeze brothers because things are feeling so fresh right now", "I'm in a store, and I'm singing"] };

var answers = { "rowA": ["Old School", "A Night at the Roxburry", "Talladega Nights", "Blades of Glory", "Other Guys", "Get Hard"], "rowB": ["Anchorman", "Lego Movie", "Kicking and Screaming", "Land of the Lost", "Megamind", "Elf"], "rowC": ["Get Hard", "Everything Must Go", "The Campaign", "Step Brothers", "Stranger than Fiction", "Kicking and Screaming"], "rowD": ["Blades of Glory", "Zoolander", "Casa Padre", "Semi-Pro", "Austin Powers", "Lego Movie 2"] };

var correct = { "answers": ["Anchorman", "Zoolander", "Talladega Nights", "Step Brothers", "Other Guys", "Elf"] };

var notify = { "c": "Correct!", "w": "Wrong! it was" };

var result = { "s": [$('#result1'), $('#result2'), $('#result3'), $('#result4'), $('#result5'), $('#result6')], "m": [$('#movie1'), $('#movie2'), $('#movie3'), $('#movie4'), $('#movie5'), $('#movie6')] };


function decreaseGifCounter() {

    gifTime = setInterval(function () {

        gifCounter--;
        console.log(gifCounter);

        if (gifCounter == 0) {
            formPage();
            $('#gifOne').hide();
            $("#gifTwo").hide();
            $("#gifThree").hide();
            $("#gifFour").hide();
            $("#gifFive").hide();
            $("#gifSix").hide();
            a++;
            clearInterval(gifTime);

        }
        // else if (gifCounter == 0 && b == 6){
        // b++;
        // }
    }, 1000)

}

function formTimer() {

    timer = setInterval(function () { //starts the countdown timer
        counter--;
        $('#formTime').text(counter);

        if (counter == 0) {
            u++;

            a++;
            f++;
            $('#unanswered').text(u);
            clearInterval(timer);
            gifPage();
            gifCounter = 5;

        }
    }, 1000)
}
function gifPage() {
    // b++;
    counter = 35;

    decreaseGifCounter();
    if (b == 0) {
        formTimer();
        $('#gifOne').show();
        $('#form').hide();

    }
    // if (b == 1 && counter == 0){
    //     formTimer();
    //     $('#gifOne').show();
    //     $('#form').hide();
    //     result.s[0].text("Out of time! it was");
    //     result.m[0].text(correct.answers[0]);
    // }
    if (b == 1) {
        gifCounter = 8;
        counter = 38;
        formTimer();
        $("#gifTwo").show();
        $('#form').hide();
    }
    // if (b == 2 && counter == 0){
    //     formTimer();
    //     $('#gifOne').show();
    //     $('#form').hide();
    //     result.s[1].text("Out of time! it was");
    //     result.m[1].text(correct.answers[1]);

    // } 
    if (b == 2) {
        formTimer();
        $("#gifThree").show();
        $('#form').hide();

    }
    // if (b == 3 && counter == 0){
    //     formTimer();
    //     $('#gifOne').show();
    //     $('#form').hide();
    //     result.s[2].text("Out of time! it was");
    //     result.m[2].text(correct.answers[2]);

    // } 
    if (b == 3) {
        formTimer();
        $("#gifFour").show();
        $('#form').hide();

    }
    // if (b == 4 && counter == 0){
    //     formTimer();
    //     $('#gifOne').show();
    //     $('#form').hide();
    //     result.s[3].text("Out of time! it was");
    //     result.m[3].text(correct.answers[3]);

    // } 
    if (b == 4) {
        formTimer();
        $("#gifFive").show();
        $('#form').hide();

    }
    // if (b == 5 && counter == 0){
    //     formTimer();
    //     $('#gifOne').show();
    //     $('#form').hide();
    //     result.s[4].text("Out of time! it was");
    //     result.m[4].text(correct.answers[4]);

    // } 
    if (b == 5) {
        $("#gifSix").show();
        $('#form').hide();
    }
    // }
    // if (b == 4 && counter == 0){
    //     formTimer();
    //     $('#gifOne').show();
    //     $('#form').hide();
    //     result.s[5].text("Out of time! it was");
    //     result.m[5].text(correct.answers[5]);
}

function formPage() {
    if (b == 6) {
        $("#finishPage").show();
        $('#form').hide();
        counter = 30;
    } else {
        // formTimer();
        $('#question').text(question.s[f]);
        $('#form').show();
        $("input[data-type='answer1']").val(answers.rowA[f]);
        $("input[data-type='answer2']").val(answers.rowB[f]);
        $("input[data-type='answer3']").val(answers.rowC[f]);
        $("input[data-type='answer4']").val(answers.rowD[f]);
    }
};

$(document).ready(function () {

    $("#startPage").show();

    $("#form").hide();
    $("#gifOne").hide();


    $("#gifTwo").hide();


    $("#gifThree").hide();


    $("#gifFour").hide();


    $("#gifFive").hide();


    $("#gifSix").hide();

    $("#finishPage").hide();

    $("input[type='button']").on('click', function () {

        if ($(this).attr('data-type') == 'start') {

            $("#startPage").hide();

            formPage();

            $('#form').show();


            formTimer();

            event.preventDefault();
        }
        else if ($(this).attr('data-type') == 'restart') {
            f = 0;
            b = 0;
            a = 0;
            c = 0; //Correct answers tracker
            w = 0; //Wrong answers tracker
            u = 0;
            counter = 30;
            $("#finishPage").hide();
            $('#form').show();
            formPage();
            formTimer();
        }
        else {

            if ($(this).attr('value') == correct.answers[a]) {  //If user gets answer correct
                result.s[a].text(notify.c);
                result.m[a].text(correct.answers[a]);
                f++;
                clearInterval(timer);
                counter = 35;
                gifCounter = 5;
                $('#formTime').text(counter);
                gifPage();
                b++;
                c++;
                $('#correct').text(c);
            }

            if ($(this).attr('value') != correct.answers[a]) { //If user gets answer wrong
                result.s[a].text(notify.w);
                result.m[a].text(correct.answers[a]);
                f++;
                clearInterval(timer);
                gifPage();
                counter = 35;
                gifCounter = 5;
                $('#formTime').text(counter);
                b++;
                w++
                $('#wrong').text(w);
            }

            event.preventDefault();
        }
    })

})