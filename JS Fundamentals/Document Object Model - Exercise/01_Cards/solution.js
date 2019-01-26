function solve() {
    let firstPlayerCards = document.getElementById('player1Div').children;
    let secondPlayerCards = document.getElementById('player2Div').children;

    firstPlayerCards[0].addEventListener('click', selectCard);
    firstPlayerCards[1].addEventListener('click', selectCard);
    firstPlayerCards[2].addEventListener('click', selectCard);
    firstPlayerCards[3].addEventListener('click', selectCard);
    firstPlayerCards[4].addEventListener('click', selectCard);
    firstPlayerCards[5].addEventListener('click', selectCard);
    firstPlayerCards[6].addEventListener('click', selectCard);
    firstPlayerCards[7].addEventListener('click', selectCard);

    secondPlayerCards[0].addEventListener('click', selectCard);
    secondPlayerCards[1].addEventListener('click', selectCard);
    secondPlayerCards[2].addEventListener('click', selectCard);
    secondPlayerCards[3].addEventListener('click', selectCard);
    secondPlayerCards[4].addEventListener('click', selectCard);
    secondPlayerCards[5].addEventListener('click', selectCard);
    secondPlayerCards[6].addEventListener('click', selectCard);
    secondPlayerCards[7].addEventListener('click', selectCard);

    let topCard;
    let bottomCard;

    let resultElements = document.getElementById('result').children;
    let firstPlayerResultElement = resultElements[0];
    console.log(firstPlayerResultElement);
    let secondPlayerResultElement = resultElements[2];

    function selectCard() {
        this.valueOf().setAttribute('src', "images/whiteCard.jpg");

        if (this.valueOf().parentElement.id == 'player1Div') {
            topCard = this.valueOf();
            console.log(topCard);
            firstPlayerResultElement.appendChild(document.createTextNode(topCard));
        } else {
            bottomCard = this.valueOf();
            secondPlayerResultElement.appendChild(document.createTextNode(bottomCard));
        }

        if (topCard && bottomCard) {
            if (topCard.name > bottomCard.name){
                let att = topCard.createAttribute('style');
                att.value = '2px solid green';
            }
            else
            {
                let att = bottomCard.createAttribute('style');
                att.value = '2px solid darkred';
            }
        }

    }
}