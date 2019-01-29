function solve() {
  let arr = JSON.parse(document.getElementById('arr').value);
  let result = document.getElementById('result');
  let indexes = [];

  for (i = 0; i < arr.length; i++) {
      if (i %2 == 0){
        indexes.push(arr[i]);
      }
  }

  result.innerHTML = indexes.join(' x ');
}