"use strict";

// Toggle button control for mobile version 
const navbarMenu = document.querySelector(".menubar")
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});


// Chatbox Darkmode Control 
const darkModeBtn = document.querySelector(".darkMode");
const chatContainer = document.querySelector(".chat__container")

darkModeBtn.addEventListener("click", () => {
  if (chatContainer.classList.contains("dark")) {
    chatContainer.classList.remove("dark");
  } else {
    chatContainer.classList.add("dark");
  }
})

// Random Talk Modal Control
var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', function () {
	myInput.focus();
});