// SplideJs
document.addEventListener("DOMContentLoaded", function () {
  team = new Splide("#team-slider", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    fixedWidth: "320px",
    arrows: true,
    pagination: false,
    breakpoints: {
      1024: {
        perPage: 2,
      },
      768: {
        perPage: 1,
      },
    },
  }).mount();
});


// Filter Categories
(function(){
  const categories = document.querySelectorAll('.team');
  const allCat = document.querySelectorAll('.member');

  const changeActivePositon = function(activeItem){
    categories.forEach(category => {
      category.classList.remove('active')
      activeItem.classList.add('active')
    })
  }

  const filterItem = function(item){
    changeActivePositon(item)
    allCat.forEach(cat => {
      if(cat.classList.contains(item.attributes.id.value)){
        cat.style.display = 'block'
      }else{
        cat.style.display = 'none'
      }
    })
  }

  categories.forEach(category => {
    category.addEventListener('click', filterItem.bind(this, category))
    if(category.classList.contains('active')){
      addEventListener('load', filterItem.bind(this, category))
    }
  })
})();