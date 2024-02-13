// toggle icon navbar
let navbarr = document.querySelector(".navbar");
let meiconn = document.querySelector("#menuicon");

meiconn.addEventListener("click", () => {
  meiconn.classList.toggle("bi-arrow-left-circle");
  meiconn.classList.toggle("bi-arrow-right-circle");
  navbarr.classList.toggle("sm:max-lg:hidden");
});

// scroll section active link
let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //  Sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.screenY > 100);

  //closing the navbar in sm when clicking on a(s) in nav
  meiconn.classList.add("bi-arrow-left-circle");
  meiconn.classList.remove("bi-arrow-right-circle");
  navbarr.classList.add("sm:max-lg:hidden");
};

// scroll reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".homecontent , .heading", { origin: "top" });
ScrollReveal().reveal(".homeheading , .aboutimg", { origin: "left" });
ScrollReveal().reveal(".homep , .aboutcontent", { origin: "right" });
ScrollReveal().reveal(
  ".homeimg , .servicecontent , .portbox, .contactform,footer",
  {
    origin: "bottom",
  }
);

//typed js
const typed = new Typed(".multiple-text", {
  strings: ["FrontEnd Developer", "Youtuber", "Video Editor"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
