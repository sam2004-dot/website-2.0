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

// Zoom on hover
document.querySelectorAll('article img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.03)';
        img.style.transition = 'transform 0.3s ease';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });

    // Klik voor fullscreen
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex; align-items: center;
            justify-content: center;
            z-index: 9999; cursor: zoom-out;
        `;
        const grootImg = document.createElement('img');
        grootImg.src = img.src;
        grootImg.style.cssText = 'max-width: 90%; max-height: 90vh; border-radius: 8px;';
        overlay.appendChild(grootImg);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => overlay.remove());
    });
});