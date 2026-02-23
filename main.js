// Wczytaj i wyświetl promocję z pliku JSON
fetch('promocja-tygodnia.json')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#promocje h2').textContent = data.tekst;
        // Opcjonalnie wyświetl kod: document.querySelector('.kod').textContent = data.kod;
    })
    .catch(error => console.error('Błąd ładowania promocji:', error));
