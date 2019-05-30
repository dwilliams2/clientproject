/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

$('#search').click(function(){
    $.ajax({
        url: 'https://www.omdbapi.com/?apikey=8e9ded79&y=2016&s=dory',
        method: 'GET',
        success: function(response){
            console.log(response);
            response.Search.forEach(function(movie){
                console.log(movie);
                var title = movie.Title
                html = `
                <p>${title}</p>
                `
                $('body').append(html)
            })
        }
    })
})