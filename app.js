console.log("Portfolio Loaded 🚀");

/* SCROLL REVEAL ANIMATION */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

hiddenElements.forEach((el) => observer.observe(el));

/* ACTIVE NAV LINK */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    if(pageYOffset >= sectionTop - 200){

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if(link.getAttribute("href").includes(current)){

      link.classList.add("active");

    }

  });

});

/* CONTACT FORM */

const sendBtn = document.querySelector(".send-btn");

sendBtn.addEventListener("click", () => {

  const name = document.querySelector("input").value;
  const email = document.querySelector("input[type='email']").value;
  const message = document.querySelector("textarea").value;

  if(name === "" || email === "" || message === ""){

    alert("Please fill all fields!");

  }else{

    alert("Message Sent Successfully 🚀");

  }

});
 

emailjs.send(
  "service_oucubnx",
  "template_zhupb7l",
  {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  }
)