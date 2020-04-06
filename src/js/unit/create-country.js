import {data} from '../entry/date/dropdown-country.data'
export function createCountry(selectName) {
            data.forEach((elem) => {
            let group = document.createElement('optgroup')
            group.label = elem.continent
            document.querySelector(`.${selectName}`).append(group)
            elem.country.forEach((elem) => {
              let option = document.createElement('option')
              option.text = elem
              option.value = elem
              document.querySelector(`.${selectName} > optgroup:last-child`).append(option)
            })
          })
    }
