//
// Header animation
//

const fadeIn = document.querySelectorAll(".fade-in");

fadeIn.forEach((element, index) => {
  const delay = (index + 5) / 17;
  element.style.animationDelay = `${delay}s`;
});

//
// Reveal elements
//

// SlideIn
function reveal(element) {
  const reveals = document.querySelectorAll(element);
  for (var i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("in-view");
    } else {
      reveals[i].classList.remove("in-view");
    }
  }
}

window.addEventListener("scroll", () => {
  reveal(".slide-in-on-scroll");
  reveal(".fade-in-on-scroll");
  reveal(".stroke");
});

//
// Projects
//

const projects = document.querySelector(".projects");

// Project information
const projectArray = [
  {
    name: "Interactive registration form",
    text: "An interactive registration form for a fictional Full Stack conference with conditional behavior and interactivity. The form validates user input with error messages.",
    url: "/interactive-form",
    image: "images/interactive_form.png",
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Employee Directory",
    text: "An employee directory using a third-party API to fetch random employees. Includes features like a modal window and search functionality.",
    url: "/employee_directory",
    image: "images/employee_directory.png",
    skills: ["JavaScript", "HTML", "CSS", "API"],
  },
  {
    name: "WebApp Dashboard",
    text: "An interactive dashboard for a web application including SVG graphics, tables, interactive charts and form validation. LocalStorage is used to save changes in the settings section.",
    url: "/web_app_dashboard",
    image: "images/dashboard.png",
    skills: ["JavaScript", "HTML", "CSS", "SASS"],
  },
  {
    name: "Phrase Hunter",
    text: "A browser-based, word guessing game. JavaScript and Object-Oriented Programming is used to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard or using the keyboard.",
    url: "/oop-game-show-app-fs",
    image: "images/wheel_of_success.png",
    skills: ["JavaScript", "OOP", "HTML", "CSS"],
  },
  {
    name: "Image Gallery",
    text: "An interactive searchable image gallery with lightbox functionality, built with HTML, CSS and JavaScript.",
    url: "/photo_gallery_project",
    image: "images/gallery.png",
    skills: ["JavaScript", "HTML", "CSS", "SASS"],
  },
  // {
  //   name: "Wheel Of Success",
  //   text: "A word guessing game where players click letters on an on-screen keyboard to try to guess a random sentence. JavaScript is used for the game functionality.",
  //   url: "/game_show_app",
  //   image: "images/wheel_of_success.png",
  //   skills: ["JavaScript", "HTML", "CSS"],
  // },
  // {
  //   name: "Online Registration Form",
  //   text: "A responsive, mobile-first registration form using HTML forms and CSS.",
  //   url: "/online-registration-form-project",
  //   image: "images/online-form.png",
  //   skills: ["JavaScript", "HTML", "CSS", "SASS"],
  // },
];

// Loops through the projects in the projectArray and and appends the projects.

projectArray.forEach((element) => {
  const projectDiv = document.createElement("div");
  projectDiv.className = "project";

  const contentDiv = document.createElement("div");
  contentDiv.className = "project-content";

  const projectH3 = document.createElement("h3");
  projectH3.className = "project-h3 slide-in-on-scroll";
  projectH3.innerHTML = `<a href="${element.url}" target=”_blank”>${element.name}</a>`;

  const projectTextDiv = document.createElement("div");
  projectTextDiv.className = "project-text-container slide-in-on-scroll";
  projectTextDiv.innerHTML = `<p class="project-text">${element.text}</p>`;

  const techUl = document.createElement("ul");
  techUl.className = "project-tech-container slide-in-on-scroll";
  let li = "";

  element.skills.forEach((element) => {
    li += `<li>${element}</li>`;
  });

  techUl.innerHTML = li;

  const projectBtnDiv = document.createElement("div");
  projectBtnDiv.className = "slide-in-on-scroll";
  projectBtnDiv.innerHTML = `<a class="project-btn slide-in-on-scroll" href="${element.url}" target="_blank">Open project</a>`;

    

  const imageA = document.createElement("a");
  imageA.className = "project-image-div";
  imageA.href = element.url;
  imageA.target = "_blank";
  imageA.innerHTML = `<img class ="project-image fade-in-on-scroll" src="${element.image}" alt="Project image: ${element.name}"></img>`;

  contentDiv.appendChild(projectH3);
  contentDiv.appendChild(projectTextDiv);
  contentDiv.appendChild(techUl);
  contentDiv.appendChild(projectBtnDiv);

  projectDiv.appendChild(contentDiv);
  projectDiv.appendChild(imageA);

  projects.appendChild(projectDiv);
});

//
// Change color and hover color for all section headers on click.
//

const letters = document.querySelectorAll(".letter");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("letter")) {
    letters.forEach((element) => {
      if (!element.classList.contains("color-switch-bg")) {
        element.classList.add("color-switch-bg");
      } else {
        element.classList.remove("color-switch-bg");
      }
    });
  }
});

//
// Decode email
//

// let encEmail = "Ympvcm4uamFrb2JzZW45MUBnbWFpbC5jb20=";
// const form = document.getElementById("contact-email");
// form.setAttribute("href", "mailto:".concat(atob(encEmail)));
// form.textContent = "".concat(atob(encEmail));

const user = "bjorn";
  const domain = "bjrn.dev";
  const email = `${user}@${domain}`;

  const link = document.getElementById("contact-email");
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  });