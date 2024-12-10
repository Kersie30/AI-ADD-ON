function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "596e8ff92tc946d86a0032fef5649ob0";
  let prompt = `User instructions: Generate a recipe about ${instructionsInput.value}`;
  let context =
    "You are a recipe expert and love to write short recipes. Your mission is to generate an 8 line recipe. Each line must be seperated with a <br/>. Make sure to follow the user instructions. Do not include a title to the recipe. Sign the recipe with 'SheCodes AI' inside a strong <strong> element at the bottom of the recipe";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">🖋 A recipe about ${instructionsInput.value} is generating...</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
