import {newUser} from '../../js/newUser'
import {Dom} from '../../js/entry/date/DomVariables'
const requestURL = 'http://jsonplaceholder.typicode.com/users' //url для отправки данных на сервер

function sendRequest(method, url, body=null) {
  return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.responseType = 'json';
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response);
        }
        else {
          resolve(xhr.response);
        }
      xhr.onerror = () => {
        reject(xhr.response);
      }
      }		
      xhr.send(JSON.stringify(body));
  })
  
}

document.querySelector('.submit').addEventListener('click', submitClickHandler)
function submitClickHandler(event) {
  event.preventDefault();
  const user = new newUser({
    name : Dom.name.value,
    phone: Dom.phone.value,
    country: Dom.country.value,
    date: Dom.date.date,
    social: {
              'viber': Dom.viber.checked, 
              'whatsupp': Dom.whatsupp.checked, 
              'mail': Dom.mail.checked, 
              'mobile': Dom.mobile.checked
            },
    about: {
              'internet': Dom.internet.checked,
              'friend': Dom.friend.checked,
              'network': Dom.networks.checked,
              'client': Dom.client.checked
            },
    news: {'news': Dom.data.checked},
    personal: {'personal': Dom.personal.checked}
  })
  if (!user.isValidName()) {
    document.querySelector('.user__error').style.display = 'block'
    Dom.name.style.border = '1px solid #CB0037'
  }
  if (!user.isValidCountry()) {
    document.querySelector('.travel__error').style.display = 'block'
    document.querySelector('.travel__country-error').style.border = '2px solid #CB0037'
  }
  if (!user.personal.personal) {
    M.toast({html: 'Необходимо дать согласие на обработку персональных данных!'})
  }
  
  if (user.isValidName() && user.personal.personal && user.isValidCountry()) {
    sendRequest('POST', requestURL, user)
    console.log(user)
    M.toast({html: 'Ваша заявка отправлена'})
  }
 
}
