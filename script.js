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
