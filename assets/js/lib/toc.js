$(document).ready(function(){
    $('.toc-entry').click(function(){
       $('#toggle').attr('checked', false);
        console.log("clicked");
    })
    $('.toc-entry a').click(function(){
       $('#toggle').attr('checked', false);
    })
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
