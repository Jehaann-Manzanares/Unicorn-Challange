const $projects = document.querySelector("#projects");
const $aside = document.getElementById("aside");

const options = {
  //   root,
  //   rootMargin: "0 0 0 0",
  threshold: 0.5
};

function callback(entries, observer) {
  if (entries[0].isIntersecting) {
    $aside.classList.add("active");
  } else {
    $aside.classList.remove("active");
  }
}

const observer = new IntersectionObserver(callback, options);
observer.observe($projects);
