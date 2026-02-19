document.addEventListener("DOMContentLoaded", function () {

  const badgeTop = document.getElementById("badgeTop");
  const previewRole = document.getElementById("previewRole");
  const colorButtons = document.querySelectorAll(".color-btn");

  colorButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      // Remove seleção anterior
      colorButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const selectedColor = btn.getAttribute("data-color");

      // 🔥 Aplica no topo
      badgeTop.style.background = selectedColor;

      // 🔥 Aplica no texto do cargo
      previewRole.style.color = selectedColor;

    });
  });

});
