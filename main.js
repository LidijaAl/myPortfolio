const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const main = document.querySelectorAll(".main");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
      link.classList.toggle("fade")
  })
});

hamburger.addEventListener("click", ()=>{
  main.forEach(item => {
    item.classList.toggle("noshow")
  })
})