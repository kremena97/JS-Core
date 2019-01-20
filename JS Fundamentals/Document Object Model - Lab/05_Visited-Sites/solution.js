function solve() {
    let softuniLink = document.getElementsByTagName('a').item(0);
    let googleLink = document.getElementsByTagName('a').item(1);
    let youtubeLink = document.getElementsByTagName('a').item(2);
    let wikipediaLimk = document.getElementsByTagName('a').item(3);
    let gmailLink = document.getElementsByTagName('a').item(4);
    let stackoverflowLink = document.getElementsByTagName('a').item(5);

    let softuniVisits = 1;
    let googleVisits = 2;
    let youtubeVisits = 3;
    let wikipediaVisits = 4;
    let gmailVisits = 5;
    let stackoverflowVisits = 6;

    softuniLink.addEventListener("click",function () {
        softuniVisits++;
        softuniLink.nextElementSibling.innerHTML = `Visited: ${softuniVisits} times`;
    });

    googleLink.addEventListener("click",function () {
        googleVisits++;
        googleLink.nextElementSibling.innerHTML = `Visited: ${googleVisits} times`;
    });

    youtubeLink.addEventListener("click",function () {
        youtubeVisits++;
        youtubeLink.nextElementSibling.innerHTML = `Visited: ${youtubeVisits} times`;
    });

    wikipediaLimk.addEventListener("click",function () {
        wikipediaVisits++;
        wikipediaLimk.nextElementSibling.innerHTML = `Visited: ${wikipediaVisits} times`;
    });

    gmailLink.addEventListener("click",function () {
        gmailVisits++;
        gmailLink.nextElementSibling.innerHTML = `Visited: ${gmailVisits} times`;
    });

    stackoverflowLink.addEventListener("click",function () {
        stackoverflowVisits++;
        stackoverflowLink.nextElementSibling.innerHTML = `Visited: ${stackoverflowVisits} times`;
    });
}