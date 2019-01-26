function solve() {
    let chatChronology = document.getElementById('chatChronology');

    document.querySelector('#exercise [name="myBtn"]').addEventListener('click', sendMyMessage);
    document.querySelector('#exercise [name="peshoBtn"]').addEventListener('click', sendPeshoMessage);

    function sendMyMessage() {
        let myChatBox = document.getElementById('myChatBox').value;
        let div = document.createElement('div');
        div.setAttribute('style', 'text-align:left;');
        let span = document.createElement('span');
        span.textContent = 'Me';
        let p = document.createElement('p');
        p.innerHTML = myChatBox;
        div.appendChild(span);
        div.appendChild(p);
        chatChronology.appendChild(div);
        document.getElementById('myChatBox').value = null;
    }
    
    function sendPeshoMessage() {
        let peshoChatBox = document.getElementById('peshoChatBox').value;
        let div = document.createElement('div');
        div.setAttribute('style', 'text-align:right;');
        let span = document.createElement('span');
        span.textContent = 'Pesho';
        let p = document.createElement('p');
        p.innerHTML = peshoChatBox;
        div.appendChild(span);
        div.appendChild(p);
        chatChronology.appendChild(div);
        document.getElementById('peshoChatBox').value = null;
    }
}