//jquery to change the background color on mousedown of button for gallery and destination pages
$(function() {
    $(".destination").on({
        mousedown: function() {
            $(this).css("background-color", "#80c5ff");
        }
    });
});