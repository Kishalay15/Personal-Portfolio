export const scrollToSection = (e, href) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64,
        behavior: "smooth",
      });
    }
  }
};
