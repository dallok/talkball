const darkModeBtn = document.querySelector(".darkMode");
const chatContainer = document.querySelector(".chat__container")

darkModeBtn.addEventListener("click", () => {
  if (chatContainer.classList.contains("dark")) {
    chatContainer.classList.remove("dark");
  } else {
    chatContainer.classList.add("dark");
  }
})