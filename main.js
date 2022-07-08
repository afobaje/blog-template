import "./style.css";
document.querySelector("#app");
let toggle = document.querySelector(".toggle");
let options = document.querySelector(".options");

toggle.addEventListener("click", () => {
  options.classList.toggle("options");
  options.classList.toggle("show");
});

let observer = new IntersectionObserver(
  (val) => {
    val.forEach((element) => {
      if (element.isIntersecting == true) {
        element.target.classList.add("serial");
        console.log(element.isIntersecting);
      }
    });
  },
  {
    rootMargin: "100px",
    threshold: 0,
  }
);

let section = document.querySelectorAll("section");
section.forEach((e) => {
  observer.observe(e);
});
