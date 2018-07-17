$(window).scroll( function() {
  if($(document).scrollTop() >200) {
      $('.showcase1 >div').addClass('bak1');
  }
  else{
        $('.showcase1 >div').removeClass('bak1');
  }

});
