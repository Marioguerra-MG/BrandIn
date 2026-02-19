function downloadBadge() {

  const badge = document.getElementById("badge");
  if (!badge) return;

  // 🎨 Pega a cor atual do badge
  const badgeStyle = window.getComputedStyle(badge);
  const badgeBgColor = badgeStyle.backgroundColor || "#e6d2b5";

  html2canvas(badge, {
    scale: 3,
    useCORS: true,
    backgroundColor: null
  }).then(badgeCanvas => {

    const finalCanvas = document.createElement("canvas");
    const ctx = finalCanvas.getContext("2d");

    finalCanvas.width = 1080;
    finalCanvas.height = 1350;

    /* ==========================
       🎨 FUNDO AUTOMÁTICO
    ========================== */

    const gradient = ctx.createLinearGradient(0, 0, 0, finalCanvas.height);

    gradient.addColorStop(0, badgeBgColor);
    gradient.addColorStop(1, darkenColor(badgeBgColor, 25));

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);

    /* ==========================
       📦 PROPORÇÃO CORRETA
    ========================== */

    const badgeWidth = 650;
    const badgeHeight = (badgeCanvas.height / badgeCanvas.width) * badgeWidth;

    const centerX = (finalCanvas.width - badgeWidth) / 2;
    const centerY = (finalCanvas.height - badgeHeight) / 2;

    /* ==========================
       🌫 SOMBRA ELEGANTE
    ========================== */

    ctx.shadowColor = "rgba(0,0,0,0.25)";
    ctx.shadowBlur = 50;
    ctx.shadowOffsetY = 25;

    ctx.drawImage(badgeCanvas, centerX, centerY, badgeWidth, badgeHeight);

    ctx.shadowColor = "transparent";

    /* ==========================
       💎 MARCA D'ÁGUA
    ========================== */

    ctx.save();
    ctx.globalAlpha = 0.06;
    ctx.fillStyle = "#000";
    ctx.font = "bold 90px Poppins";
    ctx.textAlign = "center";
    ctx.fillText("Brandin", finalCanvas.width / 2, 200);
    ctx.restore();

    /* ==========================
       ⬇ DOWNLOAD
    ========================== */

    const link = document.createElement("a");
    link.download = "brandin.png";
    link.href = finalCanvas.toDataURL("image/png");
    link.click();

    showToast("Crachá baixado com sucesso! 🎉");

    /* ==========================
       🧹 LIMPAR STACKS
    ========================== */

    clearStacks();

    setTimeout(() => {
      if (typeof resetForm === "function") {
        resetForm();
      }
    }, 800);

  }).catch(() => {
    showToast("Erro ao gerar o crachá ❌");
  });
}


/* ==========================
   🧹 FUNÇÃO LIMPAR STACKS
========================== */

function clearStacks() {

  // Limpa visual das stacks no badge
  const badgeStack = document.querySelector(".badge-stack");
  if (badgeStack) {
    badgeStack.innerHTML = "";
  }

  // Remove seleção das opções no modal
  const stackOptions = document.querySelectorAll(".stack-option");
  stackOptions.forEach(option => {
    option.classList.remove("selected");
  });

  // Zera contador
  const counter = document.getElementById("stackCounter");
  if (counter) {
    counter.textContent = "0/5 stacks";
  }

  // Se você usa array global de selecionadas
  if (typeof selectedStacks !== "undefined") {
    selectedStacks = [];
  }
}


/* ==========================
   🎨 FUNÇÃO PARA ESCURECER COR
========================== */

function darkenColor(rgb, percent) {

  const values = rgb.match(/\d+/g);
  if (!values) return rgb;

  let r = parseInt(values[0]);
  let g = parseInt(values[1]);
  let b = parseInt(values[2]);

  r = Math.max(0, r - (r * percent / 100));
  g = Math.max(0, g - (g * percent / 100));
  b = Math.max(0, b - (b * percent / 100));

  return `rgb(${r}, ${g}, ${b})`;
}
