function leapYear() {

   document.querySelector("button").addEventListener('click', check);

   function check() {
       let year = document.getElementsByTagName('input')[0].value;
       document.getElementsByTagName('input')[0].value = '';
       let result = document.getElementById('year').children;
       let isLeapResult = result[0];
       let yearResult = result[1];

       function isLeapYear(year)
       {
           return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
       }

       let leap = isLeapYear(year);

       if (leap){
           isLeapResult.innerHTML = 'Leap Year';
           yearResult.innerHTML = year;
       }else {
           isLeapResult.innerHTML = 'Not Leap Year';
           yearResult.innerHTML = year;
       }
   }
}