// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


/**
 * App should be have the following features:
 *  1. Should be able to create a canvas of any size, 
 *  2. choose a color using the color picker
 *  3. click on the canvas's table cells to set their color.
 */

 

$('#createGrid').on('click', makeGrid);
$('#pixelCanvas').on('click', 'td', function() {
    var color = $('#colorPickers').val(); 
    console.log(color);
    $(this).css('background-color', color); 
});

function makeGrid(e) {
    e.preventDefault();
    clearCurrentGrid();
    
    const height = $('#inputHeight').val();
    const width = $('#inputWeight').val();

    for (var i = 1; i <= height; i++ ) {
        $('#pixelCanvas').append(
            '<tr></tr>'
        );
        for (j = 1; j <= width; j++) {
            $(`#pixelCanvas tr:nth-child(${i}`).append(
                '<td></td>'
            );
        }
    } 
}

function clearCurrentGrid(){
    $('#pixelCanvas').html('');
}
