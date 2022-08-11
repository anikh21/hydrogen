function selector(el) {
    return document.querySelector(el);
}

// Scroll To Top
(function () {
    let header = selector('header'),
        clickToTop = selector('.scroll-progress'),
        path = selector('.scroll-progress path');
    let totalLength = path.getTotalLength();

    function calculate() {
        let cal = document.documentElement.scrollTop,
            r = document.documentElement.scrollHeight - window.innerHeight,
            i = totalLength - (cal * totalLength) / r;
            path.style.strokeDashoffset = i;
    }

    window.onscroll = function () {
        calculate();
        let scrollTop = window.pageYOffset || document.body.scrollTop;
        scrollTop > header.offsetHeight
            ? selector('.scroll-progress').classList.add('progressing')
            : selector('.scroll-progress').classList.remove('progressing');
    };

    clickToTop.onclick = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };
})();