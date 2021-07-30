const inputArea = document.querySelector("#input-text");
const outputArea = document.querySelector("#output-text");
const form = document.querySelector("#form");

const url = "https://api.funtranslations.com/translate/dothraki.json";

const urlCreator = (input) => `${url}?text=${input}`;

function clickHandler(event) {
  var input = inputArea.value;
  fetch(urlCreator(input))
    .then(res => {
      return res.json();
    })
    .then(data => outputArea.innerText = data.contents.translated)
    .catch(err => console.log("error: " + err));
  event.preventDefault();
}

form.addEventListener("submit", clickHandler);