const title = document.getElementById("title_text");
const content = document.getElementById("content_text");
const submitTask = document.getElementById("submit");
let storedInput = JSON.parse(localStorage.getItem("textInput")) || [];
let id = 0;

const saveTasksToLocalStorage = () => {
  localStorage.setItem("textInput", JSON.stringify(storedInput));
};

function newId() {
  return (id += 1);
}

const createNotes = () => {
  const newTask = {
    id: newId(),
    task: title.value,
    content: content.value,
  };

  const container = document.createElement("div");
  container.classList.add("container");
  const noteLeft = document.createElement("div");
  noteLeft.classList.add("notes-left");
  const noteRight = document.createElement("div");
  noteRight.classList.add("notes-right");
  const deleteNote = document.createElement("button");
  deleteNote.setAttribute("id", "delete-notes");
  deleteNote.type = "submit";
  const deleteLogo = document.createElement("i");
  deleteLogo.classList.add("gg-layout-pin");
  let todo = document.createElement("ul");
  todo.classList.add("todo");
  const listTodo = content.value.split(",");

  if (newTask.id % 2 === 0) {
    container.appendChild(noteRight);
    noteRight.appendChild(deleteNote);
    deleteNote.appendChild(deleteLogo);
    noteRight.appendChild(todo);
  } else {
    container.appendChild(noteLeft);
    noteLeft.appendChild(deleteNote);
    deleteNote.appendChild(deleteLogo);
    noteLeft.appendChild(todo);
  }

  for (let i = 0; i < listTodo.length; i++) {
    let todos = document.createElement("li");
    todo.appendChild(todos);
    todos.innerText = listTodo[i];
  }
  // console.log(storedInput);
  // console.log(todo);
  // console.log(listTodo);
};

submitTask.addEventListener("click", () => {
  createNotes();
  saveTasksToLocalStorage();
});

function deleteNotes(id) {
  storedInput.remove(id);
}
/* TESTTTTTTT */
// submitTask.addEventListener("click", () => {
//   console.log(title.value);
//   console.log(content.value);
// });

// submitTask.addEventListener("click", () => {
//   console.log(content.value.split(","));
// });
