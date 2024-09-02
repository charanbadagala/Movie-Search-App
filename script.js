const apiKey = 'e621969f8b26e023a5524667eac621d3'; // Replace with your TMDb API key

// Elements
const searchInput = document.getElementById('search-input');
const searchContainer = document.getElementById('search-container');
const movieDetails = document.getElementById('movie-details');
const favoritesList = document.getElementById('favorites-list');

// Scroll Buttons
document.querySelectorAll('.scroll-btn').forEach(button => {
    button.addEventListener('click', function() {
        const container = this.parentNode.querySelector('.movie-container');
        const scrollAmount = container.clientWidth;
        container.scrollBy({
            left: this.classList.contains('left-btn') ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    });
});

// Fetch trending movies on page load
window.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
    const data = await response.json();
    displaySearchResults(data.results);
    autoScrollMovies();  // Start auto-scrolling the movies
});

// Display search results
function displaySearchResults(movies) {
    searchContainer.innerHTML = '';
    if (movies.length === 0) {
        searchContainer.innerHTML = '<p>No movies found.</p>';
        return;
    }
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <div class="overlay">
                <h3>${movie.title}</h3>
                <button onclick="showMovieDetails(${movie.id})">Details</button>
                <button onclick="addToFavorites(${movie.id}, '${movie.title}', '${movie.poster_path}')">Add to Favorites</button>
            </div>
        `;
        searchContainer.appendChild(movieCard);
    });
}

// Auto-scroll function
function autoScrollMovies() {
    const scrollAmount = searchContainer.clientWidth;
    setInterval(() => {
        searchContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
        if (searchContainer.scrollLeft + scrollAmount >= searchContainer.scrollWidth) {
            searchContainer.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, 3000); // Adjust the interval as needed (3000ms = 3 seconds)
}

// Show movie details
async function showMovieDetails(movieId) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
    const movie = await response.json();
    movieDetails.style.display = 'block';
    movieDetails.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <p><strong>Release Date:</strong> ${movie.release_date}</p>
        <p><strong>Genre:</strong> ${movie.genres.map(genre => genre.name).join(', ')}</p>
        <p><strong>Synopsis:</strong> ${movie.overview}</p>
        <button onclick="addToFavorites(${movie.id}, '${movie.title}', '${movie.poster_path}')
        ">Add to Favorites</button>
    `;
}

// Add movie to favorites
function addToFavorites(movieId, movieTitle, moviePoster) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.find(movie => movie.id === movieId)) {
        favorites.push({ id: movieId, title: movieTitle, poster: moviePoster });
        localStorage.setItem('favorites', JSON.stringify(favorites));
        displayFavorites();
    }
}

// Display favorites
function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favoritesList.innerHTML = '';
    favorites.forEach(movie => {
        const favoriteMovie = document.createElement('div');
        favoriteMovie.classList.add('movie-card');
        favoriteMovie.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <button onclick="removeFromFavorites(${movie.id})">Remove</button>
        `;
        favoritesList.appendChild(favoriteMovie);
    });
}

// Remove movie from favorites
function removeFromFavorites(movieId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(movie => movie.id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
}

// Initial call to display favorites on page load
displayFavorites();
