/* -----------------------------------------
   SCRIPT POUR PAGE TEMPLATE (template-single.html)
   - Affiche l'image uploadée par l'admin
   - Remplace la zone grise par l'image réelle
------------------------------------------ */

const uploadInput = document.getElementById("uploadInput");
const previewImage = document.getElementById("previewImage");

if (uploadInput) {
  uploadInput.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
      // Remplace le contenu de la zone par l'image
      previewImage.style.backgroundImage = `url('${e.target.result}')`;
      previewImage.style.backgroundSize = "cover";
      previewImage.style.backgroundPosition = "center";
      previewImage.innerHTML = ""; // enlève le texte "Aucune image"
    };

    reader.readAsDataURL(file);
  });
}

/* -----------------------------------------
   OPTIONNEL : empêcher les visiteurs d'accéder
   à la zone admin (si tu veux plus tard)
------------------------------------------ */

// Exemple simple : si tu veux activer un "mode admin"
// Mets adminMode = true pour toi, false pour visiteurs
const adminMode = true;

if (!adminMode) {
  const adminBox = document.querySelector(".admin-box");
  if (adminBox) {
    adminBox.style.display = "none";
  }
}
