const themeBtn = document.getElementById("theme-button");
const themeIcon = document.querySelector("i");
const body = document.querySelector("body");

themeBtn.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    body.classList.remove("light-mode");
  } else {
    themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    body.classList.add("light-mode");
  }
});

console.log(themeIcon);
