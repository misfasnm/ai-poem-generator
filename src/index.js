function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Nature's first green is gold, Her hardest hue to hold.",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
