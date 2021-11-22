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

// text typewriter effect 

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


// Card slider

$('.cardSlider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});