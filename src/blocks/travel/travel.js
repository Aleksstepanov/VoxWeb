import {createCountry} from '../../js/unit/create-country'
document.addEventListener('DOMContentLoaded', function() {
  createCountry('travel__country')
  let elems = document.querySelectorAll('select');
  let instances = M.FormSelect.init(elems, {classes: "travel__country"});
})