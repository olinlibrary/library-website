$(document).ready(function(){
    $('.toc-entry').click(function(){
       $('#toggle').attr('checked', false);
        console.log("clicked");
    })
    $('.toc-entry a').click(function(){
       $('#toggle').attr('checked', false);
    })

    $('.anchor').parent().hover(function(){
        if($(window).width() > 1024){
        $(this).find('.anchor > span.octicon').show();
        }
    }, function(){
        $(this).find('.anchor > span.octicon').hide();
    });
    var scrollTime= 500;
    $('a[href^="#"]').click(function() {
        // Need both `html` and `body` for full browser support
        var offset=- 55;
        if($(window).width() > 1024){
            offset= 0;
        }
        $("html, body").animate({
            scrollTop: $($(this).attr("href") ).offset().top + offset
         }, scrollTime);
         // Prevent the jump/flash
        return false
    });
});
