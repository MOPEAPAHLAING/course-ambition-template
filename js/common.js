const navToggle = document.querySelector("#navToggle");
const navClosedIcon = document.querySelector("#navClosed");
const navOpenIcon = document.querySelector("#navOpen");
const navIcon = document.querySelectorAll(".nav-icon");
const nav = document.querySelector(".nav-bar");

navToggle.addEventListener(
	"click", function(){
		nav.classList.toggle("open");
		navIcon.forEach((icon) => {
			icon.classList.toggle("hidden");
		});
});

window.addEventListener(
  "resize",
  function () {
    if (document.body.clientWidth > 767) {
      nav.classList.remove("open");
      navIcon.forEach((icon) => {
        icon.classList.remove("hidden");
      });
      navOpenIcon.classList.add("hidden");
    }
  },
  { passive: false }
);