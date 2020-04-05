import {data} from './dropdown-country.data'
let countryTour = document.querySelector('.dropdown-country')
data.forEach((elem) => {
  let group = document.createElement('optgroup')
  group.label = elem.continent
  countryTour.append(group)
  elem.country.forEach((elem) => {
    let option = document.createElement('option')
    option.text = elem
    option.value = elem
    document.querySelector('.dropdown-country > optgroup:last-child').append(option)
  })
})

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});


