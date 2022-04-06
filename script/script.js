$(document).ready(function() {
    $('#booking').slick({
        slidesToShow: 1,
        centerPadding: '10px'
    });
    $('.mobile-service').slick({
        slidesToShow: 1,
        centerPadding: '10px'
    });
    $('.mobile-food').slick({
        slidesToShow: 1,
        centerPadding: '0px'
    });
    $('#menu').click(function(){
        $('.mobile-nav').css('display','flex');
        $('#menu').css('display','none');
    }); 
    $('#cancel').click(function(){
        $('.mobile-nav').css('display','none');
        $('#menu').css('display','block');
    }); 
});