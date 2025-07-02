const taskInput = document.getElementById("taskInput");
const deadlineInput = document.getElementById("deadlineInput");
const addBtn = document.getElementById("addBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const taskList = document.getElementById("taskList");

function createTaskElement(taskText, deadline) {
  const li = document.createElement("li");

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;
  taskContent.style.cursor = "pointer";

  taskContent.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deadlineSpan = document.createElement("span");
  deadlineSpan.className = "deadline";
  if (deadline) {
    const formatted = new Date(deadline).toLocaleDateString();
    deadlineSpan.textContent = ` (Due: ${formatted})`;
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(taskContent);
  if (deadline) li.appendChild(deadlineSpan);
  li.appendChild(deleteBtn);
  return li;
}

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  const deadline = deadlineInput.value;

  if (taskText === "") return;

  const li = createTaskElement(taskText, deadline);
  taskList.appendChild(li);

  taskInput.value = "";
  deadlineInput.value = "";
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

clearAllBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});
