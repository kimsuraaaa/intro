/* 2020-07-31, ver 1.1 */

function scrollCheck(){
    var idx = $(document).scrollTop();
    if(idx > 1){
        $('body').removeClass('scroll-top');
    } else if(idx <= 1){
        $('body').addClass('scroll-top');
    }

    for(i=1; i <= $('main > ul > li').length; i++){
        if(idx > $('main > ul > li').eq(i-1).offset().top - 50){
            $('nav > ul > li').removeClass('active');
            $('nav > ul > li').eq(i-1).addClass('active');
        }
    }

    if($('nav > ul > li').eq(2).hasClass('active')){
        $('.skill-box').find('li').addClass('active');
    } else {
        $('.skill-box').find('li').removeClass('active');
    }
}

function windowResize(){
    $('main > ul > li').css('min-height',$(window).height());
}

$(document).ready(function(){
    scrollCheck();
    windowResize();
    $(window).resize(windowResize);

    $(document).on('scroll',function(){
        scrollCheck();
    });

    $('nav a').on('click',function(){
        var idx = $(this).parent().index();
		$('html, body').animate({scrollTop : $('main > ul > li').eq(idx).offset().top}, 600);
    });
        
    $('.btn-top').on('click',function(){
        var offset = $('.intro').offset();
        $('html, body').animate({scrollTop:offset.top}, 500);
    });

    $('.btn-more').on('click',function(){
        if($(this).hasClass('active')){
            $(this).text('더보기');
            $(this).parent().removeClass('active');
            $(this).removeClass('active');
        } else {
            $(this).text('접기');
            $(this).parent().addClass('active');
            $(this).addClass('active');
        }
    });
    
});