// function getMoviebyId(id) {
//     $.ajax({
//         url: "https://api.themoviedb.org/3/movie/105?api_key=c2e73d32fa83d9471bfd5ba7ff3676e0",
//         datatype: "json",
//         complete: function(response) {
//             var movie = $.parseJSON(response.responseText);
//             $('#bttfOverview').html(movie.overview);
//         },
//         error: function () {
//             $('#bttfOverview').html('unable to retrieve movie information');
//         }
//     });
//     return false;
// }

// // add onclick for when the overview expands plus add overview section on page.

// $(document).ready(function(){
//     $('#bttfOverview').ready(function(){
//         getMoviebyId(105);
//     })
// })
