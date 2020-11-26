function toggleOpen() {
  document.querySelector(".sidebar-opened-container").style.display = "none";
  document.querySelector(".sidebar-closed-container").style.display = "flex";
}

function toggleClose() {
  document.querySelector(".sidebar-closed-container").style.display = "none";
  document.querySelector(".sidebar-opened-container").style.display = "flex";
}
