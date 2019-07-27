var counter = 30; //Form page timer

var gifCounter = 5; //Gif page timer

var timer;

var gifTimer;

var n = 0; //Next page variable

var c = 0; //Correct answers tracker

var w = 0; //Wrong answers tracker

var u = 0; //Unanswered tracker

//Questions
var question = { "s": ["This burrito is delicious but it is filling", "Todd, where's my goddamn latte!?", "Help me Jesus, help me Jewish God, help me Allah, HELP ME TOM CRUISE", "I swear, I'm so pissed off at my mom. As soon as she's of age, I'm putting her in a home.", "Maybe we should call ourselves the febreeze brothers because things are feeling so fresh right now", "I'm in a store, and I'm singing"] };

//Possible answers
var answers = { "rowA": ["Old School", "A Night at the Roxburry", "Talladega Nights", "Blades of Glory", "Other Guys", "Get Hard"], "rowB": ["Anchorman", "Lego Movie", "Kicking and Screaming", "Land of the Lost", "Megamind", "Elf"], "rowC": ["Get Hard", "Everything Must Go", "The Campaign", "Step Brothers", "Stranger than Fiction", "Kicking and Screaming"], "rowD": ["Blades of Glory", "Zoolander", "Casa Padre", "Semi-Pro", "Austin Powers", "Lego Movie 2"] };

//Correct answers
var correct = { "answers": ["Anchorman", "Zoolander", "Talladega Nights", "Step Brothers", "Other Guys", "Elf"] };

var notify = { "c": "Correct!", "w": "Wrong! it was" };
//Notifies results after user input

var result = { "s": [$('#result1'), $('#result2'), $('#result3'), $('#result4'), $('#result5'), $('#result6')], "m": [$('#movie1'), $('#movie2'), $('#movie3'), $('#movie4'), $('#movie5'), $('#movie6')] };
//Pushes results to specific gif page

function decreaseGifCounter() { //Counts down the Gif Page

    gifTime = setInterval(function () {

        gifCounter--;
        console.log(gifCounter);

        if (gifCounter < 1){
            n++; //Adds 1 to next page variable 
        }

        if (gifCounter == 0) { //Hides gif pages, shows formPage, clears interval, and lets' user know they ran out of time
            formPage();
            $('#gifOne').hide();
            $("#gifTwo").hide();
            $("#gifThree").hide();
            $("#gifFour").hide();
            $("#gifFive").hide();
            $("#gifSix").hide();
            
            clearInterval(gifTime);
            result.s[n].text("Out of time! it was");
            result.m[n].text(correct.answers[n]);
            counter = 30;
        }
    }, 1000)

}

function formTimer() {

    timer = setInterval(function () { //starts the countdown timer
        counter--;
        $('#formTime').text(counter);

        if (counter == 0) {
            u++; //Tracks unanswerd questions
            $('#unanswered').text(u); //Writes unanswered question score to page
            clearInterval(timer); //Stops timer
            gifPage(); //Goes to gif page
            gifCounter = 5; //resets gif timer

        }
    }, 1000)
}
function gifPage() { //Each sequence goes starts the form timer, shows th gif page, and hides the form page depending on the value of n 
    counter = 35; //Resets form page timer to 35 because gif Page is 35 seconds

    decreaseGifCounter();
    if (n == 0) {
        formTimer();
        $('#gifOne').show();
        $('#form').hide();

    }
    if (n == 1) {
        gifCounter = 8; //Set Gif Counter to 8 because this gif is longer than the oters
        counter = 38; //38 Seconds to make up for the longer gif in this sequence
        formTimer();
        $("#gifTwo").show();
        $('#form').hide();
    }
    if (n == 2) {
        formTimer();
        $("#gifThree").show();
        $('#form').hide();

    }
    if (n == 3) {
        formTimer();
        $("#gifFour").show();
        $('#form').hide();

    }
    if (n == 4) {
        formTimer();
        $("#gifFive").show();
        $('#form').hide();

    }
    if (n == 5) {
        $("#gifSix").show();
        $('#form').hide();
    }
}

function formPage() { //Creates the questions and answers in buttons and also shows form page
    if (n == 6) { //This starts the finish page sequence and resets form page coutner to 30
        $("#finishPage").show();
        $('#form').hide();
        counter = 30;
    } else {
        $('#question').text(question.s[n]);
        $('#form').show();
        $("input[data-type='answer1']").val(answers.rowA[n]);
        $("input[data-type='answer2']").val(answers.rowB[n]);
        $("input[data-type='answer3']").val(answers.rowC[n]);
        $("input[data-type='answer4']").val(answers.rowD[n]);
    }
};

    $("input[type='button']").on('click', function () {

        if ($(this).attr('data-type') == 'start') {

            $("#startPage").hide();

            formPage();

            $('#form').show();


            formTimer();

            event.preventDefault();
        }
        else if ($(this).attr('data-type') == 'restart') { //Reset page
            n = 0; //Reset next page tracker
            c = 0; //Reset correct answers tracker
            w = 0; //Reset wrong answers tracker
            u = 0; //Reset unanswered answers
            counter = 30;
            $("#finishPage").hide();
            $('#form').show();
            formPage();
            formTimer();
        }
        else {

            if ($(this).attr('value') == correct.answers[n]) {  //If user gets answer correct
                result.s[n].text(notify.c); //Lets user know they got the correct answer
                result.m[n].text(correct.answers[n]); //Lets user know which movie
                clearInterval(timer); //Stops timer
                gifCounter = 5; //Resets gif timer
                gifPage(); //Goes to gif page
                c++; //Adds correct points to variable
                $('#correct').text(c); //Writes to finish page
            }

            if ($(this).attr('value') != correct.answers[n]) { //If user gets answer wrong
                result.s[n].text(notify.w); //Lets user know they got the wrong answer
                result.m[n].text(correct.answers[n]); //Lets user know which movie
                clearInterval(timer); //Stops timer
                gifPage(); //Resets gif timer
                gifCounter = 5; //Resets gif timer
                w++ //Adds wrong points to variable
                $('#wrong').text(w); //Writes to finish page
            }

            event.preventDefault();
        }
    })

    $(document).ready(function () { //Hides the form page and all the gif pages, but on only shows start page when the html loads

        $("#startPage").show();
    
        $("#form").hide();
        $("#gifOne").hide();
    
    
        $("#gifTwo").hide();
    
    
        $("#gifThree").hide();
    
    
        $("#gifFour").hide();
    
    
        $("#gifFive").hide();
    
    
        $("#gifSix").hide();
    
        $("#finishPage").hide();
})