firstInput = document.getElementsByTagName("input");

// you dont have to assign a value to the input to different variable you can use it directly and it is always much better

// console.log(taskAssigned);
addButton = document.getElementsByTagName("button");

addButton[0].addEventListener("click", clicked);
function clicked() {
  if (firstInput[0].value === "") {
    alert("please enter something:");
  } else {
    console.log(firstInput[0].value);
    todolist = document.getElementById("To-do-list");
    // firstInput[0].value = "";
    var createdPara = document.createElement("p");
    createdPara.innerHTML = firstInput[0].value;
    todolist.appendChild(createdPara);
    firstInput[0].value = "";
    created = document.getElementById("To-do-list");
    createdPara.addEventListener("click", function () {
      createdPara.style.textDecoration = "line-through";
    });
    createdPara.addEventListener("dblclick", function () {
      todolist.removeChild(createdPara);
    });
    localStorage.setItem(createdPara, firstInput);
  }
}
