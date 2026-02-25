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

/////////////////////////////////////////


const userAgent = navigator.userAgent || navigator.vendor || window.opera;

const isInAppBrowser =
  /FBAN|FBAV|Instagram|Messenger/i.test(userAgent);

window.addEventListener("DOMContentLoaded", () => {
  const block = document.getElementById("externalBrowserBlock");

  if (isInAppBrowser && block) {
    block.style.display = "flex";
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";
    block.style.pointerEvents = "all";
  }
});

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
  let iconClass = "";

  const digits = value.replace(/\D/g, "");

  // ======================
  // DETECÇÃO WHATSAPP
  // ======================
  if (digits.length >= 10) {
    link = `https://wa.me/${digits}`;
    iconClass = "fa-brands fa-whatsapp";
  }

  // ======================
  // DETECÇÃO INSTAGRAM
  // ======================
  else if (value.includes("instagram.com") || value.startsWith("@")) {
    let username = value
      .replace("https://instagram.com/", "")
      .replace("http://instagram.com/", "")
      .replace("@", "")
      .replace("/", "");

    link = `https://instagram.com/${username}`;
    iconClass = "fa-brands fa-instagram";
  }

  // ======================
  // OUTROS LINKS
  // ======================
  else if (value.startsWith("http")) {
    link = value;
    iconClass = "fa-solid fa-globe";
  }

  else {
    link = "https://" + value;
    iconClass = "fa-solid fa-globe";
  }

  // ======================
  // CRIAR QR CODE
  // ======================
  new QRCode(qrCodeContainer, {
    text: link,
    width: 120,
    height: 120,
    correctLevel: QRCode.CorrectLevel.H
  });

  // ======================
  // CRIAR ÍCONE CENTRAL
  // ======================
  const iconEl = document.createElement("div");
  iconEl.id = "qrIcon";
  iconEl.innerHTML = `<i class="${iconClass}"></i>`;

  iconEl.style.position = "absolute";
  iconEl.style.top = "50%";
  iconEl.style.left = "50%";
  iconEl.style.transform = "translate(-50%, -50%)";
  iconEl.style.background = "white";
  iconEl.style.borderRadius = "50%";
  iconEl.style.width = "26px";
  iconEl.style.height = "26px";
  iconEl.style.display = "flex";
  iconEl.style.justifyContent = "center";
  iconEl.style.alignItems = "center";
  iconEl.style.pointerEvents = "none";

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
