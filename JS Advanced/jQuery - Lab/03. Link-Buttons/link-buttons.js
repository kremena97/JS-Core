function attachEvents() {
    let buttons = $('a.button');

    $(buttons[0]).bind('click', function() {
        $(buttons[0]).addClass( "selected");
        $(buttons[1]).removeClass( "selected");
        $(buttons[2]).removeClass( "selected");
    });

    $(buttons[1]).bind('click', function() {
        $(buttons[1]).addClass( "selected");
        $(buttons[0]).removeClass( "selected");
        $(buttons[2]).removeClass( "selected");
    });

    $(buttons[2]).bind('click', function() {
        $(buttons[2]).addClass( "selected");
        $(buttons[1]).removeClass( "selected");
        $(buttons[0]).removeClass( "selected");
    });
}