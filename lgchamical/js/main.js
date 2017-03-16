$(function(){

  var idx = 0;

  // menu-nav
  $('header nav').find('a').click(function(){
   $('header nav > div').css({
     'display':'block',
     'height':0
 }).animate({
     top:0,
     'height':'100%'
   },700)

   console.log('menu!');
  })
  $('header nav .menu-wrapper > div >a').click(function(){
    $('header nav > div').css('display','none')
  })
  //--bg-fade
  var  gofade = function(){

    idx++
    $('.bg-slide-view li').stop().fadeOut(500,function(){

      $('.bg-slide-btn .on').eq(idx).css(
        'background-image','url("image/slide-unselect.png")'
      ).siblings().css(
        'background-image','url("image/slide-select.png")'
      ).parent().find('.sp').css(
        'background-image','url("image/slide-pause.png")'
      )

      $('.bg-slide-view li').eq(idx).stop().fadeIn(500)
    })

    if(idx == $('.bg-slide-view li').length){
      idx = 0;
    }

  }
  var inter = setInterval(gofade,4000)

  // $('.bg-slide-btn a')

  //----hover-effect
  $('.hover-ef li').mouseenter(function(){
    $(this).children('a').find('div').fadeIn(700)
  }).mouseleave(function(){
    $(this).children('a').find('div').fadeOut(700)
  })
  //---
  function start(){

    console.log('start');

   var idx = 0;
   for(idx = 0; idx < $('.hover-ef li').length; idx ++){
      $('.hover-ef li').eq(idx).children().find('div').css({
        'top':'-500px',
        'display':'block'
    }).animate({
      top:'-200px'
    },1000).delay(3000)
    console.log(idx);
    }
 }

    start();

  //끝
})
