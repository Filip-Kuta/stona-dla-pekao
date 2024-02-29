// Funkcja pokazująca nakładkę
function showOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.classList.remove("hidden");
}

// Funkcja zamykająca nakładkę
function closeOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.classList.add("hidden");
}

// Nasłuchiwanie na kliknięcie przycisku
document.querySelector(".alert-button__trigger").addEventListener("click", function() {
    showOverlay();
});

// Pobierz wszystkie ikony serduszek
const addToFavoritesIcons = document.querySelectorAll('.add-to-favorites');

// Dla każdej ikony serduszka, dodaj obsługę zdarzenia kliknięcia
addToFavoritesIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Pobierz tytuł i treść aktualności
        const newsBox = icon.parentNode;
        const title = newsBox.querySelector('h2').textContent;
        const content = newsBox.querySelector('p').textContent;

        // Zapisz informacje o ulubionej aktualności w localStorage
        const favoriteNews = JSON.parse(localStorage.getItem('favoriteNews')) || [];
        favoriteNews.push({ title, content });
        localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));

        // Zaktualizuj wygląd ikony serduszka
        icon.style.color = 'red';
        icon.disabled = true;
    });
});
// Pobierz kontener ulubionych aktualności
const favoritesContainer = document.getElementById('favorites-container');

// Pobierz wszystkie przyciski "Dodaj do ulubionych"
const addToFavoritesButtons = document.querySelectorAll('.add-to-favorites');

// Dla każdego przycisku, dodaj obsługę zdarzenia kliknięcia
addToFavoritesButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Pobierz tytuł i treść aktualności
        const newsBox = button.parentNode;
        const title = newsBox.querySelector('h2').textContent;
        const content = newsBox.querySelector('p').textContent;

        // Zapisz informacje o ulubionej aktualności w localStorage
        const favoriteNews = JSON.parse(localStorage.getItem('favoriteNews')) || [];
        favoriteNews.push({ title, content });
        localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));

        // Zaktualizuj wygląd przycisku
        button.textContent = 'Dodano do ulubionych';
        button.disabled = true;

        // Dodaj aktualność do widoku ulubionych aktualności
        const favoriteItem = document.createElement('div');
        favoriteItem.classList.add('favorite-item');
        favoriteItem.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        favoritesContainer.appendChild(favoriteItem);
    });
});

// Wyświetl ulubione aktualności, które są zapisane w localStorage po załadowaniu strony
window.addEventListener('load', () => {
    const favoriteNews = JSON.parse(localStorage.getItem('favoriteNews')) || [];
    favoriteNews.forEach(news => {
        const favoriteItem = document.createElement('div');
        favoriteItem.classList.add('favorite-item');
        favoriteItem.innerHTML = `
            <h3>${news.title}</h3>
            <p>${news.content}</p>
        `;
        favoritesContainer.appendChild(favoriteItem);
    });
});
