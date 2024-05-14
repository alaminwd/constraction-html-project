// ====banner slider========//
$('.banner-slider').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 1200,
  autoplaySpeed:1500,
  autoplay: false,
  fade: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows:false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
      }
    }
  ]
});




// about banner slider
$('.main-project').slick({
  dots: false,
  arrows: true,
  infinite: true,
  fade: false,
  speed: 1000,
  autoplay: true,
  prevArrow:' <a href=""><i class="fas fa-arrow-left prev"></i></a>',
  nextArrow:' <a><i class="fa-solid fa-arrow-right next"></i></a>',
  slidesToShow: 3,
  slidesToScroll: 1,
});

$('.footer-slider').slick({
  dots: false,
  infinite: true,
  speed: 900,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  centerMode:true,
  centerPadding:"30px",
  autoplay:false,
  autoplaySpeed:1200,
});


// =========cliant Review slider=======//
$('.testi-img-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay:true ,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding: "0",
  prevArrow:'<a class="slick-prev slick-arrow " aria-label="Previous"><i class="fa-solid fa-arrow-left prev"></i></a>',
  nextArrow:'<a class="slick-prev slick-arrow " aria-label="Previous"><i class="fa-solid fa-arrow-right next"></i></a>',
  asNavFor: ".testi-text-slider",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
        vertical: false,
        prevArrow:'<a class="slick-prev slick-arrow" aria-label="Previous"><i class="fa-solid fa-arrow-left prev"></i></a>',
        nextArrow:'<a class="slick-prev slick-arrow" aria-label="Previous"><i class="fa-solid fa-arrow-right next"></i></a>',
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows:false,
        vertical: false,
        prevArrow:'<a class="slick-prev slick-arrow" aria-label="Previous"><i class="fa-solid fa-arrow-left prev"></i></a>',
        nextArrow:'<a class="slick-prev slick-arrow" aria-label="Previous"><i class="fa-solid fa-arrow-right next"></i></a>',
      }
    }
  ]
});

$('.testi-text-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".testi-img-slider",
  fade: true,
});



//=========== venobox ==========//
$(function(){
  
  $('.venobox').venobox();
  
  });

  // ====mixitup======//

// ----------Back to Top ----------//
$('.back-to-top').click(function(){
    $('html, body').animate({scrollTop:0}, 2000)
});
$(window).scroll(function(){
  var scrolling = $(this).scrollTop();

  if(scrolling > 400){
      $('.back-to-top').fadeIn(500);
  }
  else{
    $('.back-to-top').fadeOut(500);
  }

  if(scrolling >400){
      $('nav').addClass('navber-bg');
  }

  else{
    $('nav').removeClass('navber-bg');
  }


});

  	//Preloader-js
	$(window).on('load', function () {
		$('.preloader').delay(300).fadeOut(300);
	});
