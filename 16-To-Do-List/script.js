const form = document.querySelector("form");
const inputElm = document.querySelector("input");
const todoElm = document.querySelector("ul");
const errorElm = document.querySelector(".error");

const tasks = [];

const createTaskElement = (task) => {
    const taskElement = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;

    const deleteElm = document.createElement("div");
    deleteElm.classList.add("delete");

    const deleteImg = document.createElement("img");
    deleteImg.src = "./delete.png";

    const editElm = document.createElement("div");
    editElm.classList.add("edit");

    const editImg = document.createElement("img");
    editImg.src = "./edit.png";

    editElm.append(editImg);

    const checkElm = document.createElement("div");
    checkElm.classList.add("check", "hidden");

    const checkImg = document.createElement("img");
    checkImg.src = "./check.png";

    checkElm.append(checkImg);

    deleteElm.append(deleteImg);
    taskElement.append(taskText, deleteElm, editElm, checkElm);

    todoElm.append(taskElement);
}

const showError = (message) => {
    errorElm.classList.remove("hidden");
    errorElm.textContent = message;
    inputElm.value = "";
}

const hideError = () => {
    errorElm.classList.add("hidden");
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const task = inputElm.value.trim();
    
    if (!task.trim()) {
        showError("Do not Leave Task Empty.")
        return;
    }
    
    const isDuplicate = tasks.some((t) => t.toLowerCase() === task.toLowerCase());
    
    if (isDuplicate) {
        showError(`${task} is already exist.`)
        return;
    }

    if (tasks.length >= 10) {
        showError(`To Do List is Full.`)
        return;
    }
    tasks.push(task);

    console.log(tasks);
    
    
    createTaskElement(task);
    
    if (errorElm.isConnected) {        
        hideError()
    }

    form.reset();
})

todoElm.addEventListener("click", (event) => {  
    const isDeleteElm = event.target.closest(".delete");
    const isEditElm = event.target.closest(".edit");
    const isCheckElm = event.target.closest(".check");
    const taskInput = event.target;

    if (isDeleteElm) {
        const text = isDeleteElm.previousElementSibling.textContent;
        const index = tasks.indexOf(text);
        tasks.splice(index, 1);

        isDeleteElm.parentElement.remove();
        return;
    }   

    if (isEditElm) {
        
        const textElm = isEditElm.parentElement.querySelector("span");
        const checkElm = isEditElm.nextElementSibling;

        const prevText = textElm.textContent;
        const index = tasks.indexOf(prevText);

        textElm.setAttribute("contenteditable", "true")
        textElm.focus();

        checkElm.classList.remove("hidden");
        isEditElm.classList.add("hidden");

        textElm.addEventListener("blur", () => {
            textElm.setAttribute("contenteditable", "false");
            checkElm.classList.add("hidden");
            isEditElm.classList.remove("hidden");

            tasks[index] = textElm.textContent;
            console.log(tasks);
            
        }, { once: true });

        return;
    }

    if (isCheckElm) {
        const editElm =  isCheckElm.previousElementSibling;
        isCheckElm.classList.add("hidden");
        editElm.classList.remove("hidden");
    }

})
