const items = document.querySelectorAll("p");
const input = document.querySelector("#userInput");
const button = document.querySelector("button");
const listContainer = document.querySelector(".listContainer");

function toDoList() {
  let item = document.createElement("p");
  item.innerText = input.value;
  listContainer.appendChild(item);
  input.value = "";
  item.addEventListener("click", function() {
    this.style.transform = "translateX(100%)";
    setTimeout(function() {
      item.style.display = "none";
    }, 500);
  });
}

button.addEventListener("click", toDoList);
window.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    toDoList();
  }
});

items.forEach(item => {
  item.addEventListener("click", function() {
    this.style.transform = "translateX(-1000px)";
  });
});
