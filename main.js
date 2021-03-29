"use strict";

// Toggle button control for mobile version //
const navbarMenu = document.querySelector(".menubar")
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});


// Chatbox Darkmode Control //
const darkModeBtn = document.querySelector(".darkMode");
const chatContainer = document.querySelector(".chat__container")

darkModeBtn.addEventListener("click", () => {
  if (chatContainer.classList.contains("dark")) {
    chatContainer.classList.remove("dark");
  } else {
    chatContainer.classList.add("dark");
  }
})