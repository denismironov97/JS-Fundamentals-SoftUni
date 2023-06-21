function movies(dataArray) {
    class Movie {
        constructor() {
            this.name = null;
            this.director = null;
            this.date = null;

            this.addMovieName = (movieName) => {
                this.name = movieName;
            }

            this.addDirector = (director) => {
                this.director = director;
            }

            this.addMovieDate = function(date) {
                this.date = date;
            }
        }
    }

    let movies = [];
    for (const currMovieData of dataArray) {
        if(currMovieData.includes('addMovie')){
            let movieName = currMovieData.substring(9);
            let movie = new Movie();
            movie.addMovieName(movieName);
            movies.push(movie);
        }
        else if(currMovieData.includes('directedBy')) {
            let movieDataParts = currMovieData.replace(' directedBy ', '_').split('_');
            let movieName = movieDataParts[0];
            let director = movieDataParts[1];

            let specificMovie = movies.filter(m => m.name === movieName)[0];

            if(specificMovie == null){
                continue;
            }

            specificMovie.addDirector(director);

        }
        else if(currMovieData.includes('onDate')) {
            let movieDataParts = currMovieData.replace(' onDate ', '_').split('_');
            let movieName = movieDataParts[0];
            let date = movieDataParts[1];

            let specificMovie = movies.filter(m => m.name === movieName)[0];

            if(specificMovie == null){
                continue;
            }

            specificMovie.addMovieDate(date);
        }
    }

    let selectedMovies = movies.filter(m => m.director !== null && m.date !== null);
    selectedMovies.forEach(x => console.log(JSON.stringify(x)));
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
);