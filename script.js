const btn = document.getElementById("explodeBtn");

btn.addEventListener("click", () => {
  btn.classList.add("explode");

  setTimeout(() => {
    window.location.href = "quotes.html";
  }, 800);
});
