const OMDB_API_KEY = "32ef44fc";
const BTTF1_IMDB_ID = "tt0088763";
const BTTF2_IMDB_ID = "tt0096874";

$(document).ready(function() {
	// Contact Form Script - Checks if required fields are empty and outputs corresponding message.
	$("#submitButton").click(function() {
		if(document.contactForm.fname.value == "") {
			$('#errorModal').modal("show");
			return false;
		} else if(document.contactForm.sname.value == "") {
			$('#errorModal').modal("show");
			return false;
		} else if(document.contactForm.email.value == "") {
			$('#errorModal').modal("show");
			return false;
		} else {
			$('#successModal').modal("show");
			return false;
		}
	})

	// Trilogy API scripts

	getMovies()


	function populateMovieInfo(movie) {

		var imdbID = movie.imdbID

		// Styles Actor list

		var actorList = movie.Actors.split(",")
		actorList.forEach(function(actor) {
			if (imdbID == "tt0088763") {
				$('#actorList').append("<li>" + actor + "</li>")
			} else if (imdbID == "tt0096874") {
				$('#actorList2').append("<li>" + actor + "</li>")
			} else {
				$('#actorList3').append("<li>" + actor + "</li>")
			}
		})

		// Adds Movie Ratings

		for (var i = 0; i < movie.Ratings.length; i++) { // if i is less than movie.Ratings.length then increment i.
			if (imdbID == "tt0088763") {
				$('#reviews').append("<li>" + movie.Ratings[i].Source + ": "  + movie.Ratings[i].Value + "</li>")
			} else if (imdbID == "tt0096874") {
				$('#reviews2').append("<li>" + movie.Ratings[i].Source + ": " + movie.Ratings[i].Value + "</li>")
			} else {
				$('#reviews3').append("<li>" + movie.Ratings[i].Source + ": " + movie.Ratings[i].Value + "</li>")
			}
		}

			
		if (imdbID == "tt0088763") {
			// adds plot summary
			$('#plotSummary').html(movie.Plot)
			// adds movie poster
			$('#moviePoster').attr("src", movie.Poster)
		} else if (imdbID == "tt0096874") {
			$('#plotSummary2').html(movie.Plot)
			$('#moviePoster2').attr("src", movie.Poster)
			// add jquery for other items here
		} else {
			$('#plotSummary3').html(movie.Plot)
			$('#moviePoster3').attr("src", movie.Poster)
			// add jquery for other items here
		}
	}

	//  click function for timeline

	$("div.vis-item").click(function() {
		$("div.vis-selected").toggleClass("vis-item-custom");
	});

	// API requests from https://www.themoviedb.org/

	function getMovies() {

		fetch("https://www.omdbapi.com/?i=tt0088763&plot=full&apikey=32ef44fc") // fetch api data
			.then((res) => res.json()) // then turn the response into json format
			.then((movie) => {			// then store it as movie and let populateMovieInfo take over
				populateMovieInfo(movie)
			})
			.catch((error) => console.log(error)) // if there is an error log the error to the console
		fetch("https://www.omdbapi.com/?i=tt0096874&plot=full&apikey=32ef44fc")
			.then((res) => res.json())
			.then((movie) => {
				populateMovieInfo(movie)
			})
			.catch((error) => console.log(error))
		fetch("https://www.omdbapi.com/?i=tt0099088&plot=full&apikey=32ef44fc")
			.then((res) => res.json())
			.then((movie) => {
				populateMovieInfo(movie)
			})
			.catch((error) => console.log(error))
	}
});