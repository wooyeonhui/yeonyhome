$(function(){

  var idx =0;

  //---nav-icon
  console.log('hello?');
  $('nav .nav ul li').mouseenter(function(){
    $(this).find('>div').css('display','block').stop().animate({
      'height':'594px'
    },1000)
  })

  $('nav .nav ul li > div').mouseleave(function(){
    $(this).stop().animate({
      'height':0
    })
  })

  //---algrid-right-s
  function motion(start,end,i){
    $('.algrid-right-s-view li').css({
      left:start
    }).stop().animate({
      left:end
    }).parent().siblings().removeClass()

    if(idx == $('.algrid-right-s-view li').length){
      idx = 0
      motion('50%',0,idx)
    }else if (idx < 0) {
      idx = $('.algrid-right-s-view li').length-1;
      motion('-50%',0,idx)
    }
  }
  $('.algrid-right-s-btn a').eq(0).click(function(){
    motion(0,'-50%',idx);
    idx++
    motion('50%',0,idx)
    console.log('next');
  })
  $('.algrid-right-s-btn a').eq(1).click(function(){
    motion(0,'-100%',idx)
    idx--
    motion('-100%',0,idx)
    console.log('prev');
  })


  function gradation(){
    $('#main .gradation div').animate({
      left:'-2628px'
    },7777).animate({
      left:'2628px'
    },7777)
  }

  gradation();
  // 끝
})
