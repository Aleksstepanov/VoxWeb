import {data} from './dropdown-type.data'
document.addEventListener('DOMContentLoaded', function() {
  let typeTour = document.querySelector('.dropdown-type')
  data.forEach((elem) => {
    let option = document.createElement('option')
    option.text = elem
    option.value = elem
    typeTour.append(option)
    })

  let elems = document.querySelectorAll('.dropdown-type');
  let instances = M.FormSelect.init(elems, {classes: "dropdown dropdown-type"});
});


