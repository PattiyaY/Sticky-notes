window.addEventListener("load", () => {
  const container = document.querySelector(".container-input");
  const input_form = document.querySelector(".input-notes");
  const list_element = document.querySelector("#text");
  let storedInput = JSON.parse(localStorage.getItem("textInput")) || [];

  const saveTasksToLocalStorage = () => {
    localStorage.setItem("textInput", JSON.stringify(storedInput));
  };
});
