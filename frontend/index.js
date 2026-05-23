const API_URL = 'http://localhost:8000/api/movies';

const defaultMovies = [
    {
        title: "Линчеватель",
        year: "2023",
        status: "СМОТРЮ",
        rating: "★★★★★",
        img: "https://0.soompi.io/wp-content/uploads/2023/10/16022854/vigilante-1.jpg"
    },
    {
        title: "Дьявол носит Prada",
        year: "2006",
        status: "ОЦЕНЕНО",
        rating: "★★★★★",
        img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/61e6f0e1-760d-4ff3-b434-beab6275c0bc/1920x"
    },
    {
        title: "Зверополис",
        year: "2016",
        status: "ОЦЕНЕНО",
        rating: "★★★★★",
        img: "https://basket-05.wbbasket.ru/vol776/part77693/77693884/images/big/1.webp"
    }
];

function displayMovies(moviesArray) {
    const list = document.getElementById('movie-list');
    if (!list) return;

    list.innerHTML = '';

    const htmlContent = moviesArray.map(movie => `
        <div class="movie-card">
            <div class="poster-wrapper">
                <img src="${movie.img || 'placeholder.jpg'}" onerror="this.src='placeholder.jpg'">
            </div>
            <div class="card-info">
                <h3>${movie.title}</h3>
                <p style="font-size: 0.8rem; color: #a0a0a0;">
                    ${movie.year} <span class="status-badge">${movie.status}</span>
                </p>
                <div class="stars">${movie.rating}</div>
            </div>
        </div>
    `).join('');

    list.innerHTML = htmlContent;
}

async function renderMovies() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Ошибка сервера');
        
        const serverMovies = await response.json();
        displayMovies(serverMovies);
    } catch (error) {
        console.warn(error);
        displayMovies(defaultMovies);
    }
}

async function addMovie(newMovie) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMovie)
        });

        if (!response.ok) throw new Error('Не удалось добавить на сервер');
        
        renderMovies();
    } catch (error) {
        console.error(error);
        defaultMovies.push(newMovie);
        displayMovies(defaultMovies);
    }
}

document.addEventListener('DOMContentLoaded', renderMovies);