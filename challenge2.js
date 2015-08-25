$(function() {
    $('#add_todo').click(function(e) {
        e.preventDefault();
        var text = $('#enter').val();
        $('ul').append('<li style="display: none"><table><tr><td><input type="checkbox" class="checkbox"></td><td class="label">' + text + '</td><td class="button">X</td></tr></table>');
        $('li:hidden').fadeIn('fast');
    });

    $('ul').on('click', '.checkbox', function() {
        if ($(this).parentsUntil('ul').hasClass('completed')) {
            $(this).parentsUntil('ul').removeClass("completed");
        } else {
            $(this).parentsUntil('ul').addClass("completed");
        }
    });

    $('ul').on('click', '.button', function(e) {
        e.preventDefault();
        $(this).parentsUntil('ul').fadeOut('fast', function () {
        	$(this).parentsUntil('ul').remove();
        });
    });

    $('ul').on('dblclick', 'li', function(e) {
        e.preventDefault();
        $(this).fadeOut('fast', function () {
        	$(this).remove();
        });
    });

    // $(something).on("click", ".class", function () {$(this).click(disappear)}
});
