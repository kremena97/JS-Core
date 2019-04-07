function attachEvents() {
    $('.hyperlink-notification').click(function (e) {
        e.preventDefault();
        let url = $(this).attr("href");

        swal({
            title: "Leave this site?",
            text: "If you click 'OK', you will be redirect to " + url,
            icon: "warning",
            buttons: true
        })
            .then((redirect) => {
                if (redirect) {
                    window.location.href = url;
                }
            });

    });

    $('.btn-submit').click(function () {
        swal("Good job!", "You are registered!", "success")
    });

    $('.dropify').dropify();
}

attachEvents();