function solve() {
   document.querySelector('#exercise div:nth-child(1) button').addEventListener('click', showMore);
   document.querySelector('#exercise div:nth-child(2) button').addEventListener('click', showMore);
   document.querySelector('#exercise div:nth-child(3) button').addEventListener('click', showMore);

   function showMore() {
      let lock = this.parentElement.children.item(2);
      let unlock = this.parentElement.children.item(4);
      if (unlock.checked){
         let hiddenDiv = this.parentElement.children.item(9);
         hiddenDiv.style.display = 'block';
         this.innerText = 'Hide it';
         his.addEventListener('click', hideIt);

         function hideIt(){
            if (unlock.checked) {
               hiddenDiv.style.display = 'none';
               this.innerText = 'Show more';
            }
         }
      }
   }

} 