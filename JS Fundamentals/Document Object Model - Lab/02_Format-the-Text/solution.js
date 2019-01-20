function solve(){
    let inputElement = document.getElementById('input');
    let inputValue = inputElement.textContent;

    let sentences = inputValue.split('.');
    console.log(inputValue);
    let paragraphText = '';
    let counter = 0;

    for (const sentence of sentences){
        if (sentence){
            paragraphText += sentence + '.';
            counter++;
        }
        if (counter == 3 || sentence == sentences[sentences.length-1]){
            let paragraphElement = document.createElement('p');
            paragraphElement.textContent = paragraphText;

            let outputElement = document.getElementById('output');
            outputElement.appendChild(paragraphElement);

            paragraphText = '';
            counter = 0;
        }
    }

}