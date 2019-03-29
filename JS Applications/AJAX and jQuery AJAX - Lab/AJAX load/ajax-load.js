
function loadTitle() {
    let req  = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            document.getElementById('res').textContent = this.responseText;
        }
    };
    $('#text').load("text.html");
}
