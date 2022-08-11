
// SplideJs
document.addEventListener( 'DOMContentLoaded', function () {
	team = new Splide( '#team-slider',{
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

	testimonial = new Splide( '#testimonial-slider',{
		type: 'loop',
		perPage: 1,
		perMove: 1,
		arrows: true,
	} ).mount();
} );

var prod = document.getElementsByClassName('prod-card');
var prodCount = prod.length;

function expander() {
	var modal = document.getElementById('modal');
	modal.classList.add('translate-y-0');
}
function closer() {
	var modal = document.getElementById('modal');
	modal.classList.remove('translate-y-0');
}

for(var i in prod){
	prod[i].onclick = function(){
		expander();
	};
}

close = document.getElementById('close');
close.addEventListener('click', closer);