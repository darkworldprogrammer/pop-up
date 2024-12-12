const button = document.querySelector(".button");
const popup = document.querySelector(".popup");
const closeIcon = document.querySelector(".close-icon");

button.addEventListener("click", () => {
  popup.classList.add("open");
  button.style.display = "none";
});
closeIcon.addEventListener("click", () => {
  popup.classList.remove("open");
  button.style.display = "block";
});

// closeIcon.addEventListener("click", () => {
//   closeIcon.classList.add("remove");
// //   popup.style.opacity = "0";
//   popup.style.display = "none";
//   button.style.display = "block";
// });
