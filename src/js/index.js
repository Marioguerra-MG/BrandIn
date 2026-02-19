/* ======================
   ELEMENTOS
====================== */

// Inputs e botões
const nameInput = document.getElementById("nameInput");
const roleInput = document.getElementById("roleInput");
const contactInput = document.getElementById("contactInput"); // Step 3
const downloadBtn = document.getElementById("downloadBtn");

// Preview do crachá
const previewName = document.getElementById("previewName");
const previewRole = document.getElementById("previewRole");
const qrCodeContainer = document.getElementById("qrCode");

/* ======================
   VALIDAÇÃO DO BOTÃO DOWNLOAD
====================== */
function checkForm() {
  // O botão de download só ativa se todos os campos estiverem preenchidos
  const isValid =
    nameInput.value.trim() &&
    roleInput.value.trim() &&
    contactInput.value.trim();

  downloadBtn.disabled = !isValid;
}

// Eventos de input para validação
nameInput.addEventListener("input", checkForm);
roleInput.addEventListener("input", checkForm);
contactInput.addEventListener("input", () => {
  checkForm();
  generateQRCode(); // atualiza QR em tempo real
});

// Executa ao carregar
checkForm();

/* ======================
   ATUALIZAÇÃO EM TEMPO REAL
====================== */
nameInput.addEventListener("input", () => {
  previewName.innerText = nameInput.value || "Seu Nome";
});

roleInput.addEventListener("input", () => {
  previewRole.innerText = roleInput.value || "Seu Cargo";
});

/* ======================
   GERADOR DE QR CODE (Step 3) COM ICONE SEGURO
====================== */
function generateQRCode() {
  const value = contactInput.value.trim();
  qrCodeContainer.innerHTML = "";

  if (!value) return;

  let link = value;
  let icon = ""; // ícone a exibir (WhatsApp / Instagram / Portfólio)

  // Detecta número de WhatsApp (apenas dígitos)
  const digits = value.replace(/\D/g, "");
  if (digits.length >= 10) {
    link = `https://wa.me/${digits}`;
    icon = "📱"; // ou "🟢" se quiser ícone WhatsApp
  } 
  // Detecta link do Instagram
  else if (value.includes("instagram.com") || value.startsWith("@")) {
    let username = value.replace("@", "");
    link = `https://instagram.com/${username}`;
    icon = "📸"; // ícone Instagram
  } 
  // Caso seja outro link (portfólio)
  else if (value.startsWith("http")) {
    link = value;
    icon = "🌐"; // ícone portfólio
  } else {
    // Qualquer texto simples
    link = "https://" + value;
    icon = "🌐";
  }

  // Cria QR Code
  const qr = new QRCode(qrCodeContainer, {
    text: link,
    width: 120,
    height: 120,
    correctLevel: QRCode.CorrectLevel.H // máxima correção de erros
  });

  // Adiciona ícone central seguro
  const iconEl = document.createElement("div");
  iconEl.id = "qrIcon";
  iconEl.innerText = icon;
  iconEl.style.fontSize = "24px";
  iconEl.style.position = "absolute";
  iconEl.style.top = "50%";
  iconEl.style.left = "50%";
  iconEl.style.transform = "translate(-50%, -50%)";
  iconEl.style.background = "white"; // círculo branco para destacar
  iconEl.style.borderRadius = "50%";
  iconEl.style.width = "32px";
  iconEl.style.height = "32px";
  iconEl.style.display = "flex";
  iconEl.style.justifyContent = "center";
  iconEl.style.alignItems = "center";
  iconEl.style.pointerEvents = "none"; // não interfere no QR
  qrCodeContainer.appendChild(iconEl);
}


/* ======================
   SISTEMA DE ETAPAS
====================== */
function nextStep(current) {
  // Validações
  if (current === 1 && !nameInput.value.trim()) {
    showToast("Digite seu nome para continuar.");
    return;
  }
  if (current === 2 && !roleInput.value.trim()) {
    showToast("Digite seu cargo para continuar.");
    return;
  }
  if (current === 3 && !contactInput.value.trim()) {
    showToast("Digite seu WhatsApp ou link para continuar.");
    return;
  }

  // Move para o próximo step
  document.getElementById("step" + current).classList.remove("active");
  document.getElementById("step" + (current + 1)).classList.add("active");
}

/* ======================
   RESET FORM
====================== */
function resetForm() {
  // Limpa inputs
  nameInput.value = "";
  roleInput.value = "";
  contactInput.value = "";

  // Limpa preview
  previewName.innerText = "Seu Nome";
  previewRole.innerText = "Seu Cargo";
  qrCodeContainer.innerHTML = "";

  // Reseta steps
  document.querySelectorAll(".step").forEach(step => {
    step.classList.remove("active");
  });
  document.getElementById("step1").classList.add("active");

  checkForm();
}

/* ======================
   FUNÇÕES GLOBAIS
====================== */
window.nextStep = nextStep;
window.resetForm = resetForm;
window.generateQRCode = generateQRCode;
