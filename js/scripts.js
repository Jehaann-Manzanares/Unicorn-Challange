const $projects = document.querySelector("#projects");
const $aside = document.getElementById("aside");
const $ocultar = document.getElementById("ocultar");

const options = {
  //   root,
  //   rootMargin: "0 0 0 0",
  threshold: 0.5
};

function callback(entries, observer) {
  if (entries[0].isIntersecting) {
    $aside.classList.remove("Inactive");
    $aside.classList.add("active");
  } else {
    $aside.classList.remove("active");
    $aside.classList.add("Inactive");
  }
}

$ocultar.addEventListener("click", () => {
  $aside.classList.remove("active");
  $aside.classList.add("Inactive");
});

const observer = new IntersectionObserver(callback, options);
observer.observe($projects);
