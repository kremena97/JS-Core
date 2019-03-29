function solve() {

    $('#availableCourses .courseFoot button').bind('click', singUp);

    function singUp() {

        let jsFundPrice = 170;
        let jsAdvancedPrice = 180;
        let jsAppPrice = 190;
        let jsWebPrice = 490;
        let total = 0;
        let bonusCourse = false;

        let checkedCourses = $('#availableCourses .courseBody ul li input:checked').map(function () {
            return this.value;
        }).get().join().split(',');
        let educationType = $('#educationForm input:checked').val();
        console.log(educationType);

        if (checkedCourses.includes('js-fundamentals')) {
            total += jsFundPrice;
        }
        if (checkedCourses.includes('js-advanced')) {
            total += jsAdvancedPrice;
        }
        if (checkedCourses.includes('js-applications')) {
            total += jsAppPrice;
        }
        if (checkedCourses.includes('js-web')) {
            total += jsWebPrice;
        }

        if (checkedCourses.includes('js-advanced') && checkedCourses.includes('js-fundamentals')) {
            total -= jsAdvancedPrice * 0.10;
        }
        if (checkedCourses.includes('js-advanced') && checkedCourses.includes('js-fundamentals') && checkedCourses.includes('js-applications')) {
            total -= 540 * 0.06;
        }
        if (checkedCourses.length === 4) {
            bonusCourse = true;
        }
        if (educationType === 'online') {
            total -= total * 0.06;
        }

        total = Math.floor(total).toFixed(2);

        let allSelectedCourses = $('#myCourses .courseBody ul');
        allSelectedCourses.text('');
        for (let course of checkedCourses) {
            let courseName = course.substr(0, 4).toUpperCase() + course.substr(4, course.length);
            let li = `<li>${courseName}</li>`;
            allSelectedCourses.append(li);
        }
        if (bonusCourse === true) {
            allSelectedCourses.append('<li>HTML and CSS</li>')
        }

        let costElement = $('#myCourses .courseFoot p').text(`Cost: ${total} BGN`);
    }

}

solve();