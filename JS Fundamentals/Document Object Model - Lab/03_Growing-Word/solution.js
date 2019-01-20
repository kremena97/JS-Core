function solve() {
    let buttonElement = document.getElementsByTagName('button').item(0);
    let growingWordElement = document.getElementsByTagName('p').item(2);
    let totalClicks = 0;
    buttonElement.onclick = changeColorAndSize;
    function changeColorAndSize(){
        totalClicks++;
        console.log(totalClicks);
        if (totalClicks%3==1){
            growingWordElement.setAttribute("style", `color:blue; font-size:${totalClicks*2}px ;`);
        }
        else if(totalClicks%3==2){
            growingWordElement.setAttribute("style", `color:green; font-size:${totalClicks*2}px ;`);
        }
        else{
            growingWordElement.setAttribute("style", `color:red; font-size:${totalClicks*2}px ;`);
        }
    }

}