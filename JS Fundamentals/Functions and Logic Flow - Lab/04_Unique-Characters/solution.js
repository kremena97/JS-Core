function solve() {
  let string = document.getElementById('string').value;
  let uniqueChars = '';

  function isCharWhiteSpace(i) {
      if (string[i] == ' '){
          uniqueChars += string[i];
      }
  }
  
  function findUniqueChars(i) {
      if (uniqueChars.indexOf(string[i]) === -1){
          uniqueChars += string[i];
      } 
  }
  
  function isCurrentCharUnique(string) {
      for (i = 0; i < string.length; i++){
          isCharWhiteSpace(i);
          findUniqueChars(i);
      }
  }

  isCurrentCharUnique(string);
  document.getElementById('result').innerHTML = uniqueChars;
}