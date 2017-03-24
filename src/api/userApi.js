import 'whatwg-fetch';

export function getUsers() {
  return get('users');
}

function get(url){
  return fetch(url).then(onSuccess, onError);
}

funtion onSuccess(response){
  return response.json();
}

funtion onError(error){
  console.log(error); //eslint-disable-line no-console
}