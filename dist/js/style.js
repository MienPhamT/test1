$(document).ready( function(){
    $('#main-menu > li > a').on('click', function(){
        $('.content-inner').removeClass('content-current');
        $($(this).attr('href')).addClass('content-current');
    });
});