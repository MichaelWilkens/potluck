$('#submit').on('click', function(){
    event.preventDefault()
    
    var firstName = $('#first-name').val().trim();
    var lastName = $('#last-name').val().trim();
    var item = $('#item').val().trim();

    if(firstName !== "" && lastName !== "" && item !== ""){
        $.post('/api/newAttendee', {
            firstName: firstName,
            lastName: lastName,
            item: item
        }).then(function(response){
            console.log(response)
        });

        setTimeout(function(){window.location = '/'}, 500);
        
    } else {
        $('#error-message').show()
    }    
})