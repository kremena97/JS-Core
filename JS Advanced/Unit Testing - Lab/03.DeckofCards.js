function printDeckOfCards(arr) {
    let result = [];
    let invalid = false;
    for (let cardElements of arr) {
        let cardFace = cardElements.slice(0, cardElements.length - 1);
        let cardSuit = cardElements.slice(cardElements.length - 1);

        try {
            let card = makeCard(cardFace, cardSuit);
            result.push(card);
        } catch (error) {
            console.log(`Invalid card: ${cardElements}`);
            invalid = true;
        }
    }
    if (!invalid) {
        console.log(result.join(' '));
    }

    function makeCard(face, suit) {
        debugger;
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        if (!faces.includes(face)) {
            throw new Error('Invalid card face!')
        }

        if (!suits[suit]) {
            throw new Error('Invalid card suit!')
        }

        let card = {
            face: face,
            suit: suits[suit],
            toString: function () {
                return this.face + this.suit
            }
        };

        return card;
    }
}

printDeckOfCards(['5S', '3D', 'QD', '1C']);