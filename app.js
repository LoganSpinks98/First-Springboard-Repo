document.addEventListener("DOMContentLoaded", function() {
let todoForm = document.getElementById("todo_Form");
let todoList = document.getElementById("todo_List");
const localTodos = JSON.parse(localStorage.getItem("TodoItems")) || [];
todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

let todoItem = document.createElement("li");
    let removeButton = document.createElement("button");
    todoItem.innerText = document.getElementById("newTodoItem").value;
    removeButton.innerText = "Remove";
todoForm.reset();
todoList.appendChild(todoItem);
localTodos.push({todo: todoItem.innerText, completed: false});
localStorage.setItem("TodoItems", JSON.stringify(localTodos));

todoItem.appendChild(removeButton);

});

todoList.addEventListener("click", function(event) {
    let clickedItem = event.target;
const tagToLowerCase = clickedItem.tagName.toLowerCase();
if (tagToLowerCase === "button") {
    clickedItem.parentNode.remove();
  }
  else if (tagToLowerCase === "li") {
    clickedItem.style.textDecoration = "line-through";
}
for (let i = 0; i < localTodos.length; i++) {
    clickedItem.innerText = localTodos[i].todo;
    if (localTodos[i].todo === clickedItem.innerText) {
        localTodos[i].completed = !localTodos[i].completed;

        localStorage.setItem("TodoItems", JSON.stringify(localTodos))

    }
}

});


for (let i = 0; i < localTodos.length; i++) {
    let todoItem = document.createElement("li");
    todoItem.innerText = localTodos[i].todo;
    todoItem.completed = localTodos[i].completed ? true : false;
    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    if (todoItem.completed) {
        todoItem.style.textDecoration = "line-through";
    }
    todoList.appendChild(todoItem);
    todoItem.appendChild(removeButton)
}
})
