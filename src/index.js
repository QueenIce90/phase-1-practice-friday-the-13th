
const navigationList = document.getElementById('movie-list');
const firstMovieList = document.getElementById('detail-image');
const movieTitleList = document.getElementById('title')
const movieYear = document.getElementById('year-released')
const movieDescription = document.getElementById('description')
const watchButton = document.getElementById('watched')
const bloodFormButton = document.getElementById('blood-form')

fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(movies => {
        movies.forEach(movie => {
            addMovieToList(movie)
       
    });
    centerMovieList(movies[0])
    bloodCount()
 })


function addMovieToList(movie){
    const newMovieImage = document.createElement('img')
    newMovieImage.src = movie.image
    navigationList.appendChild(newMovieImage)

    newMovieImage.addEventListener('click', (event) => {
        centerMovieList(movie)
    
    })

}

function centerMovieList(movie){
    firstMovieList.src = movie.image;
    movieTitleList.textContent = movie.title;
    movieYear.textContent = movie.release_year;
    movieDescription.textContent = movie.description

    if (movie.watched === true){
        watchButton.textContent = "watched"

    } else {watchButton.textContent = "unwatched"}
}
    watchButton.addEventListener('click', (event) => {
        movie.watched = !movie.watched

        if (movie.watched === true){
            watchButton.textContent = "watched"
    
        } else {watchButton.textContent = "unwatched"}

    })

    function bloodCount() {
        
        bloodFormButton.addEventListener('submit', (event) =>{
        event.preventDefault();

        const bloodDropInputValue = document.getElementById('blood-amount')
        const currentBloodValue = document.getElementById('amount')

        currentBloodValue.textContent = parseInt(currentBloodValue.textContent) + parseInt(bloodDropInputValue.value)


    })
}
