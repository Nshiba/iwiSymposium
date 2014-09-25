$(document).ready( function() {
    var menu = $('div#floating-menu');
    var offset = menu.offset().top;

    var position = 100;
    var coodinates = menu.css('top');
    var origPos = menu.css('position');
      
    $(window).scroll(function(){
        var scrollAmount = $(window).scrollTop();
        var newPosition = offset + scrollAmount;

        if(scrollAmount > offset - position){
            menu.css('position', 'fixed')
            menu.css('top', position + "px")
        }else{
            menu.css('position', origPos)
            menu.css('top', coodinates)
        }

    });
});