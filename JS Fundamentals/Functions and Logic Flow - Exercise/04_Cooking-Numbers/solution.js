function solve() {
    let input = document.querySelector('#exercise input[type="number"]');
    let output = document.getElementById('output');
    let num;

    function getCurrentNumber() {
        num = +(output.textContent) || input.value;
        return num;
    }


    function attachEvents() {
        let chopButton = document.querySelector('#operations button:nth-child(1)')
            .addEventListener('click', chop);
        let diceButton = document.querySelector('#operations button:nth-child(2)')
            .addEventListener('click', dice);
        let spiceButton = document.querySelector('#operations button:nth-child(3)')
            .addEventListener('click', spice);
        let bakeButton = document.querySelector('#operations button:nth-child(4)')
            .addEventListener('click', bake);
        let filletButton = document.querySelector('#operations button:nth-child(5)')
            .addEventListener('click', fillet);
    }

    attachEvents();

    function chop() {
        num = getCurrentNumber();
        num /= 2;
        output.textContent = num;
    }

    function dice() {
        num = getCurrentNumber();
        num = Math.sqrt(num);
        output.textContent = num;
    }

    function spice() {
        num = getCurrentNumber();
        num = ++num;
        output.textContent = num;
    }

    function bake() {
        num = getCurrentNumber();
        num = num * 3;
        output.textContent = num;
    }

    function fillet() {
        num = getCurrentNumber();
        num *= 0.8;
        output.textContent = num;
    }
}
