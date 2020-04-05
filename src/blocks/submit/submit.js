import {newUser} from '../../js/newUser'
import {Dom} from '../../js/entry/date/DomVariables'
const requestURL = '#' //url для отправки данных на сервер

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
    phone: Dom.country.value
  })
  console.log(user.name)
  console.log(Dom)
}
