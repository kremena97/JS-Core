const songService = (() => {
    function listAllSongs() {
        return kinvey.get('appdata', 'songs?query={}&sort={}', '')
    }
    
    function createNewSong(data) {
        return kinvey.post('appdata', 'songs', '', data)
    }
    
    function listMySongs(user_id) {
        return kinvey.get('appdata', `songs?query={"_acl.creator":"${user_id}"}`, '');
    }

    function getSong(_id) {
        return kinvey.get('appdata', `songs/${_id}`, '');
    }
    
    function like(_id) {
         return (getSong(_id).then((res)=>{
            let song ={
                "title": res.title,
                "artist": res.artist,
                "imageURL": res.imageURL,
                "likes": Number(res.likes) + 1,
                "listened": res.listened

            };

            return kinvey.update('appdata', `songs/${_id}`, '', song);
        }).catch(function (err) {
            notify.showError(err.message);
        }));

    }

    function listen(_id) {
        return (getSong(_id).then((res)=>{
            let song ={
                "title": res.title,
                "artist": res.artist,
                "imageURL": res.imageURL,
                "likes": res.likes,
                "listened": Number(res.listened) + 1

            };

            return kinvey.update('appdata', `songs/${_id}`, '', song);
        }).catch(function (err) {
            notify.showError(err.message);
        }));

    }

    function deleteSong(_id) {
        return kinvey.remove('appdata', `songs/${_id}`, '');
    }

    return {
        listAllSongs,
        createNewSong,
        listMySongs,
        like,
        listen,
        deleteSong
    }
})();