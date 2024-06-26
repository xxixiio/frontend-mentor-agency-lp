const navButton = document.querySelector(".humburger-button");
const nav = document.querySelector(".nav");

navButton.addEventListener("click", () => {
  if (!(nav.style.display === "flex")) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
});
