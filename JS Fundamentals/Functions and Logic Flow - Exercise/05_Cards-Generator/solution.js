function solve() {
    document.querySelector('#exercise button').addEventListener('click', generateCards);

    function generateCards(){
        let startingCard = document.getElementById('from').value;
        let endingCard = document.getElementById('to').value;
        let suit = document.querySelector('#exercise select').value;
        let result = document.getElementById('cards');
        let cardsValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let startingIndex = cardsValues.indexOf(startingCard);
        let endingIndex = cardsValues.indexOf(endingCard);
        let index = startingIndex;

        if (cardsValues.indexOf(startingCard) <= cardsValues.indexOf(endingCard)){
            while(index >= index && index <= endingIndex){
                let div = document.createElement('div');
                div.setAttribute('class', 'card');
                let unicodeChar = suit[suit.length-1];
                let pUnicodeChar = document.createElement('p');
                let p = document.createElement('p');
                pUnicodeChar.textContent = unicodeChar;
                p.textContent = unicodeChar;
                let pCardValue = document.createElement('p');
                pCardValue.textContent = cardsValues[index];

                div.appendChild(pUnicodeChar);
                div.appendChild(pCardValue);
                div.appendChild(p);
                result.appendChild(div);

                index++;
            }
        }
    }

}