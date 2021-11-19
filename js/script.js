// $(document).ready(function() { 
// 	var navpos = $('.navbar').offset(); 
// 	console.log(navpos.top); 
// 	$(window).bind('scroll', function() { 
// 		if ($(window).scrollTop() > navpos.top) { 
// 			$('secondNav').addClass('fixed'); 
// 		} 
// 			else { $('secondNav').removeClass('fixed'); 
// 		} 
// 	}); 
// });

window.onscroll = function() {myFunction()};

let navbar = document.getElementById("scrollFix");
let sticky1 = navbar.offsetTop;
let topnavRight = document.getElementById("slide-right");
let topnavLeft = document.getElementById("slide-left");

// let slideDown = document.getElementById("scrollNav");
// let slideDdown = document.getElementsByTagName("nav");

function myFunction() {
  if (window.pageYOffset > sticky1) {
    navbar.classList.add("sticky");
    topnavRight.classList.remove("animation-right");
    topnavLeft.classList.remove("animation-left");
  } else {
    
    // slideDdown.classList.add("nav-animation");
    topnavLeft.classList.add("animation-left");
    topnavRight.classList.add("animation-right");
    setTimeout(function () {
      // $("#header").removeClass("hidden");
      navbar.classList.remove("sticky");
    }, 1700);


  }
}

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
//     document.getElementById("scrollNav").style.top = "0px";
    
//     // setTimeout(function () {
//       // document.getElementById("scrollNav").style.top = "-140px";
//       // }, 2000);
//     } 
//     else {
//     document.getElementById("scrollNav").style.top = "210px";
//   }
// }


function listCart() {
  var x = document.getElementById("cartItems");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}