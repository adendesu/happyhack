$(function($){
    $('.bg-swicher').bgSwitcher({
    images:['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
    interval: 5000,
    loop: true
});
$(window).scroll(function(){
    var targetElement = $('.fadein').offset().top;
    var scroll =$(window).scrollTop();
    var windowHeight = $(window).height();
    if(scroll> targetElement - windowHeight + 200){
        $('.fadein').css('opacity',1);
        $('.fadein').css('transform','translateY(0)');
    }
});
$('.slider').slick({
    autoplay: false, // 自動でスクロールしない
    slidesToShow: 4, // 表示するスライドの数
    swipe: true, // 操作によるスワイプ可能
    arrows: true, // 矢印表示
    dots: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // 画面幅480px以下でスライド1枚表示
        }
      }
    ]
  });
});

