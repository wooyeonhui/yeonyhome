
         $(function(){

             var idx = 0;

             var inters = setInterval(function(){
                 $('.next').trigger('click')
             },3000);

             $('.view').mouseenter(function(){

                 clearInterval(inters)

             }).mouseleave(function(){

                inters = setInterval(function(){
                 $('.next').click();
                 },2000);

             })

             function movement(start,end,i){
                $('.view li').eq(i).addClass('on').find('div').css({
                    left:start,
                    'display':'block'
                }).stop().animate({
                    left:end
                }).parent().siblings().removeClass();

                $('.slide-s span').eq(i).css({
                  'width':'15px',
                  'background-color':'#666'
                }).siblings().css({
                  'width':'9px',
                  'background-color':'#fff'
                })

                if(idx == $('.view li').length){
                    idx = 0
                    movement('100%',0,idx)
                }else if(idx < 0){
                    idx = $('.view li').length -1;
                    movement('-100%',0,idx)
                }
             }

             $('.next').click(function(){
                  console.log(idx)
                movement(0,'-100%',idx);
                idx++
                movement('100%',0,idx);

             })

             $('.prev').click(function(){
                movement(0,'100%',idx);
                idx--
                movement('-100%',0,idx);
             })

             $('.gnb h1').click(function(){

               $(this).find('a').children().attr('image/responsive/close.png')
               console.log('뭐냐 씨발?:'+$(this).find('a').children().attr('src'));
               $(this).siblings().css({
                 top:'-156px'
               })

             })



        //끝
         })
