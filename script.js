// Копирование прицела
function copy(button) {
    const text = button.dataset.code;
    navigator.clipboard.writeText(text).then(showCopyToast);
}

let copyToastTimer;

function showCopyToast() {
    const toast = document.getElementById("copyToast");

    if (!toast) {
        return;
    }

    toast.classList.add("is-visible");
    clearTimeout(copyToastTimer);

    copyToastTimer = setTimeout(() => {
        toast.classList.remove("is-visible");
    }, 1800);
}

const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

if (toggle) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        root.setAttribute("data-theme", savedTheme);
        toggle.textContent = savedTheme === "dark" ? "🌙" : "☀️";
    }

    toggle.addEventListener("click", () => {
        const current = root.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";

        root.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        toggle.textContent = next === "dark" ? "🌙" : "☀️";
    });
}


function openPreview(gifPath) {
    const modal = document.getElementById("previewModal");
    const gif = document.getElementById("previewGif");

    gif.src = gifPath;
    modal.classList.add("active");
}

function closePreview() {
    document.getElementById("previewModal").classList.remove("active");
}

document.getElementById("previewModal")?.addEventListener("click", (e) => {
    if (e.target.id === "previewModal") {
        closePreview();
    }
});
