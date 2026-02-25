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