function solve() {
  let string = document.getElementById('string').value;
  let char = document.getElementById('character').value;
  let result = '';
  let count = 0;
  
  function charactersCount(string, char) {
      for (i = 0; i < string.length; i++){
          if (string[i] == char){
              count++;
          }
      }
  }
  
  function evenOrOdd() {
      if (count % 2 == 0){
          result = `Count of ${char} is even.`;
      }
      else{
          result = `Count of ${char} is odd.`;
      }
  }
  charactersCount(string,char);
  evenOrOdd();
  document.getElementById('result').innerHTML = result;
}

