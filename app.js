const close = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar-toggle");
const aside = document.querySelector(".sidebar");

close.addEventListener("click", () => {
  if (aside.classList.contains("show-sidebar")) {
    aside.classList.remove("show-sidebar");
  } else {
    aside.classList.add("show-sidebar");
  }
});

sidebar.addEventListener("click", () => {
  if (aside.classList.contains("show-sidebar")) {
    aside.classList.remove("show-sidebar");
  } else {
    aside.classList.add("show-sidebar");
  }
});
