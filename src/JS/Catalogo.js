function catalogoScript() {
    // Selecciona todas las fichas
    var cakeCards = document.querySelectorAll('.cake-card');

    // Comprueba si hay fichas disponibles
    if (cakeCards.length === 0) {
        console.error('No cake cards found');
        return; // Salir de la función si no hay fichas
    }

    // Número de fichas a mostrar inicialmente y en cada carga
    var cardsToShow = 3;
    var cardsPerLoad = 3;

    // Muestra las primeras fichas
    showCards(0, cardsToShow);

    // Obtiene el botón "Cargar más"
    var loadMoreButton = document.getElementById('load-more');

    // Comprueba si el botón "Cargar más" existe
    if (!loadMoreButton) {
        console.error('Load more button not found');
        return; // Salir de la función si el botón no existe
    }

    // Añade un event listener al botón "Cargar más"
    loadMoreButton.addEventListener('click', function () {
        // Obtiene el número de fichas ya mostradas
        var currentCards = document.querySelectorAll('.cake-card:not(.hidden)').length;

        // Muestra las siguientes fichas
        showCards(currentCards, currentCards + cardsPerLoad);

        // Si todas las fichas están mostradas, oculta el botón "Cargar más"
        if (currentCards + cardsPerLoad >= cakeCards.length) {
            loadMoreButton.style.display = 'none';
        }
    });

    // Función para mostrar un rango de fichas
    function showCards(startIndex, endIndex) {
        console.log(startIndex, endIndex, cakeCards.length);
        for (var i = startIndex; i < endIndex && i < cakeCards.length; i++) {
            cakeCards[i].classList.remove('hidden');
        }
    }
}

export default catalogoScript;
