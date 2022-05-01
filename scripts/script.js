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
