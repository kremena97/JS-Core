const movieService = (() => {

    function addMovie(title, description, imageUrl, genres, tickets) {
        return kinvey.post('appdata', 'movies', '', {
            "title": title,
            "description": description,
            "imageURL": imageUrl,
            "genres": genres,
            "tickets": tickets
        })
    }

    function getAllMovies() {
        return kinvey.get('appdata', 'movies?query={}&sort={}', '')
    }

    function getMovieById(id) {
        return kinvey.get('appdata', `movies/${id}`, '')
    }

    function buyTicket(id) {
        return getMovieById(id).then((res) => {
            if (Number(res.tickets) < 1){
                return 'No available tickets!'
            }else{
                let movie = {
                    "title": res.title,
                    "description": res.description,
                    "imageURL": res.imageURL,
                    "genres": res.genres,
                    "tickets": Number(res.tickets) - 1
                };

                return kinvey.update('appdata', `movies/${id}`, '', movie)
            }

        });
    }

    function myMovies(userId) {
        return kinvey.get('appdata', `movies?query={"_acl.creator":"${userId}"}`, '')
    }

    function edit(movie, id) {
        return kinvey.update('appdata', `movies/${id}`, '', movie)
    }

    function deleteMovie(id) {
        return kinvey.remove('appdata', `movies/${id}`, '')
    }

    return {
        addMovie,
        getAllMovies,
        getMovieById,
        buyTicket,
        myMovies,
        edit,
        deleteMovie
    }
})();