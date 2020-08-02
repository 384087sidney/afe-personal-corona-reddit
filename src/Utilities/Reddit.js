export function getAcessToken(){

  var xhr = new XMLHttpRequest(); 
  xhr.open('POST', 'https://www.reddit.com/api/v1/access_token', false);
  xhr.setRequestHeader('Authorization','Basic d2VrallBYTlkdlBHUHc6WTlkQ3BsTUREcWotRUpxMm9hajdHYklWMG5V');

  var formData = new FormData();
  formData.append("grant_type", "password");
  formData.append("username", "AggravatingAd1182");
  formData.append("password", "testeteste");  

  xhr.send(formData)
  
  var retorno = JSON.parse(xhr.responseText);  
  return retorno.access_token;
} 

export function getCoronaBR(){

  var token = getAcessToken();
  
  var xhr = new XMLHttpRequest(); 
  xhr.open('GET', 'https://oauth.reddit.com/r/coronabr/hot?limit=5', false);
  xhr.setRequestHeader('Authorization','bearer ' + token);
 
  xhr.send()
  
  var retornoObj = JSON.parse(xhr.responseText);
  return retornoObj.data.children;
}
 

export function getCoronaALL(){

  var token = getAcessToken();
  
  var xhr = new XMLHttpRequest(); 
  xhr.open('GET', 'https://oauth.reddit.com/r/corona/hot?limit=5', false);
  xhr.setRequestHeader('Authorization','bearer ' + token);
 
  xhr.send()
  
  var retornoObj = JSON.parse(xhr.responseText);
  return retornoObj.data.children;
}