src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"

console.log($);

$(() => {

let popCount = 0;
let time = parseInt(document.getElementById('timer').innerHTML);


$('.balloon').click(function(e) {
    e.preventDefault();
    const $id = $(this).attr('id');
    $('#'+ $id).css('visibility', 'hidden');

    popCount += 1;
});

const startGame = () => {

    setInterval(function() {

        if (time === 0 && popCount < $('.balloon').length) {
            if (popCount === 0) {
                $('.popCount').text(`You popped ${popCount} balloons`)
                $('.lost').css('display', 'flex');
                clearInterval();
            } else if (popCount === 1) {
                $('.popCount').text(`You only popped ${popCount} balloon`)
                $('.lost').css('display', 'flex');
                clearInterval();
            } else {
                $('.popCount').text(`You only popped ${popCount} balloons`)
                $('.lost').css('display', 'flex');
                clearInterval();
            }

        } else if (time > 0 && popCount === $('.balloon').length) {
                $('.popCount').text(`You popped all ${popCount} balloons!`)
                $('.won').css('display', 'flex');

        } else {
            time -= 1;
            document.getElementById('timer').innerHTML = time;
        };

        if (time === 0) {
            clearInterval();
        } else if (time < 11 && time !== 0) {
            $('#timer').css('color', '#990000')
            function blink_text() {
                $('.blink').fadeOut(500);
                $('.blink').fadeIn(500);
            }
            setInterval(blink_text, 1000);
        };

    }, 1000);

};


$('#start').click(function() {
    $('.start-div').css('visibility', 'hidden');
    startGame()
});

$('.reset').click(function() {
    location.reload(true);
})


});
