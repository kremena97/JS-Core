function solve() {
  let arr = JSON.parse(document.getElementById('arr').value);
  let resultElement = document.getElementById('result');
  let resultArr = [];

  for (let i = 0; i < arr.length; i++){
      let reversed = arr[i].split('').reverse();
      reversed = reversed.join('');
      reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1);
      resultArr.push(reversed);
  }

  resultElement.innerHTML = resultArr.join(' ');
}