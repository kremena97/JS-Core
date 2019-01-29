function solve() {
  let num = document.getElementById('num').value.toString();
  let arr = JSON.parse(document.getElementById('arr').value);
  let resultArr = [];
  let result = document.getElementById('result');

  for (i = 0; i < arr.length; i++){
      find(arr[i]);
  }

  result.innerHTML = resultArr.join(',');

  function find(arrElement) {
      let index = arrElement.indexOf(num);
      if (index === -1){
          resultArr.push("false -> -1");
      } else{
          resultArr.push(`true -> ${index}`);
      }
  }
}