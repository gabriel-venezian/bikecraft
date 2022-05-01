// Current Page
const links = document.querySelectorAll(".header-menu a");

function currentPage(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(currentPage);

// Activate budget items
const params = new URLSearchParams(location.search);

function budgetItem(param) {
  const element = document.getElementById(param);

  if (element) {
    element.checked = true;
  }
}

params.forEach(budgetItem);

// Frequently Asked Questions
const faq = document.querySelectorAll(".faq button");

function displayQuestion(e) {
  const question = e.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function eventQuestion(question) {
  question.addEventListener("click", displayQuestion);
}

faq.forEach(eventQuestion);

// Bike Gallery
const gallery = document.querySelectorAll(".bike-img img");
const galleryContainer = document.querySelector(".bike-img");

function changeImg(e) {
  const img = e.currentTarget;

  if (innerWidth >= 920 || (innerWidth <= 800 && innerWidth >= 460)) {
    galleryContainer.prepend(img);
  }
}

function eventGallery(img) {
  img.addEventListener("click", changeImg);
}

gallery.forEach(eventGallery);
