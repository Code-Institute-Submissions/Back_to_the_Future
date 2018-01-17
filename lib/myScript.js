// Contact Form Script - Checks if required fields are empty and outputs corresponding message.

$(document).ready(function() {
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
})

// Trilogy API scripts

// API requests from https://www.themoviedb.org/

function getMovies() {

	fetch("http://www.omdbapi.com/?i=tt0088763&plot=full&apikey=32ef44fc") // fetch api data
		.then((res) => res.json()) // then turn the response into json format
		.then((movie) => {			// then store it as movie and let trilogyInfo take over
			trilogyInfo(movie)
		})
		.catch((error) => console.log(error)) // if there is an error log the error to the console
	fetch("http://www.omdbapi.com/?i=tt0096874&plot=full&apikey=32ef44fc")
		.then((res) => res.json())
		.then((movie) => {
			trilogyInfo(movie)
		})
		.catch((error) => console.log(error))
	fetch("http://www.omdbapi.com/?i=tt0099088&plot=full&apikey=32ef44fc")
		.then((res) => res.json())
		.then((movie) => {
			trilogyInfo(movie)
		})
		.catch((error) => console.log(error))
}
getMovies()


function trilogyInfo(movie) {

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