
function downloadBadge() {

  const badge = document.getElementById("badge");
  if (!badge) return;

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isFacebookBrowser = /FBAN|FBAV|Instagram/i.test(userAgent);

  const newTab = window.open("", "_blank");

  if (!newTab) {
    showToast("Permita pop-ups para baixar 📲");
    return;
  }

  newTab.document.write(`
    <html>
      <head>
        <title>Gerando imagem...</title>
        <style>
          body {
            margin: 0;
            background: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            color: white;
            font-family: Poppins, sans-serif;
          }
        </style>
      </head>
      <body>
        Gerando sua imagem...
      </body>
    </html>
  `);
  newTab.document.close();

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

    // 🎨 Fundo gradiente
    const gradient = ctx.createLinearGradient(0, 0, 0, finalCanvas.height);
    gradient.addColorStop(0, badgeBgColor);
    gradient.addColorStop(1, darkenColor(badgeBgColor, 25));

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);

    // 📦 Proporção do badge
    const badgeWidth = 650;
    const badgeHeight = (badgeCanvas.height / badgeCanvas.width) * badgeWidth;

    const centerX = (finalCanvas.width - badgeWidth) / 2;
    const centerY = (finalCanvas.height - badgeHeight) / 2;

    // 🌫 Sombra
    ctx.shadowColor = "rgba(0,0,0,0.25)";
    ctx.shadowBlur = 50;
    ctx.shadowOffsetY = 25;

    ctx.drawImage(badgeCanvas, centerX, centerY, badgeWidth, badgeHeight);
    ctx.shadowColor = "transparent";

    // 💎 Marca grande discreta
    ctx.save();
    ctx.globalAlpha = 0.05;
    ctx.fillStyle = "#000";
    ctx.font = "bold 90px Poppins";
    ctx.textAlign = "center";
    ctx.fillText("Brandin", finalCanvas.width / 2, 200);
    ctx.restore();

    // 🔒 Marca site se não for PRO
    if (!isProUser) {
      ctx.save();
      ctx.globalAlpha = 0.08;
      ctx.fillStyle = "#222";
      ctx.font = "500 42px Poppins";
      ctx.textAlign = "center";

      ctx.fillText(
        "brand-in-henna.vercel.app",
        finalCanvas.width / 2,
        finalCanvas.height - 40
      );

      ctx.restore();
    }

    const isMobile = /iPhone|Android/i.test(userAgent);
    const instructionText = isMobile
      ? "📲 Segure na imagem para salvar"
      : "💻 Clique com botão direito e escolha 'Salvar imagem'";

    finalCanvas.toBlob(function (blob) {

      const url = URL.createObjectURL(blob);

      newTab.document.open();
      newTab.document.write(`
        <html>
          <head>
            <title>Brandin - Salvar imagem</title>
            <style>
              body {
                margin: 0;
                background: #000;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: Poppins, sans-serif;
                color: #fff;
                height: 100vh;
                text-align: center;
                padding: 20px;
              }

              img {
                max-width: 90%;
                max-height: 65vh;
                border-radius: 20px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.5);
              }

              .instruction {
                margin-top: 20px;
                font-size: 17px;
                opacity: 0.9;
              }

              .warning {
                margin-top: 15px;
                font-size: 14px;
                opacity: 0.7;
              }

              button {
                margin-top: 20px;
                padding: 12px 24px;
                border-radius: 30px;
                border: none;
                background: white;
                color: black;
                font-weight: 600;
                font-size: 15px;
                cursor: pointer;
                transition: 0.3s;
              }

              button:hover {
                opacity: 0.85;
              }

              .external-btn {
                background: #1877f2;
                color: white;
              }
            </style>
          </head>
          <body>

            <img src="${url}" />

            <div class="instruction">
              ${instructionText}
            </div>

            ${isFacebookBrowser ? `
              <div class="warning">
                O navegador do Facebook pode bloquear o download.
              </div>

              <a href="https://brand-in-henna.vercel.app" target="_blank">
                <button class="external-btn">
                  🌍 Abrir no navegador externo
                </button>
              </a>
            ` : ""}

            <button onclick="window.close()">
              ← Voltar para o Brandin
            </button>

          </body> 
        </html>
      `);

      newTab.document.close();

    }, "image/png");

    showToast("Imagem pronta! 🚀");
    clearStacks();

    setTimeout(() => {
      if (typeof resetForm === "function") {
        resetForm();
      }
    }, 800);

  }).catch(() => {
    newTab.close();
    showToast("Erro ao gerar ❌");
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


