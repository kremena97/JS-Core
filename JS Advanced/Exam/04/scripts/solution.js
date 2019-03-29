function solve(){
    $('#kingdom div button').bind('click', rebuildKingdom);
    $('#characters div button').bind('click', joinKingdom);
    let tanksCount = 0;
    let fightesrCount = 0;
    let magesCount = 0;

    function rebuildKingdom(){
        let kingdom = $('#kingdom input')[0].value;
        let kingName = $('#kingdom input')[1].value;
        let kingdomElement = $(`#map div#${kingdom.toLowerCase()}`);
        let h1 = document.createElement('h1');
        h1.innerText = `${kingdom.toUpperCase()}`;
        let div = document.createElement('div');
        div.classList.add(`${kingdom.toLowerCase()}`);
        let h2 = document.createElement('h2');
        h2.innerText = `${kingName.toUpperCase()}`;
        let fieldset = document.createElement('fieldset');

        let legend = document.createElement('legend');
        legend.innerText = 'Army';
        let pThanks = document.createElement('p');
        pThanks.innerText = `TANKS - ${tanksCount}`;
        let pFighters = document.createElement('p');
        pFighters.innerText = `FIGHTERS - ${fightesrCount}`;
        let pMages = document.createElement('p');
        pMages.innerText = `MAGES - ${magesCount}`;
        fieldset.appendChild(legend);
        fieldset.appendChild(pThanks);
        fieldset.appendChild(pFighters);
        fieldset.appendChild(pMages);
        kingdomElement.append(h1);
        kingdomElement.append(div);
        kingdomElement.append(h2);
        kingdomElement.append(fieldset);

        kingdomElement.css('display', 'block');
        console.log(kingdomElement);
    }

    function joinKingdom() {
        let characterType = $('#characters div input:selected').value;
        let character = $('#characters div [placeholder="Character..."]')[0].value;
        let kingdom = $('#characters div [placeholder="Kingdom..."]')[0].value;
        $(`#map div#${kingdom.toLowerCase()}`).classList.add('')
        let kingdomElement = $(`#map div#${kingdom.toLowerCase()} fieldset p`);

        if (characterType === 'mage'){
kingdomElement[2].innerText = `MAGES - ${magesCount}`;
        } else if(characterType === 'tank'){
kingdomElement[1].innerText = `TANK - ${tanksCount}`;
        }else{
            kingdomElement[1].innerText = `FIGHTERS - ${fightesrCount}`;
        }
    }
}

solve();



