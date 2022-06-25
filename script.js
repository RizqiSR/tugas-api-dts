const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', function() {
    const inputKeyword = document.querySelector('.input-keyword')
        fetch('http://www.omdbapi.com/?apikey=9687ce88&s=' + inputKeyword.value)  
            .then(response => response.json())
            .then(response => {
                const movies = response.Search
                let cards = ''
                movies.forEach(m => cards += showCards(m))
    
                const movieContainer = document.querySelector('.movie-container')
                movieContainer.innerHTML = cards
            })
})

function showCards(m) {
    return `
    <div class="col-md-4 my-3">
        <div class="card">
            <img src="${m.Poster}" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            </div>
        </div>
    </div>`
}