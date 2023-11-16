let button = document.getElementById("btn");
let close = document.getElementsByClassName("close")[0];
let navBar = document.getElementsByClassName("nav-box")[0];
button.onclick = function openNavBar() {
  navBar.classList.add("show"); //   navBar.style.height = "100%";
};
close.onclick = function closeNavBar() {
  navBar.classList.remove("show");
};
