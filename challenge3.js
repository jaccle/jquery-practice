$(function() {
    console.log('JS is up');
    $('#password').on('keydown', function() {
        $('p').show();
        if ($('#password').val().length < 6) {
            // $('body').animate({
            //     backgroundColor: 'red'
            // });
            $('#body').animate({
            	backgroundColor: '#FF000'
            }, 'fast');
            $('p').text('ERROR: PASSWORD NOT LONG ENOUGH');

        } else {
            $('p').text('~Password satisfactory~');
        }
    });
    $('form').submit(function(e) {
        e.preventDefault();
        if ($('#password').val().length > 5) {
            var pw = $('#password').val();
            $('#password').val("");
            $('form').fadeOut('fast', function() {
                $('form').remove();
            });
            $('p').fadeOut('fast', function() {
                $('p').remove();
            });
            $('h1').fadeOut('fast', function() {
                $('h1').remove();
                $('body').append('<h2 style="display: none">Thank you for signing up!</h2>');
                $('h2:hidden').fadeIn('slow');
            });

        } else {
            $('p').text('ERROR: PASSWORD NOT LONG ENOUGH');
            $('p').css('font-size', '50px');
        }
    });
    console.log('end');
});
