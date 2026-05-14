document.getElementById('movieForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const rating = document.getElementById('rating').value;

    if (title.length < 2) {
        alert("Название короткое");
        return;
    }

    console.log(`Добавлен фильм: ${title}, Оценка: ${rating}`);
    alert("Фильм доавлен в коллекцию");
    this.reset(); // Очистка формы
});