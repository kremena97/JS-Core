function attachEvents() {
    $('#create-offers').css('display', 'none');
    $('#loginBtn').on('click', login);
    $('#usernameContainer').append(`<button class="btn btn-outline-dark my-2 my-sm-0" type="submit" id="logoutBtn" style="display: none">Logout</button>`);
    $('#create-offer-Btn').on('click', createOffer);

    function login(event) {
        $('#notification').text('');
        event.preventDefault();
        let username = $('#username').val();
        if (username.length>=4 && username.length<=10){
            $('#create-offers').css('display', 'block');
            $('#username').val(`Hello, ${username}!`).addClass('border-0 bg-light');
            $('#usernameContainer').css('display', 'block');
            $('#loginBtn').css('display','none');
            $(`#logoutBtn`).css('display', 'block');
        }else{
            $('#notification').text('Username should be at least 4 characters long and 10 characters maximum');
        }
        $('#logoutBtn').on('click', logout);
        username = $('#username').val();

        try {
            $(`#offers-container [id="${username}"] button`).css('display', 'block');
        }catch(e){

        }

    }

    function createOffer(event) {
        event.preventDefault();
        let offerName = $('#offerName').val();
        let companyName = $('#company').val();
        let description = $('#description').val();
        let userID = $('#username').val();

        if (offerName.length < 4 || offerName.length> 10){
            $('#notification').text('Offer name should be at least 4 characters long and 10 characters maximum');
        }else if(companyName.length<2 || companyName.length>10){
            $('#notification').text('Company name should be at least 2 characters long and 10 characters maximum');
        }else if (description.length<20 || description.length>120){
            $('#notification').text('Description should be at least 20 characters long and 120 characters maximum');
        }else{
            $('#offers-container').append(`<div class="col-3" id="${userID}">
                <div class="card text-white bg-dark mb-3 pb-3" style="max-width: 18rem;">
                    <div class="card-header">${offerName}</div>
                    <div class="card-body">
                        <h5 class="card-title">${companyName}</h5>
                        <p class="card-text">${description}</p>
                    </div>
                    <button class="btn btn-danger">Archive</button>
                </div>
            </div>`);


            $('#offerName').val('');
            $('#company').val('');
            $('#description').val('');
            $('#offers-container button').on('click', archive);
            $('#notification').text('');
        }
    }
    function archive(event) {
        event.preventDefault();
        this.parentElement.parentElement.remove();
    }

    function logout(event) {
        event.preventDefault();
        $('#create-offers').css('display', 'none');
        $('#username').val('').removeClass('border-0 bg-light');
        $('#logoutBtn').css('display','none');
        $('#loginBtn').css('display','block');
        $('#offers-container button').css('display','none');
    }

}

attachEvents();