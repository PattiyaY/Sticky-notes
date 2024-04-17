const title = document.getElementById("title_text");
const content = document.getElementById("content_text");
const submitTask = document.getElementById("submit");
const container = document.getElementById(".container");
const noteLeft = document.getElementById(".notes-left");
const noteRight = document.getElementById(".notes-right");
let storedInput = JSON.parse(localStorage.getItem("textInput")) || [];
let id = 0;

function newId() {
  id += 1;
  return id;
}

function createPostIt() {
  const newTask = {
    id: newId(),
    task: title.value,
    content: content.value,
  };

  storedInput.push(newTask);
  console.log(storedInput);
}

submitTask.addEventListener("click", () => {
  createPostIt();
});

/* TESTTTTTTT */
// submitTask.addEventListener("click", () => {
//   console.log(title.value);
//   console.log(content.value);
// });
