$(document).ready(function () {
  $("#hamburger").on('click', function() {
    $(".mobile-nav").toggleClass("is-open");
  });
});


$(document).ready(function () {
  $(".item").on('click', function() {
    $(".mobile-nav").removeClass("is-open");
  });
});



//$(document).ready(function(){
  //$(".nav .item li").each(function(){
    //var href = $(this).find('a').attr('href');
    //if (href === window.location.pathname) {
      //$(this).addClass('active');
    //}
  //});
//});
