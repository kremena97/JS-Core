$(() => {
    const $loadPostsBtn = $('#load-posts-btn');
    const $postsDropdown = $('#posts');

    const kinveyAppId = "kid_S1htVfcmm";
    const serviceUrl = "https://baas.kinvey.com/appdata/" + 
        kinveyAppId + '/posts';
    const kinveyUsername = "peter";
    const kinveyPassword = "p";
    const base64auth = btoa(kinveyUsername + ":" +
        kinveyPassword);
    const authHeaders = { "Authorization": "Basic " + base64auth };
    
    function loadPosts() {
        return fetch(serviceUrl, {
            method: 'GET',
            headers: new Headers(authHeaders),
        });
    }

    $loadPostsBtn.on('click', () => {
        const postsPromise = loadPosts();
            postsPromise
                .then(res => res.json())
                .then(posts => {
                    posts.forEach(post => {
                        $postsDropdown.append(`<option>${post.title}</option>`);
                    });
                });
    });
});