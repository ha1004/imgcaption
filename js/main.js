//첫번째줄
$('.first .item').on('mouseenter',function() {
  $(this).find('.area').stop().animate({opacity:1},300)
  $(this).addClass('active');

})
.on('mouseleave',function(){
  $(this).find('.area').stop().animate({opacity:''},400)
  $(this).removeClass('active');
})
//두번째줄 - 왼족에서 가운데로
$('.second .item').on('mouseenter', function(){
  $(this).find('.area').stop().animate({left:0},400,'easeOutQuint');
  $(this).addClass('active');
})
.on('mouseleave', function(){
  $(this).find('.area').animate({left:'-100%'},400,'easeInOutExpo');
  $(this).removeClass('active');
})

// 세번째 줄 .third -글씨만 중앙에서 나타남
// 세번째 줄 .third -글씨만 중앙에서 나타남
$('.third .item').on('mouseenter', function(){
  $(this).find('p').stop().delay(300).animate({bottom:0},400,'easeOutCirc');
  $(this).addClass('active');
  
})
.on('mouseleave', function(){
  $(this).find('p').stop().animate({bottom:'-70px'},400,'easeInOutExpo');
  $(this).removeClass('active');
})
//
$('.four .item').on('mouseenter', function(){
  $(this).find('p').stop().delay(300).animate({bottom:0},400,'easeOutCirc');
  $(this).addClass('active');
  
})
.on('mouseleave', function(){
  $(this).find('p').stop().animate({bottom:'70px'},400,'easeInOutExpo');
  $(this).removeClass('active');
})
