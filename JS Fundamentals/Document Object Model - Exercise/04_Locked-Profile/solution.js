function solve() {
   document.querySelector('#exercise div:nth-child(1) button').addEventListener('click', showMore);
   document.querySelector('#exercise div:nth-child(2) button').addEventListener('click', showMore);
   document.querySelector('#exercise div:nth-child(3) button').addEventListener('click', showMore);

   function showMore() {
      console.log(this.parentElement.children.item(2));
   }

} 