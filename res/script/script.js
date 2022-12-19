

$(document).ready(
    function() {
            /*QUANDO O ICONE HAMBUQUE FOR CLICADO  VAI SER EXECUTADO OUTRA FUNÇÃO 
            SELECIONA O ELEMENTO COM A CLASSE JS--NAV-ICON E VAI FICAR ESPERANDO ESSE ELEMENTO*/
        $('.js--nav-icon').click(
             function () {
                var nav = $('.main-nav');

                nav.slideToggle(200);

             }

        );

    }

    
);


$(document).ready(function(){
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    
    });
  });