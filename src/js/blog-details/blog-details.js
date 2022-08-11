let scrollpos = window.scrollY;
let socialBtns = $(".cb-social-share-buttons ul");
let demo = $(".demo-wrapper");

window.addEventListener('scroll', function(){ 
    scrollpos = window.scrollY;

    if(scrollpos > 500){
        socialBtns.classList.add('active')
        demo.classList.add('active')
    }
    else {
        socialBtns.classList.remove('active')
        demo.classList.remove('active')
    }
});