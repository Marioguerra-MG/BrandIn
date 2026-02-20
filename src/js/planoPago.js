/* ====================== */
/* VERIFICA SE USUÁRIO É PRO */
/* ====================== */

// Verifica se veio da ativação
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("pro") === "true") {
  localStorage.setItem("isProUser", "true");
}

// Define status PRO
let isProUser = localStorage.getItem("isProUser") === "true";

const MAX_STACKS = 5;

/* ====================== */
document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("stackOptions");

  if (container && typeof stacks !== "undefined") {

    stacks.forEach(stack => {

      const div = document.createElement("div");
      div.classList.add("stack-option");
      div.dataset.type = stack.type;

      div.innerHTML = `
        <img src="${stack.icon}">
        <span>${stack.name}</span>
      `;

      div.addEventListener("click", () => {

        const badgeCount = document.querySelectorAll("#badgeStack img").length;
        const selectedCount = document.querySelectorAll(".stack-option.selected").length;

        const totalSelecionado = badgeCount + selectedCount;

        if (!div.classList.contains("selected") && totalSelecionado >= MAX_STACKS) {
          showToast("Você já selecionou 5 stacks 🚫");
          return;
        }

        div.classList.toggle("selected");
        updateStackCounter();
      });

      container.appendChild(div);
    });
  }

  /* FECHAR MENU AO CLICAR FORA */
  const menu = document.getElementById("menu");
  const menuIcon = document.querySelector(".menu-icon");

  document.addEventListener("click", (e) => {
    if (!menu || !menuIcon) return;

    if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
      menu.classList.remove("show");
    }
  });

  updateStackCounter();
  updateProUI(); // 👈 Atualiza interface PRO
});

/* ====================== */
function toggleMenu(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById("menu");
  if (menu) menu.classList.toggle("show");
}

/* ====================== */
function openStackOptions() {

  if (!isProUser) {
    showToast("Stacks disponíveis apenas no Plano Pro 🔒");
    return;
  }

  const modal = document.getElementById("stackModal");
  if (!modal) return;

  modal.dataset.mode = "pro"; // 👈 define modo
  modal.classList.add("show");

  updateStackCounter();
}


/* ====================== */
function closeStackModal() {
  const modal = document.getElementById("stackModal");
  if (modal) modal.classList.remove("show");
}

/* ====================a== */
function confirmStackSelection() {

  const selectedOptions = document.querySelectorAll(".stack-option.selected");
  const stackContainer = document.getElementById("badgeStack");

  if (!stackContainer) return;

  let currentStacks = stackContainer.querySelectorAll("img").length;

  if (selectedOptions.length === 0) {
    showToast("Selecione pelo menos uma stack ⚠️");
    return;
  }

  selectedOptions.forEach(option => {

    if (currentStacks >= MAX_STACKS) return;

    const type = option.dataset.type;
    const stackData = stacks.find(s => s.type === type);
    if (!stackData) return;

    const jaExiste = stackContainer.querySelector(`img[data-type="${type}"]`);
    if (jaExiste) return;

    const icon = document.createElement("img");
    icon.src = stackData.icon;
    icon.dataset.type = type;
    icon.classList.add("stack-icon");

    icon.addEventListener("click", () => {
      icon.remove();
      showToast(stackData.name + " removida ❌");
      updateStackCounter();
    });

    stackContainer.appendChild(icon);
    currentStacks++;
  });

  document.querySelectorAll(".stack-option").forEach(opt => {
    opt.classList.remove("selected");
  });

  updateStackCounter();
  closeStackModal();
  showToast("Stacks atualizadas 🚀");
}

/* ====================== */
function updateStackCounter() {

  const modal = document.getElementById("stackModal");
  const counter = document.getElementById("stackCounter");
  const stackContainer = document.getElementById("badgeStack");
  const options = document.querySelectorAll(".stack-option");

  if (!counter || !stackContainer || !modal) return;

  const mode = modal.dataset.mode || "pro";

  let badgeCount = 0;
  let selectedCount = document.querySelectorAll(".stack-option.selected").length;
  let max = MAX_STACKS;

  if (mode === "pro") {

    // Conta apenas stacks PRO (sem data-free)
    badgeCount = stackContainer.querySelectorAll('img:not([data-free="true"])').length;
    max = MAX_STACKS;

  } else if (mode === "free") {

    // Conta apenas stacks FREE
    badgeCount = stackContainer.querySelectorAll('img[data-free="true"]').length;
    max = MAX_FREE_STACKS;

  }

  const total = badgeCount + selectedCount;

  counter.textContent = `${total}/${max} stacks`;

  if (total >= max) {

    counter.parentElement.classList.add("limit-reached");

    options.forEach(option => {
      if (!option.classList.contains("selected")) {
        option.style.opacity = "0.4";
        option.style.pointerEvents = "none";
      }
    });

  } else {

    counter.parentElement.classList.remove("limit-reached");

    options.forEach(option => {
      option.style.opacity = "1";
      option.style.pointerEvents = "auto";
    });
  }
}


/* ====================== */
/* MODAL PLANO */
/* ====================== */

function openPlanModal() {
  const modal = document.getElementById("planModal");
  if (modal) modal.classList.add("show");
}

function closePlanModal() {
  const modal = document.getElementById("planModal");
  if (modal) modal.classList.remove("show");
}

function goToCheckout() {
  window.location.href = "https://pay.kiwify.com.br/9c9siV0";
}

/* ====================== */
/* ATUALIZA INTERFACE PRO */
/* ====================== */

function updateProUI() {

  const planLink = document.getElementById("planLink");
  const stackLink = document.getElementById("stackLink");
  const logo = document.getElementById("logoTitle");

  if (isProUser) {

    // 🔓 Abre cadeado
    if (stackLink) {
      stackLink.innerHTML = "Adicionar Stack 🔓";
    }

    // 🚀 Esconde plano
    if (planLink) {
      planLink.style.display = "none";
    }

    // 👑 Logo Premium
    if (logo && !logo.innerHTML.includes("Premium")) {
      logo.innerHTML = `
        Brandin 
        <span style="
          font-size:12px;
          background:gold;
          color:#000;
          padding:3px 8px;
          border-radius:20px;
          margin-left:8px;
          font-weight:600;
        ">Premium</span>
      `;
    }

    // Toast opcional
    showToast("Plano Premium ativado 👑");
  }
}

