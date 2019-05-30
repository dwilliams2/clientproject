/* global $ */



$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});
var movies = $("#movies").val();
var years = $("#yearSeach").val();
var url=`https://www.omdbapi.com/?apikey=8e9ded79&y=2016&s=${movies}`;
$('#search').click(function(){
    var movies = $("#movies").val();
    console.log(movies);
    $.ajax({
        url: `https://www.omdbapi.com/?apikey=8e9ded79&y=2016&s=${movies}`,
        method: 'GET',
        success: function(response){
            console.log(response);
            response.Search.forEach(function(movie){
                console.log(movie);
                var poster = movie.Poster
                var title = movie.Title
                html = `
                <p>${title}</p>
                <img src = "${poster}">
                `
                $('body').append(html)
            })
        }
    })
})