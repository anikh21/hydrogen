// Vertical Timeline
(function () {
    'use strict';

    // define letiables
    let items = document.querySelectorAll('.timeline li');

    function elementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function viewport() {
        for (let i = 0; i < items.length; i++) {
            if (elementInViewport(items[i])) {
                items[i].classList.add('active');
            }
        }
    }

    // listen for events
    window.addEventListener('load', viewport);
    window.addEventListener('resize', viewport);
    window.addEventListener('scroll', viewport);
})();

// Video Js
(function(){
	'use strict';
	videojs('videoPlayer', {
		controls: true,
		fluid: true
	})
})();