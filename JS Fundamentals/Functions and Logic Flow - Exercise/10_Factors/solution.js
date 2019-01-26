function solve() {
  let number = Number(document.getElementById('num').value);
  let result = document.getElementById('result');

  let factors = [];

  for (i = 1; i <= number; i++) {
      if (number % i == 0){
          factors.push(i);
      }
    }
    result.textContent = factors.join(' ');
}