/* ======================
   ELEMENTOS
====================== */

const nameInput = document.getElementById("nameInput");
const roleInput = document.getElementById("roleInput");
const imageInput = document.getElementById("imageInput");
const downloadBtn = document.getElementById("downloadBtn");

const previewName = document.getElementById("previewName");
const previewRole = document.getElementById("previewRole");
const previewImage = document.getElementById("previewImage");


/* ======================
   VALIDAÇÃO DO BOTÃO DOWNLOAD
====================== */

function checkForm() {
  const isValid =
    nameInput.value.trim() &&
    roleInput.value.trim() &&
    imageInput.files.length > 0;

  downloadBtn.disabled = !isValid;
}

nameInput.addEventListener("input", checkForm);
roleInput.addEventListener("input", checkForm);
imageInput.addEventListener("change", checkForm);

checkForm(); // executa ao carregar


/* ======================
   ATUALIZAÇÃO EM TEMPO REAL
====================== */

nameInput.addEventListener("input", function () {
  previewName.innerText = nameInput.value || "Seu Nome";
});

roleInput.addEventListener("input", function () {
  previewRole.innerText = roleInput.value || "Seu Cargo";
});

imageInput.addEventListener("change", function (e) {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      previewImage.src = reader.result;
    };
    reader.readAsDataURL(file);
  }
});


/* ======================
   SISTEMA DE ETAPAS
====================== */

function nextStep(current) {

  if (current === 1 && !nameInput.value.trim()) {
    showToast("Digite seu nome para continuar.");
    return;
  }

  if (current === 2 && !roleInput.value.trim()) {
    showToast("Digite seu cargo para continuar.");
    return;
  }

  if (current === 3 && imageInput.files.length === 0) {
    showToast("Adicione uma foto para continuar.");
    return;
  }

  document.getElementById("step" + current).classList.remove("active");
  document.getElementById("step" + (current + 1)).classList.add("active");
}

function resetForm() {

  nameInput.value = "";
  roleInput.value = "";
  imageInput.value = "";

  previewName.innerText = "Seu Nome";
  previewRole.innerText = "Seu Cargo";
  previewImage.src = "";

  document.querySelectorAll(".step").forEach(step => {
    step.classList.remove("active");
  });

  document.getElementById("step1").classList.add("active");

  checkForm();
}





