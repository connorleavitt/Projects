document.addEventListener("click", (e) => {
  const isDropDownButton = e.target.matches("[data-menu-list-item]");
  if (!isDropDownButton && e.target.closest("[data-menu-list]") != null) return;
  let currentDropdown;
  if (isDropDownButton) {
    currentDropdown = e.target.closest("[data-menu-list]");
    currentDropdown.classList.toggle("active");
  }
  document.querySelectorAll("[data-menu-list].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});
