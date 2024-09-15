const overlays = document.querySelectorAll('.overlay');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const closeModal = document.querySelector('.close');

// Ajouter un event listener à chaque overlay
overlays.forEach(overlay => {
    overlay.addEventListener('click', function () {
        const galleryImage = this.parentElement.querySelector('.gallery-image'); // Récupérer l'image
        modal.style.display = 'block'; // Afficher le modal
        modalImg.src = galleryImage.src; // Récupérer l'image cliquée
        captionText.innerHTML = galleryImage.alt; // Récupérer le texte alternatif de l'image
    });
});

// Fermer le modal quand on clique sur l'élément de fermeture
closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});