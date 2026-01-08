/* ===== Citat-slider ===== */
const track = document.querySelector(".citat-slider-track");
const citater = document.querySelectorAll(".citat");

const kortBredde = 420 + 24;
let index = 0;

if (track) {
  setInterval(() => {
    index++;

    if (index > citater.length - 2) {
      index = 0;
    }

    track.style.transform = `translateX(-${index * kortBredde}px)`;
  }, 4000);
}

/* ===== Burger menu ===== */
const burgerBtn = document.getElementById("burgerBtn");
const slideMenu = document.getElementById("slideMenu");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");

if (burgerBtn && slideMenu && menuOverlay && menuClose) {
  burgerBtn.addEventListener("click", () => {
    slideMenu.classList.add("active");
    menuOverlay.classList.add("active");
  });

  menuClose.addEventListener("click", closeMenu);
  menuOverlay.addEventListener("click", closeMenu);

  function closeMenu() {
    slideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
  }
  
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

