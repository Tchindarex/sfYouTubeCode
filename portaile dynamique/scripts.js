// scripts.js
function showContent(sectionId, buttonElement) {
    // Cacher toutes les sections de contenu
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // Afficher la section sélectionnée
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Réinitialiser la couleur de tous les boutons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Changer la couleur du bouton actif
    if (buttonElement) {
        buttonElement.classList.add('active');
    }
}
