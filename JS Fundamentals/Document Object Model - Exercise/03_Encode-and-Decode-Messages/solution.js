function solve() {
	document.querySelector('#exercise div:nth-child(1) button').addEventListener('click', encodeMessage);
	document.querySelector('#exercise div:nth-child(2) button').addEventListener('click', decodeMessage);

	let receivedMessage = document.querySelector('#exercise div:nth-child(2) textarea');

	function encodeMessage() {
		let message = document.querySelector('#exercise div:nth-child(1) textarea').value.toString();
		let encodedMessage = '';

		for (i = 0; i < message.length; i++){
			let char = message.charCodeAt(i);
			encodedMessage += String.fromCharCode(char +1);
		}
		receivedMessage.value = encodedMessage;
		document.querySelector('#exercise div:nth-child(1) textarea').value = null;
	}

	function decodeMessage() {
		let decodedMessage = '';
		for (i = 0; i < receivedMessage.value.length; i++){
			let char = receivedMessage.value.charCodeAt(i);
			decodedMessage += String.fromCharCode(char -1);
		}
		receivedMessage.value = decodedMessage;
	}
}