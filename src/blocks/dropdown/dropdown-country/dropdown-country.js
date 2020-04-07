import {createCountry} from '../../../js/unit/create-country'
document.addEventListener('DOMContentLoaded', function() {
  createCountry('dropdown-country')
  let elems = document.querySelectorAll('select');
  M.FormSelect.init(elems, {classes: "dropdown dropdown-country"});
})

