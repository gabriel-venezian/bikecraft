const links = document.querySelectorAll(".header-menu a");

function currentPage(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(currentPage);
