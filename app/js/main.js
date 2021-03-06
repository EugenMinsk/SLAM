
const table = document.querySelector('.table');
const checkboxes = document.querySelectorAll(".check-field");
const mainCheckbox = document.querySelector(".check-field_main");
const specificCheckbox = document.querySelectorAll(".check-field_specific");
const icons = document.querySelectorAll(".icon-picture");
const arrows = document.querySelectorAll(".arrow-picture");
let arr = [... specificCheckbox];

const Mark = function(event){
  if(event.target.classList.contains('check-field')){
    event.target.classList.toggle('check-field_active');
  }
  if(event.target.classList.contains('check-field') && event.target.classList.contains('check-field_active') == false){
    mainCheckbox.classList.remove('check-field_active')
  }
  if(event.target.classList.contains('check-field_active')){
    let parentString = event.target.closest('.string')
    let stringCategory = parentString.querySelector('.cell_category')
    let stringEstimation = parentString.querySelector('.cell_estimation')
    parentString.classList.add('paint')
    stringCategory.classList.add('paint')
    stringEstimation.classList.add('paint')
  }else{
    let parentString = event.target.closest('.string')
    let stringCategory = parentString.querySelector('.cell_category')
    let stringEstimation = parentString.querySelector('.cell_estimation')
    parentString.classList.remove('paint')
    stringCategory.classList.remove('paint')
    stringEstimation.classList.remove('paint')
  }
  if(event.target.classList.contains('check-field_main')){
    if(event.target.classList.contains('check-field_active')){
      for(let i= 0; i<checkboxes.length; i++){
        checkboxes[i].classList.add('check-field_active')
      }
    }else{
      for(let i= 0; i<checkboxes.length; i++){
        checkboxes[i].classList.remove('check-field_active')
      }
    }
  }
  let result = arr.filter(element=>element.classList.contains('check-field_active') );

  if(result.length === arr.length){
    mainCheckbox.classList.add('check-field_active')
  }

  ChangeBckg()
}
const ChangeBckg =function(){
  for(let i= 0; i<checkboxes.length; i++){
    if(checkboxes[i].classList.contains('check-field_active')){
       /* checkboxes[i].parentNode.parentNode.classList.add('paint') */
       let parentString = checkboxes[i].closest('.string')
       let stringCategory = parentString.querySelector('.cell_category')
       let stringEstimation = parentString.querySelector('.cell_estimation')
       parentString.classList.add('paint')
       stringCategory.classList.add('paint')
       stringEstimation.classList.add('paint')
       
    }else{
     /*  checkboxes[i].parentNode.parentNode.classList.remove('paint') */

      let parentString = checkboxes[i].closest('.string')
      let stringCategory = parentString.querySelector('.cell_category')
      let stringEstimation = parentString.querySelector('.cell_estimation')
      parentString.classList.remove('paint')
      stringCategory.classList.remove('paint')
      stringEstimation.classList.remove('paint')
    }
  }
}
const Favourites = function(event){
  if(event.target.classList.contains('star-path')){
    event.target.parentNode.parentNode.classList.toggle('star_active')
  }
  if(event.target.classList.contains('star-picture')){
    event.target.parentNode.classList.toggle('star_active')
  }
}
const IlluminationPicture = function(event){
  if(event.target.classList.contains('icon-picture')){
    let typeIcon =event.target.getAttribute('type')
    for(let i=0; i<icons.length; i++){
      
      if(icons[i].getAttribute('type') === typeIcon){
        icons[i].classList.add('icon-picture_focused')
      }else{
        icons[i].classList.remove('icon-picture_focused')
      }
    }
  }else{
    for(let i=0; i<icons.length; i++){
      icons[i].classList.remove('icon-picture_focused')
    }
  }
}
const DropdDown = function(){
  this.classList.toggle('arrow-picture_active')

  let nearestTbody = this.closest('tbody') 
  let nextTbody = nearestTbody.nextElementSibling
/*   console.log(nextTbody);
 */  nextTbody.classList.toggle('dropdown_visible')
}

const showTable = function(){
  document.querySelector('.container').classList.add('active')
  document.querySelector('.preloader').classList.add('hidden')
}

setTimeout (showTable, 3000)
ChangeBckg()
table.addEventListener('click', Mark )
table.addEventListener('click', Favourites )
table.addEventListener('mouseover', IlluminationPicture )
for(let i=0; i<arrows.length; i++){
  arrows[i].addEventListener('click', DropdDown )
}











//???????????????????????????? ????????????
(function() {
  function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.querySelector('.wrapper-table').scrollLeft -= (delta*10); // Multiplied by 10
      e.preventDefault();
  }
  if (document.querySelector('.wrapper-table').addEventListener) {
      // IE9, Chrome, Safari, Opera
      document.querySelector('.wrapper-table').addEventListener("mousewheel", scrollHorizontally, false);
      // Firefox
      document.querySelector('.wrapper-table').addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
      // IE 6/7/8
      document.querySelector('.wrapper-table').attachEvent("onmousewheel", scrollHorizontally);
  }

})();



