
 function register() {
   let createUsernameElement = document.getElementById('username');
   let createEmailElement = document.getElementById('email');
   let createPasswordElement = document.getElementById('password');

   let createUsernameValue = createUsernameElement.value;
   let createEmailValue = createEmailElement.value;
   let createPasswordValue = createPasswordElement.value;

   let regex = /(.+)@(.+).(com|bg)/gm;
   let found = createEmailValue.match(regex);

   if (createUsernameValue && createPasswordValue && found){
     let resultElement = document.getElementById('result');

     let headingElement = document.createElement('h1');
     headingElement.textContent = 'Successful Registration!';

     let username = document.createTextNode(`Username: ${createUsernameValue}`);
    let email = document.createTextNode(`Email: ${createEmailValue}`);
    let password = document.createTextNode(`Password: ${'*'.repeat(createPasswordValue.length)}`);

     let br = document.createElement('br');
     let secondBr = document.createElement('br');

     resultElement.appendChild(headingElement);
     resultElement.appendChild(username);
     resultElement.appendChild(br);
     resultElement.appendChild(email);
     resultElement.appendChild(secondBr);
     resultElement.appendChild(password);

    setTimeout(remove,5000);

    function remove() {
     let resultElement = document.getElementById('result');

     resultElement.innerHTML = '';
    }
     }
 }
