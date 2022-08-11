let acc = document.querySelectorAll(".accordion .item .heading");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.height === "80px") {
      panel.style.height = "0px";
    } else {
      panel.style.height = "80px";
    }
  });
}

// SplideJs
document.addEventListener( 'DOMContentLoaded', function () {
	testimonial = new Splide( '#employees',{
		type: 'loop',
		perPage: 1,
		perMove: 1,
		arrows: true,
    pagination: false
	} ).mount();
} );