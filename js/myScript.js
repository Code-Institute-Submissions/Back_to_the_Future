// I must note that in additon to my tutor providing guidance on the code below, Simen Daehilin also did. The code however is typed by me and not copied.

const OMDB_API_KEY = "32ef44fc";
const BTTF1_IMDB_ID = "tt0088763"; // Back to the future 1
const BTTF2_IMDB_ID = "tt0096874"; // Back to the future 2
const BTTF3_IMDB_ID = "tt0099088"; // Back to the future 3
const OMDB_URL = "https://www.omdbapi.com/?i=";
const MOVIES = [BTTF1_IMDB_ID, BTTF2_IMDB_ID, BTTF3_IMDB_ID];

// The code from below is from 'http://visjs.org' in order to display the timeline, there are some changes i.e. the dates to suit my requirments
// DOM element where the Timeline will be attached
const container = document.getElementById("visualization");
//  Create a Timeline
const timeline = new vis.Timeline(container, items, options);

console.log(MOVIES);
$(document).ready(function() {
  // Contact Form Script - Checks if required fields are empty and outputs corresponding message.
  $("#submitButton").click(function() {
    const firstName = document.contactForm.fname.value;
    const surName = document.contactForm.fname.value;
    const email = document.contactForm.fname.value;
    if (firstName || surName || email === "") {
      $("#errorModal").modal("show"); // error modal displays message to user to fill in the required fields
      return false;
    } else {
      $("#successModal").modal("show"); // success modal displays message to user that they have successfully filled in the form.
      return false;
    }
  });

  //  click function for timeline

  $("div.vis-item").click(function() {
    $("div.vis-selected").toggleClass("vis-item-custom");
  });

  // API requests from https://www.themoviedb.org/
  // Trilogy API scripts - The code for the API's was inspired by Simen Daehlin's guidance.
  MOVIES.forEach(movie => {
    fetch(OMDB_URL + movie + "&plot=full&apikey=" + OMDB_API_KEY)
      .then(res => res.json())
      .then(movieData => {
        console.log(movieData);
        let actors = movieData.Actors.split(",");
        actors.forEach(function(actor) {
          $("#actorBttf" + [i + 1]).append("<li>" + actor + "</li>");
        });

        // Adds Movie Ratings

        $("#reviews" + [i + 1]).append(
          "<li>" +
            movieData.Ratings[i].Source +
            ":" +
            movieData.Ratings[i].Value +
            "</li>"
        );

        $("#plotBttf" + [i + 1]).html(movie.Plot);
        // adds movie poster
        $("#posterBttf" + [i + 1]).attr("src", movie.Poster);
      })
      .catch(error => console.log(error));
  });
});
