$("div.users").on('click', 'li' function() {
    $.ajax({
        url: '/users/' + $(this).attr('data-user-id'),
        method: 'get',
        success: function(user) {
            $('#clicked_user').html('<h1>Username: ' + user.name + '</h1>');
        },
        dataType: 'json'
    });
});

// Exmaple of using jQuery to perform AJAX with DOM-stored data