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

function renderMovies() {
    const list = document.getElementById('movie-list');
    if (!list) return;

    list.innerHTML = defaultMovies.map(movie => `
        <div class="movie-card">
            <div class="poster-wrapper"><img src="${movie.img}" onerror="this.src='placeholder.jpg'"></div>
            <div class="card-info">
                <h3>${movie.title}</h3>
                <p style="font-size: 0.8rem; color: #a0a0a0;">${movie.year} <span class="status-badge">${movie.status}</span></p>
                <div class="stars">${movie.rating}</div>
            </div>
        </div>
    `).join('');
}

function addMovie(newMovie) {
    defaultMovies.push(newMovie);
    localStorage.setItem('movies', JSON.stringify(defaultMovies));
    renderMovies();
}

document.addEventListener('DOMContentLoaded', renderMovies);



