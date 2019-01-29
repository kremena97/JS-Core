function solve() {
  let arr = JSON.parse(document.getElementById('arr').value);
  let resultElement = document.getElementById('result');
    let ascendingOrder = arr.map(Number).sort(function(a, b){return a - b}).map(String);
  let alphabeticallySort = arr.sort();

  let ascendingDiv = document.createElement('div');
  ascendingDiv.innerHTML = ascendingOrder.join(', ');

  let alphabeticallyDiv = document.createElement('div');
  alphabeticallyDiv.innerHTML = alphabeticallySort.join(', ');

  resultElement.appendChild(ascendingDiv);
  resultElement.appendChild(alphabeticallyDiv);
}