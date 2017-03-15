$(function(){
  console.log("꺄르륽");

  var idx =0;

  //main-slide
  $('.slide .slide-view li').eq(0).addClass('on');

  function motion(start,end,i){
    $('.slide .slide-view li').eq(i).addClass('on').find('div').css({
      left:start,
      'display':'block'
    }).stop().animate({
      left:end
    }).parent().siblings().removeClass();

    if(idx == $('.slide .slide-view li').length){
      idx = 0
      motion('100%',0,idx)
    }else if (idx < 0) {
      idx = $('.slide .slide-view li').length-1;
      motion('-100%',0,idx)
    }
  }

  $('.slide-btn .next').click(function(){
    console.log("next!");
    motion(0,'-100%',idx)
    idx++
    motion('100%',0,idx)
    console.log(idx);
  })
  $('.slide-btn .prev').click(function(){
    console.log("prev!");
    motion(0,'100%',idx);
    idx--
    motion('-100%',0,idx);
  })

  var inter = setInterval(function(){
    $('.slide-btn .next').tigger('click')
  },4000);

  $('.slide .slide-view li').mouseenter(function(){
    clearInterval(inter)
  }).mouseleave(function(){
    inter = setInterval(function(){
      $('.slide-btn .next').click();
    },2000);
  })

  //super-grid-more
  var moreview =1;
  $('.releases-super-grid div.more-view').click(function(){
    $('.releases-super-grid>ul').eq(idx).css('display','block')
    moreview ++;
    if(moreview > 4){
      moreview == 3;
    }
    return false
  })


})
