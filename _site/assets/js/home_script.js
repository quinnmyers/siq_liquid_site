$(document).ready(function () {
  $(".x-button").on('click',function() {
     $(".home-cta").hide("slide", { direction: "left" }, 500);
  });
});

if ($(window).width() > 550) {
  $(document).ready(function () {
    $(".bottle1").mouseenter(function () {
      document.getElementById('name1').style.display = 'flex';
    });
    $(".bottle1").mouseleave(function () {
      document.getElementById('name1').style.display = 'none';
    });
  });
}


$(document).ready(function () {
  $(".bottle2").mouseenter(function () {
    document.getElementById('name2').style.display = 'flex';
  });
  $(".bottle2").mouseleave(function () {
    document.getElementById('name2').style.display = 'none';
  });
});

$(document).ready(function () {
  $(".bottle3").mouseenter(function () {
    document.getElementById('name3').style.display = 'flex';
  });
  $(".bottle3").mouseleave(function () {
    document.getElementById('name3').style.display = 'none';
  });
});

$(document).ready(function () {
  $(".bottle4").mouseenter(function () {
    document.getElementById('name4').style.display = 'flex';
  });
  $(".bottle4").mouseleave(function () {
    document.getElementById('name4').style.display = 'none';
  });
});

$(document).ready(function () {
  $(".bottle5").mouseenter(function () {
    document.getElementById('name5').style.display = 'flex';
  });
  $(".bottle5").mouseleave(function () {
    document.getElementById('name5').style.display = 'none';
  });
});

$(document).ready(function () {
  $(".bottle6").mouseenter(function () {
    document.getElementById('name6').style.display = 'flex';
  });
  $(".bottle6").mouseleave(function () {
    document.getElementById('name6').style.display = 'none';
  });
});

$(document).ready(function () {
  setTimeout(function(){
    $(".home-cta").fadeIn(2000);
  }, 500)
});




$(document).ready(function () {
  $(".bottle1").on('click', function(toggle_visibility) {
    $('.desc').hide();
    $(".home-cta").hide();
    var e = document.getElementById('orange');
    if(e.style.display == 'flex')
       e.style.display = 'none';
    else
       e.style.display = 'flex';
  });
  $(".bottle2").on('click', function(toggle_visibility) {
    $('.desc').hide();
    $(".home-cta").hide();
    var e = document.getElementById('yellow');
    if(e.style.display == 'flex')
       e.style.display = 'none';
    else
       e.style.display = 'flex';
  });
  $(".bottle3").on('click', function(toggle_visibility) {
    $('.desc').hide();
    $(".home-cta").hide();
    var e = document.getElementById('green');
    if(e.style.display == 'flex')
       e.style.display = 'none';
    else
       e.style.display = 'flex';
  });
  $(".bottle4").on('click', function(toggle_visibility) {
    $('.desc').hide();
    $(".home-cta").hide();
    var e = document.getElementById('purple');
    if(e.style.display == 'flex')
       e.style.display = 'none';
    else
       e.style.display = 'flex';
  });
  $(".bottle5").on('click', function(toggle_visibility) {
    $('.desc').hide();
    $(".home-cta").hide();
    var e = document.getElementById('white');
    if(e.style.display == 'flex')
       e.style.display = 'none';
    else
       e.style.display = 'flex';
  });
  $(".bottle6").on('click', function(toggle_visibility) {
    $('.desc').hide();
    $(".home-cta").hide();
    var e = document.getElementById('black');
    if(e.style.display == 'flex')
       e.style.display = 'none';
    else
       e.style.display = 'flex';
  });
});





$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
