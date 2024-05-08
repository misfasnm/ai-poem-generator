function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2f63d45a1055b96oe8ff6tb7ac4c583a";
  let prompt = `User Instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You love to generate poems with passion and loves to write short poems. Your mission is to generate 4 line poems with emoji at the end. Make sure to follow the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
