function validate() {
    document.getElementsByTagName('button')[0].addEventListener('click', getEGN);

    function getEGN() {
        let year = document.getElementById('year').value;
        let month = document.getElementById('month').value;
        let date = document.getElementById('date').value;
        let femaleElement = document.getElementById('female');
        let maleElement = document.getElementById('male');
        let regionalCode = document.getElementById('region').value;
        let EGN = '';

        year = year.slice(2, 4);
        EGN += year;
        document.getElementById('year').value = null;

        month = getMonth(month);
        EGN += month;
        document.getElementById('month').value = null;

        if (date.length === 1) {
            EGN += '0' + date;
        } else {
            EGN += date;
        }
        document.getElementById('date').value = null;

        if (regionalCode.length === 3) {
            regionalCode = regionalCode.slice(0, 2);
            EGN += regionalCode;
        } else {
            EGN += regionalCode;
        }
        document.getElementById('region').value = null;

        if (femaleElement.checked) {
            EGN += '1';
            femaleElement.checked = false;
        } else if (maleElement.checked){
            EGN += '2';
            maleElement.checked = false;
        }

        let lastDigit = getLastDigit(EGN);
        if (lastDigit === 10) {
            EGN += '0';
        } else {
            EGN += lastDigit;
        }

     document.getElementById('egn').innerHTML = `Your EGN is: ${EGN}`;
    }

    function getMonth(month) {
        switch (month) {
            case 'January':
                return '01';
            case 'February':
                return '02';
            case 'March':
                return '03';
            case 'April':
                return '04';
            case 'May':
                return '05';
            case 'June':
                return '06';
            case 'July':
                return '07';
            case 'August':
                return '08';
            case 'September':
                return '09';
            case 'October':
                return '10';
            case 'November':
                return '11';
            case 'December':
                return '12';
            default:
                return '00';
        }


    }
    function getLastDigit(EGN) {
        console.log(EGN);
        let EGNstr = EGN.toString().split('');
        console.log(EGNstr);
        let digits = EGNstr.map(Number);
        console.log(digits);
        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        let sum = 0;

        for (let i = 0; i < 9; i++) {
            sum += digits[i] * weights[i];
        }

        return sum % 11;
    }
}




