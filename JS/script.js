// Formulier validatie
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        if (!this.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.classList.add('was-validated');
    });
}

// Leaflet kaart — Antwerpen
const kaartElement = document.getElementById('kaart');
if (kaartElement) {
    const kaart = L.map('kaart').setView([51.2194, 4.4025], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(kaart);

    L.marker([51.2194, 4.4025])
        .addTo(kaart)
        .bindPopup('<b>Sam Langers</b><br>Antwerpen, België')
        .openPopup();
}