$(function(){

  var idx = 0;
  function motion(start,end,i){

  }

  function motion(start,end,i){
    $('.bg-slide-view li').eq(i).addClass('on').find('div').css({
      left:start,
      'display':'block'
    }).parent().siblings().removeClass();

    if(idx == $('.bg-slide-view li').length){
      idx = 0
      motion('100%',0,idx)
    }else if (idx < 0) {
      idx = $('.bg-slide-view li').length-1;
      motion('-100%',0,idx)
    }
  }

  var inv = setInterval(function(){
    motion(0,'-100%',idx);
    idx ++
    motion('100%',0,idx);
  },4000)

  $('bg-slide-btn a').click(function(){
    var bidx = $('.bg-slide-view li.on').index();
    // 0번 빼기
    idx = $(this).index()-1;

    if(bidx < idx){
      motion(0,'-100%',bidx);
      motion('100%',0,idx);
    }else if(bidx > idx){
      motion(0,'100%',bidx);
      motion('-100%',0,idx);
    }else if (idx == -1) {
      $(this).toggle(function(){

        clearInterval(inv)

      },function(){
        inv = setInterval(function(){
          motion(0,'-100%',idx);
          idx ++
          motion('100%',0,idx);
        },3000)
      })
    }
    return false;

  })
 //slide end
 //hover ef
console.log("@@@@")
  $('.hover-ef li a').mouseenter(function(){
    var idx = $(this).parent().index();
    $(this).find('div').fadeIn("slow");
  }).mouseleave({
    $(this).find('div').fadeOut("slow");
  })






  //끝
})
