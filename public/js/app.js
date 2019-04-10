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


// Change the selector if needed
var $table = $('table'),
    $bodyCells = $table.find('tbody tr:first').children(),
    colWidth;

// Get the tbody columns width array
colWidth = $bodyCells.map(function() {
    return $(this).width();
}).get();

// Set the width of thead columns
$table.find('thead tr').children().each(function(i, v) {
    $(v).width(colWidth[i]);
});