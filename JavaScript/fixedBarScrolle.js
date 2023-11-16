// $(window).on('scroll', function() {
//   var st = $(this).scrollTop();
//   var sb = $(this).scrollBottom();
//   var bar = document.getElementById('scrollsDown');
//   var scrolle = 0
// console.log(st);
// if(st-1){
//   bar.classList.add("active");
//   console.log("on");
// }else if(sb){
//   bar.classList.remove("active");
//   console.log("off");
// }
//
//
//  });









 //
 // $(function(){
 //
 //   var CurrentScroll = 0;
 //   $(window).scroll(function(event){
 //
 //       var NextScroll = $(this).scrollTop();
 //       var bar = document.getElementById('header-background');
 //
 //       if (NextScroll > CurrentScroll){
 //          bar.classList.remove("active");
 //       }
 //       else {
 //          bar.classList.add("active");
 //       }
 //
 //       if(NextScroll < 30){
 //         bar.classList.remove("active");
 //       }
 //
 //       CurrentScroll = NextScroll;  //Updates current scroll position
 //   });
 // });







// window.addEventListener("scroll", topBar);
// var bar = document.getElementById('scrollsDown');
// var scr = document.documentElement.scrollTop;
// console.log(scr);
// function topBar(){
//   if (document.documentElement.scrollTop --) {
//     bar.classList.add("active");
//
//   }else if(document.documentElement.scrollTop ++){
//     bar.classList.remove("active");
//
//   }
// }


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.background').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.background').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.background').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');
})
