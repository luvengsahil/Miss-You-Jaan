let current = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
  pages[current].classList.add("exit");

  setTimeout(() => {
    pages[current].classList.remove("active", "exit");
    current++;

    if (current < pages.length) {
      pages[current].classList.add("active");
      window.scrollTo(0, 0);
      burstHearts();
    }
  }, 700);
}

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 3) + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}, 500);

/* Heart burst on page change */
function burstHearts() {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = (50 + Math.random() * 30 - 15) + "vw";
    heart.style.animationDuration = "3s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}