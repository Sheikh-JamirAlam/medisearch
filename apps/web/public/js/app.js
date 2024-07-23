const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-css");
      setTimeout(() => {
        entry.target.classList.remove("hidden-css");
      }, 500);
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden-css");
hiddenElements.forEach((element) => observer.observe(element));
