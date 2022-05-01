const links = document.querySelectorAll(".header-menu a");

function currentPage(link) {
  const href = link.href;
  const url = location.href.split("/")[3];

  if (href.includes(url) && url !== "") {
    link.classList.add("active");
  }
}

links.forEach(currentPage);
