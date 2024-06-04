//Form
const todoForm = document.querySelector(".form");
const taskNameInput = document.querySelector("#task_name");
const taskDescriptionInput = document.querySelector("#task_description");
const taskStatusInput = document.querySelector("#task_status");

//Контейнеры для добавления todo
const todoList = document.querySelector(".wait_container_left");

function deleteTask(button) {
  var item = button.closest(".item");
  if (item) {
    item.parentNode.removeChild(item);
  }
}

function schemaTodoNew(name, description, status) {
  return `<div class="item">
            <p id="p_task_name">${name}</p>
            <p id="p_task_description">${description}</p>
            <p id="p_task_way">${status}</p> 

            <button onclick="deleteTask(this)">Удалить</button>

            <button onclick="changeStatus(this)">Готово</button>
            
          </div>`;
}

function changeStatus(button) {
  var taskContainer = button.parentElement;
  var doneContainer = document.querySelector(".done_container_left"); // Находим контейнер, куда нужно переместить задачу

  const newItem = taskContainer.cloneNode(true); // Клонируем контейнер задачи
  const doneButton = newItem.querySelector("button:nth-of-type(2)"); // Находим кнопку "Готово" из клонированного контейнера задачи

  if (doneButton) {
    doneButton.remove(); // Удаляем кнопку "Готово", если она существует
  }

  doneContainer.appendChild(newItem); // Перемещаем клон контейнера задачи в контейнер done_container_left
  taskContainer.remove(); // Удаляем оригинальный контейнер задачи
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskName = taskNameInput.value;
  const taskDescription = taskDescriptionInput.value;
  const taskStatus = taskStatusInput.value;

  if (taskName && taskDescription && taskStatus) {
    addTodoItem(taskName, taskDescription, taskStatus);
    todoForm.reset();
  }
});

function addTodoItem(name, description, status) {
  const task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = schemaTodoNew(name, description, status);
  todoList.appendChild(task);
}

function dleteTask(item) {
  console.log(item);
}
