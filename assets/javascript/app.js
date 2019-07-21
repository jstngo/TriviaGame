var counter = 6;
$('span').text(counter);

var timeOut = setInterval(decreaseCounter, 1*1000);

var correct = "";

function decreaseCounter(){
    counter--;
    $('span').text(counter);

    if (counter == 0){
        clearInterval(timeOut);
        $('#content').text('timer is up!')
    }

}


$('#play').on('click', function(){
    timeOut = setInterval(decreaseCounter, 1*1000);
})

$('#pause').on('click', function(){
    clearInterval(timeOut);
})


$("input[type='button']").on('click', function(){
    if ($(this).attr('data-type') == 'correct'){
        console.log(correct);
        $('#content').text('YOU DID IT');
        clearInterval(timeOut);
    }else{
        $('#content').text('incorrect')
        clearInterval(timeOut);
    }
})