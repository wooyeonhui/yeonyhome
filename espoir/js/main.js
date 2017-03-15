$(window).loard(function(){

  var idx =0;

  //main-slide
  function motion(start,end, i){
   $('.main-slide .main-slide-view li').eq(i).addClass('on').find('div').css({
     left:start
   }).stop().animate({
     left:end
   }).parent().siblings();
   if(idx == $('.main-view li').length){
     idx = 0
     motion('100%',0,idx)
   }else if( idx < 0){
     idx = $('.main-view li').length-1;
     motion('-100%',0,idx)
   }
  }

  $('.main-slide .main-slide-btn a.main-slide-prev').click(function(){
    motion(0,'100%',idx);
    idx--
    $('.main-slide .main-slide-view li').eq(idx).addClass('on')
    motion('-100%',0,idx)
  })
  $('.main-slide .main-slide-btn a.main-slide-next').click(function(){
    motion(0,'-100%',idx);
    idx++
    $('.main-slide .main-slide-view li').eq(idx).addClass('on')
    motion('100%',0,idx);
  })

  var inters = setInterval(function(){
    $('.main-slide-btn a.main-slide-next').trigger('click')
  })

//끝
})
