const MAX_FREE_STACKS = 3;

function openStackOptionsFree() {

    const modal = document.getElementById("stackModalFree");
    const container = document.getElementById("stackOptionsFree");
    const counter = document.getElementById("stackCounterFree");
    const badgeContainer = document.getElementById("badgeStack");

    if (!modal || !container || !badgeContainer) return;

    container.innerHTML = "";

    function updateCounter() {
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

            const existingIcon = badgeContainer.querySelector(
                `img[data-type="${stack.type}"][data-free="true"]`
            );

            const currentFreeStacks = badgeContainer.querySelectorAll(
                'img[data-free="true"]'
            ).length;

            // 🔥 Remove se já existir
            if (existingIcon) {
                existingIcon.remove();
                div.classList.remove("selected");
                showToast("Stack removida");
                updateCounter();
                return;
            }

            // 🚫 Limite FREE
            if (currentFreeStacks >= MAX_FREE_STACKS) {
                showToast("Limite FREE atingido 🚫");
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
                updateCounter();
            });

            badgeContainer.appendChild(icon);
            div.classList.add("selected");

            updateCounter();
        });

        container.appendChild(div);
    });

    modal.classList.add("show");
    updateCounter();
}

function closeStackModalFree() {
    const modal = document.getElementById("stackModalFree");
    if (modal) modal.classList.remove("show");
}

function confirmStackSelectionFree() {
    closeStackModalFree();
    showToast("Stacks Free atualizadas 🎁");
}
