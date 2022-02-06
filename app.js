const introTags = document.querySelectorAll(".intro_text > .text");

let active = 0;

setInterval(() => {
  active = active === 0 ? 1 : 0;
  notActive = active === 0 ? 1 : 0;
  introTags[active].classList.add("active");
  introTags[notActive].classList.remove("active");
}, 3000);
