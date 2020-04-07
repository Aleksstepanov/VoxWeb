import {newUser} from './newUser'
import {Dom} from './entry/date/DomVariables'


Dom.name.addEventListener('blur', () => {
  const Inputs = new newUser ({
    name : Dom.name.value
  })
  if (Inputs.isValidName()) {
    Dom.name.style.border = '1px solid #e7e7e7'
    document.querySelector('.user__error').style.display = 'none'
  }
})

Dom.country.addEventListener('change', () => {
  console.log('event')
  const Inputs = new newUser ({
    country : Dom.country.value
  })
  document.querySelector('.travel__country-error').style.border = '1px solid #e7e7e7'
  document.querySelector('.travel__error').style.display = 'none'
 
})
