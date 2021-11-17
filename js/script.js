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

var navbar = document.getElementById("scrollFix");
var sticky = navbar.offsetTop;
let topnavRight = document.getElementById("slide-right");
let topnavLeft = document.getElementById("slide-left");


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    topnavRight.classList.remove("animation-right");
    topnavLeft.classList.remove("animation-left");
  } else {
    navbar.classList.remove("sticky");
    topnavRight.classList.add("animation-right");
    topnavLeft.classList.add("animation-left");
  }
}

function listCart() {
  var x = document.getElementById("cartItems");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}