function solve() {
  let arr = JSON.parse(document.getElementById('arr').value);
  let result = document.getElementById('result');

  for (let i = 0; i < arr.length; i++){
      let prod = +arr[i] * arr.length;
      let p = document.createElement('p');
      p.innerHTML = `${i} -> ${prod}`;
      result.appendChild(p);
  }
}