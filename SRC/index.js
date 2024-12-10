function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "4 (4 ounce) lamb chops 1 tablespoon olive oil, or as needed 1 clove",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
