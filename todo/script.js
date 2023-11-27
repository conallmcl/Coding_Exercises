todoTemplate = `
<h1 class="text"></h1>
<div class="todobuttons">
<div class="button">
    <i class="fa-solid fa-check" onclick="markComplete(this)"></i>
</div>
<div class="button">
    <i class="fa-solid fa-trash" onclick="delToDo(this)"></i>
</div>
</div>
`

todoInput = document.querySelector(".todoinput")
todoContainer = document.querySelector(".todo-container")

document.getElementById('inputBox').addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault()

        document.getElementById('inputButton').click()
    }
})

//add to do

addToDo = () => {
    text = todoInput.value
    newToDo = document.createElement("div")
    newToDo.classList.add("todoitem")
    newToDo.innerHTML = todoTemplate
    newToDo.querySelector(".text").innerText = text
    todoContainer.appendChild(newToDo)
}

//delete to do

delToDo = (target) => {
    toDoItem = target.closest(".todoitem")
    toDoItem.remove()
}

//mark as complete

markComplete = (target) => {
    toDoItem = target.closest(".todoitem")
    toDoItem.classList.add("complete")
    //change checkmark to revert button
}

//mark as incomplete

//recycle bin for undoing completed tasks

//create a data structure with the todo's, store them in 
//said data structure in raw format so they can preload

//map - loops through array and loads new array