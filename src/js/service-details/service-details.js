// Vertical Timeline
(function() {
	'use strict';
  
	// define letiables
	let items = document.querySelectorAll(".timeline li");
	
	function elementInViewport(el) {
	  let rect = el.getBoundingClientRect();
	  return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	  );
	}
  
	function viewport() {
	  for (let i = 0; i < items.length; i++) {
		if (elementInViewport(items[i])) {
		  items[i].classList.add("active");
		}
	  }
	}
  
	// listen for events
	window.addEventListener("load", viewport);
	window.addEventListener("resize", viewport);
	window.addEventListener("scroll", viewport);
  
})();

(function(){
	'use strict';
	let acc = document.querySelectorAll(".accordion .item .heading");
	let i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			let panel = this.nextElementSibling;
			if (panel.style.height === "50px") {
			panel.style.height = "0px";
			} else {
			panel.style.height = "50px";
			}
		});
	}
})();

// SplideJs
(function(){
	document.addEventListener( 'DOMContentLoaded', function () {
		team = new Splide( '#tools-slider',{
			type: 'loop',
			perPage: 3,
			perMove: 1,
			fixedWidth: '348px',
			arrows: false,
			breakpoints: {
				1024:{
					perPage: 2,
				},
				768:{
					perPage: 1,
				}
			}
		} ).mount();
	} );
})();


// Video Js
(function(){
	'use strict';
	videojs('videoPlayer', {
		controls: true,
		fluid: true
	})
})();