function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value;

    if (task == "") {
        alert("Please enter a task");
        return;
    }

    let list = document.getElementById("taskList");

    let item = document.createElement("li");

   item.innerHTML =
'<input type="checkbox"> ' +
task +
' <button onclick="this.parentElement.remove()">Delete</button>';

    list.appendChild(item);

    input.value = "";

}