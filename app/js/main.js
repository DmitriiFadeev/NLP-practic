$(function(){
    // слайдер
    $('.video-block__list').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive:[{
            breakpoint: 1100,
            settings:{
                slidesToShow:1,
                slidesToScroll: 1,
                arrows: false,
            }
        }]
    });
    // слайдер


    $(document).ready(function() {   
        $('a[name=modal]').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        $('#mask').css({'width':maskWidth,'height':maskHeight});
        $('#mask').fadeIn(1000); 
        $('#mask').fadeTo("slow",0.8); 
        var winH = $(window).height();
        var winW = $(window).width();
        $(id).css('top',  winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);
        $(id).fadeIn(2000); 
        });
        $('.window .close').click(function (e) { 
        e.preventDefault();
        $('#mask, .window').hide();
        }); 
        $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
        }); 
       });
       
      //  Всплывающеи окна
       $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
      });
      //  Всплывающеи окна

      // Мобильное меню
      $('.menu__burger').click(function(event){
        $('.menu-top').toggleClass('active');
        $('body').toggleClass('lock')
      });
      // Мобильное меню
});

// Табы 
$(document).ready(function() {
  $('.tabs-triggers__item').click(function(e){
    e.preventDefault();

    $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
    $('.tabs-content__item').removeClass('tabs-content__item--active');

    $(this).addClass('tabs-triggers__item--active');
    $($(this).attr('href')).addClass('tabs-content__item--active');
  });
  
  $('.tabs-triggers__item:first').click();
});
// Табы 

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'positionFromTop': 300
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// адаптация загрузки видео с Youtube
( function() {
  var youtube = document.querySelectorAll( ".youtube" );
  for (var i = 0; i < youtube.length; i++) {
      var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
      var image = new Image();
              image.src = source;
              image.addEventListener( "load", function() {
                  youtube[ i ].appendChild( image );
              }( i ) );
      
              youtube[i].addEventListener( "click", function() {
                  var iframe = document.createElement( "iframe" );
                  iframe.setAttribute( "frameborder", "0" );
                  iframe.setAttribute( "allowfullscreen", "" );
                  iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
                  this.innerHTML = "";
                  this.appendChild( iframe );
              } );    
  };
} )();
// адаптация загрузки видео с Youtube

//  липкое меню
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//  липкое меню