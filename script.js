let tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");
function renderTasks() {
    document.getElementById("list").innerHTML = ""
    localStorage.setItem("tasks",JSON.stringify(tasks));  
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.addEventListener("click", () => {
            task.done = !task.done
            renderTasks();
        });
        li.textContent = task.text;
        //delete X
        let del = document.createElement("button");
        del.textContent = "X";
        del.addEventListener("click", (event) => {
            event.stopPropagation();
            tasks = tasks.filter(t => t !== task)
            renderTasks();
        });
        li.appendChild(del);
        //strike or toggle  CSS
        if (task.done === true) {
            li.style.textDecoration = "line-through";
        }
        document.getElementById("list").appendChild(li);
    });
}
renderTasks();
let btn = document.getElementById("button");
btn.addEventListener("click", () => {
    let input = document.getElementById("input").value;
    tasks.push({ text: input, done: false });
    renderTasks();
    document.getElementById("input").value = "";
});