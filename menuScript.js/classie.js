/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

// menu 2
var body = document.querySelector( 'body' );
$('.menu, .navigator-on').click(function(){
      if ($('.menu').hasClass('active')) {
          $('.navigator-on').removeClass('active');
          $('.navigator-on').delay(800).fadeOut('slow');
          $("body").removeClass('active')
          setTimeout(function() {
              $('.menu').removeClass('active');
              document.onmousewheel=document.onwheel=function(){
                return true;
              };
              // $('body').removeClass('active');
              $('.section-wrap').removeClass('active');
          }, 500);
      } else {
          $('.menu').addClass('active');
          document.onmousewheel=document.onwheel=function(){
            return false;
          };
          // $('body').addClass('active');
          $('.navigator-on').fadeIn('slow');
          $('.navigator-on').addClass('active');
          $('.navigator-on').addClass('active');
          $('.section-wrap').addClass('active');
      }
  });
