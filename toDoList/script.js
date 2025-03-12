function addTask() {
    let taskText = document.getElementById("taskInput").value;
    if (taskText) {
        let li = document.createElement("li");
        li.textContent = taskText;

        //Botão de concluir tarefas
        let completeBtn = document.createElement("button");
        completeBtn.textContent = "Concluir";
        completeBtn.onclick = function() {
            li.style.textDecoration = "line-through";
        };
        li.appendChild(completeBtn)

        //Botão de Excluir
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Excluir";
        deleteBtn.onclick = function() {
            li.remove();
        }
        li.appendChild(deleteBtn);

        // Inserir tarefas
        document.getElementById("taskList").appendChild(li);
        document.getElementById("taskInput").value = "";
    }
}