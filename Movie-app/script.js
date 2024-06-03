const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const buttons = document.querySelectorAll('.btn2');
let page = 1;

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
    const response = await fetch(`${url}&page=${page}`);
    const data = await response.json();
    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;
        const formattedVoteAverage = parseFloat(vote_average).toFixed(1);
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(formattedVoteAverage)}">${formattedVoteAverage}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `;
        main.appendChild(movieElement);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm && searchTerm.trim() !== '') {
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
});

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default behavior
        const pageNumber = +button.innerText;
        if (pageNumber !== page) {
            page = pageNumber;
            getMovies(API_URL);
            updateButtonStates();
        }
    });
});

next.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default behavior
    if (page < 10) {
        page++;
        getMovies(API_URL);
        updateButtonStates();
    }
});

prev.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default behavior
    if (page > 1) {
        page--;
        getMovies(API_URL);
        updateButtonStates();
    }
});

function updateButtonStates() {
    buttons.forEach((button, index) => {
        if (index === page - 1) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    prev.disabled = page === 1;
    next.disabled = page === 10;
}
