$(function(){

  var idx =0;
  var bidx =1;
  //-----bg-fade-in&out
  $('.bg-slide-view li').eq(0).addClass('on');
  $('.bg-slide-btn a').eq(1).addClass('on');


  function gofade(){
    console.log('idx 1 :'+idx);
    $('.bg-slide-view li').eq(idx).fadeIn(500).animate({},3000).fadeOut(500)
    idx ++
    if(idx ==  $('.bg-slide-view li').length){
      idx = 0
    }
  }
  var inter = setInterval(function(){
    gofade()
    console.log('idx 2 :'+idx);
  },4000)

  //----hover-effect
  $('.hover-ef li').mouseenter(function(){
    $(this).children('a').find('div').fadeIn(1000)
  }).mouseleave(function(){
    $(this).children('a').find('div').fadeOut(1000)
  })


  //끝
})
