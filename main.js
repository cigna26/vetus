

// Permite mostrar una sección específica del <main>
// (como "Telemedicina", "Seguimiento IA" o "Red Social") y ocultar las otras.
function showSection(id) {
    document.querySelectorAll('.section').forEach(function(sec) {
    sec.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
}




document.getElementById("selectorPerfil").addEventListener("change", function () {
  // Oculta todas las secciones
  document.querySelectorAll(".perfil-section").forEach(div => {
    div.style.display = "none";
  });
  // Muestra la seleccionada
  const perfil = this.value;
  if (perfil) {
    document.getElementById(perfil).style.display = "block";
  }
});