$(document).ready(function(){
    $('.bromo-slider').slick({
        speed: 500,
        fade: true,
        cssEase: 'linear', 
        prevArrow:"<button type='button' class='slick-prev pull-left'><img src='../img/icons/prev.png'></img></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='../img/icons/next.png'></img></button>",
        responsive: [
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                infinite: true,
                dots: true
              }
            }
        ]
    });

    $('.menu-btn').on('click', function(){
        $(this).toggleClass('active');
        $('.header__navigation-list').toggleClass('active');
    })


  });