
const table = document.querySelector('.table');
const checkboxes = document.querySelectorAll(".check-field");
const mainCheckbox = document.querySelector(".check-field_main");
const specificCheckbox = document.querySelectorAll(".check-field_specific");
const icons = document.querySelectorAll(".icon-picture");
let arr = [... specificCheckbox];

const Mark = function(event){
  if(event.target.classList.contains('check-field')){
    event.target.classList.toggle('check-field_active');
  }
  if(event.target.classList.contains('check-field') && event.target.classList.contains('check-field_active') == false){
    mainCheckbox.classList.remove('check-field_active')
  }
  if(event.target.classList.contains('check-field_active')){
    event.target.parentNode.parentNode.classList.add('paint')
  }else{
    event.target.parentNode.parentNode.classList.remove('paint')
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
      checkboxes[i].parentNode.parentNode.classList.add('paint')
    }else{
      checkboxes[i].parentNode.parentNode.classList.remove('paint')
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
const Illumination = function(event){
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

ChangeBckg()
table.addEventListener('click', Mark )
table.addEventListener('click', Favourites )
table.addEventListener('mouseover', Illumination )
/* for(let i=0; i<icons.length; i++){
  icons[i].addEventListener('mouseover', Illumination )
} */

