$(document).ready(function(){
    $(window).scroll(function(){
        var anchoWindow = $(window).width();

        if( anchoWindow > 800){
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px,' + scroll/2 + '%)'
            });

            $('.acerca-de article').css({
                'transform': 'translate(0px,-' + scroll/4 + '%)'
            });
        }
    });

    $(window).resize(function(){
        var anchoWindow = $(window).width();
        if(anchoWindow < 800){
            $('.acerca-de article').css({
                'transform': 'translate(0px,0px)'
            });
        }
    });
});