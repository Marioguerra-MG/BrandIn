// Seleciona modal e botão
const modal = document.getElementById("creditsModal");
const btn = document.getElementById("creditos");
const closeBtn = modal.querySelector(".creditosmodal-close");

// Abre modal ao clicar no botão
btn.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.add("show");
});

// Fecha modal ao clicar no "x"
closeBtn.addEventListener("click", function() {
    modal.classList.remove("show");
});

// Fecha modal ao clicar fora do conteúdo
window.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});






/* ========================= */
/* EDIT STACK MODAL */
/* ========================= */

function openEditStackModal() {
  const modal = document.getElementById("EditStackModal");
  if (!modal) return;

  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeEditStackModal() {
  const modal = document.getElementById("EditStackModal");
  if (!modal) return;

  modal.classList.remove("show");
  document.body.style.overflow = "auto";
}

/* Fecha clicando fora */
document.addEventListener("click", function (e) {
  const modal = document.getElementById("EditStackModal");
  const content = document.querySelector(".EditStack-content");

  if (!modal || !content) return;

  if (
    modal.classList.contains("show") &&
    !content.contains(e.target) &&
    !e.target.closest(".open-edit-stack-btn")
  ) {
    closeEditStackModal();
  }
});
