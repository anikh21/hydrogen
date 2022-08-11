// Course Tab
(function(){
  const tabs = document.querySelector(".course-tab");
  const tabButton = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".content");

  tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
      tabButton.forEach(btn => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      contents.forEach(content => {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  }
})();

// Filter Categories
(function(){
  const categories = document.querySelectorAll('.category-name');
  const allCat = document.querySelectorAll('.all');

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
  })
})();