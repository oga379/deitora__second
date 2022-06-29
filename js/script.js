// ハンバーガーメニュー
jQuery('.drawer__icon').on('click',function(e){
  e.preventDefault();   //リンクを押した際次ページにいかないためのもの
  
  jQuery('.drawer__icon').toggleClass('is-active');//クリックした際.drawer__iconにis-activeクラスを付与もしくは外す
  jQuery('.drawer__content').toggleClass('is-active');
  jQuery('.drawer__backgraund').toggleClass('is-active');
  
  return false;
});

// wow
new WOW().init();

// swiper 画像スライド
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  slidesPerView: 2,
  breakpoints: {
    // 768px以上の場合
    540: {
      slidesPerView: 2,
    },
    // 980px以上の場合
    768: {
      slidesPerView: 2,
    },
    // 1200px以上の場合
    1200: {
      slidesPerView: 3,
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },


});

// question アコーディオン-----------------

$('.question__text').on('click', function(){
  const findElm = $(this).next(".question__box");
  $(findElm).slideToggle();
  if($(this).hasClass('close')){
  $(this).removeClass('close');
  }else{
    $(this).addClass('close');
  }
})

// form 
jQuery(function ($) {
  $('form[data-validate]').on('input', function () {
    $(this).find(':submit').attr('disabled', !this.checkValidity());
  });
});

// ページトップボタン
jQuery(window).on("scroll",function(){
  if(100 < jQuery(this).scrollTop()){
    jQuery('.footer__top').addClass('is-show');
  }else{
    jQuery('.footer__top ').removeClass('is-show');
  }
});

// ページトップへ戻る
$('.footer__top').click(function(){
  $('body,html').animate({
  scrollTop:0
  },500);
  return false;
  });


// スムーススクロール
jQuery('a[href^="#"]').on('click',function(){
var header = jQuery('header').innerHeight();
var id = jQuery(this).attr('href');
var position = 0
if( id != '#' && window.matchMedia( "(max-width: 540px)" ).matches){
   position = jQuery(id).offset().top - header;
}else if( id != '#'){
  position = jQuery(id).offset().top;
};

jQuery('html,body').animate({
  scrollTop:position
},500);

});