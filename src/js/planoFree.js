/* ======================
   STACKS FREE
====================== */

const MAX_FREE_STACKS = 3;

function openStackOptionsFree() {

    const modal = document.getElementById("stackModal");
    const container = document.getElementById("stackOptions");
    const counter = document.getElementById("stackCounter");

    if (!modal || !container) return;

    // 👇 Define modo antes de qualquer coisa
    modal.dataset.mode = "free";

    container.innerHTML = "";

    // 🔄 Atualiza contador FREE
    function updateCounter() {
        const badgeContainer = document.getElementById("badgeStack");

        const currentFreeStacks = badgeContainer.querySelectorAll(
            'img[data-free="true"]'
        ).length;

        if (counter) {
            counter.textContent = `${currentFreeStacks}/${MAX_FREE_STACKS} stacks`;
        }
    }

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

            const existingIcon = badgeContainer.querySelector(
                `img[data-type="${stack.type}"][data-free="true"]`
            );

            const currentFreeStacks = badgeContainer.querySelectorAll(
                'img[data-free="true"]'
            ).length;

            // 🔥 Se já existe → remover
            if (existingIcon) {
                existingIcon.remove();
                div.classList.remove("selected");
                showToast("Stack removida");
                updateCounter();
                return;
            }

            // 🚫 Limite FREE
            if (currentFreeStacks >= MAX_FREE_STACKS) {
                showToast("Limite FREE atingido");
                return;
            }

            // ➕ Criar stack FREE
            const icon = document.createElement("img");
            icon.src = stack.icon;
            icon.dataset.type = stack.type;
            icon.dataset.free = "true";
            icon.classList.add("stack-icon");

            icon.addEventListener("click", () => {
                icon.remove();
                div.classList.remove("selected");
                updateCounter();
            });

            badgeContainer.appendChild(icon);
            div.classList.add("selected");

            updateCounter();
        });

        container.appendChild(div);
    });

    // Atualiza texto do modal
    const title = modal.querySelector("h3");
    const limitText = modal.querySelector(".stack-header p");

    if (title) title.innerText = "Escolha suas Stacks Free 🎁";
    if (limitText) limitText.innerText = "Você pode selecionar até 3 stacks";

    modal.classList.add("show");

    updateCounter(); // 👈 Atualiza ao abrir
}
