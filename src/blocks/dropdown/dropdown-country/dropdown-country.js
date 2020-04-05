import {data} from '../../../js/entry/date/dropdown-country.data'
document.addEventListener('DOMContentLoaded', function() {
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

  let elems = document.querySelectorAll('select');
  let instances = M.FormSelect.init(elems, {classes: "dropdown dropdown-country"});
});


