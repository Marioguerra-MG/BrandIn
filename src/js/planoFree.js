/* ======================
   STACKS FREE
====================== */

const MAX_FREE_STACKS = 3;

function openStackOptionsFree() {

  const modal = document.getElementById("stackModal");
  const container = document.getElementById("stackOptions");

  if (!modal || !container) return;

  container.innerHTML = "";

  stacksFree.forEach(stack => {

    const div = document.createElement("div");
    div.classList.add("stack-option");
    div.dataset.type = stack.type;

    div.innerHTML = `
      <img src="${stack.icon}">
      <span>${stack.name}</span>
    `;

    div.addEventListener("click", () => {

  const badgeContainer = document.getElementById("badgeStack");

  // 🔎 Conta apenas stacks FREE
  const currentFreeStacks = badgeContainer.querySelectorAll(
    'img[data-free="true"]'
  ).length;

  // 🚫 Limite FREE real
  if (!div.classList.contains("selected") && currentFreeStacks >= MAX_FREE_STACKS) {
    showToast("Limite FREE atingido ");
    return;
  }

  div.classList.toggle("selected");

  if (div.classList.contains("selected")) {

    const icon = document.createElement("img");
    icon.src = stack.icon;
    icon.dataset.type = stack.type;

    // 👇 Marca como FREE
    icon.dataset.free = "true";

    icon.classList.add("stack-icon");

    icon.addEventListener("click", () => {
      icon.remove();
      div.classList.remove("selected");
      showToast("Stack removida ");
    });

    badgeContainer.appendChild(icon);

  } else {

    const iconToRemove = document.querySelector(
      `#badgeStack img[data-type="${stack.type}"][data-free="true"]`
    );

    if (iconToRemove) iconToRemove.remove();
  }

});


    container.appendChild(div);
  });

  // Atualiza título do modal
  const title = modal.querySelector("h3");
  const limitText = modal.querySelector(".stack-header p");

  if (title) title.innerText = "Escolha suas Stacks Free ";
  if (limitText) limitText.innerText = "Você pode selecionar até 3 stacks";

  modal.classList.add("show");
}
