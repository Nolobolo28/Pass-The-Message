button = document.querySelector("button");
textInput = document.querySelector("#text-input");
noText = document.querySelector("#no-input");
lastMsg = document.querySelector("#last-msg");

function handleText(ev) {
  ev.preventDefault();
  let myForm = ev.target;
  let fd = new FormData(myForm);
  for (const [key, value] of fd) {
    if (value === "") {
      noInput();
    } else {
      lastMsg.textContent = value;
      clearForm();
    }
  }
}

function noInput() {
  noText.style.display = "block";
  setTimeout(clearForm, 3000);
}

function clearForm() {
  document.querySelector("#my-form").reset();
}

document.querySelector("#my-form").addEventListener("submit", handleText);
