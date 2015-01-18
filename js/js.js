$(function(){
  $("#button a").hover(
    function(){
      $("#cn-wrapper").css("-webkit-transform","scale(1)");
    },
   null)
  $("#cn-wrapper").hover(
    null,function(){
      $(this).css("-webkit-transform","scale(0)");
    })
})