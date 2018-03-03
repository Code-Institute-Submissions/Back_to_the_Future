// I must note that in additon to my tutor providing guidance on the code below, Simen Daehilin also did. The code however is typed by me and not copied.

const OMDB_API_KEY = "32ef44fc";
const BTTF1_IMDB_ID = "tt0088763"; // Back to the future 1
const BTTF2_IMDB_ID = "tt0096874"; // Back to the future 2
const BTTF3_IMDB_ID = "tt0099088"; // Back to the future 3
const OMDB_URL = "https://www.omdbapi.com/?i=";
const MOVIES = [BTTF1_IMDB_ID, BTTF2_IMDB_ID, BTTF3_IMDB_ID];

$(document).ready(function() {
  // API requests from https://www.themoviedb.org/
  // Trilogy API scripts - The code for the API's was inspired by Simen Daehlin's guidance.
  MOVIES.forEach((movie, movieIndex) => {
    fetch(OMDB_URL + movie + "&plot=full&apikey=" + OMDB_API_KEY)
      .then(res => res.json())
      .then(movieData => {
        // Adds actors 
        let actors = movieData.Actors.split(",");
        actors.forEach(actor => {
          $("#actorBttf" + movieIndex).append("<li>" + actor + "</li>");
        });

        // Adds Movie Ratings
        movieData.Ratings.forEach(rating => {
          $("#reviews" + movieIndex).append("<li>" + rating.Source + ":" + rating.Value + "</li>");
        })

        // adds movie plot
        $("#plotBttf" + movieIndex).html(movieData.Plot);
        // adds movie poster
        $("#posterBttf" + movieIndex).attr("src", movieData.Poster);
      })
      .catch(error => console.log(error));
  });
});
