
const writeToDo = document.getElementById('write-to-do')
const addTodo = document.getElementById('add-to-do')
const todoArea = document.getElementById('to-do-area')

addTodo.addEventListener('click', addItem)
function addItem() {
    render()
}

function render() {

    let newContent = ''
    if (writeToDo.value) {
        newContent = `
        <div class="to-do-item">
            <input type="checkbox" name="" id="checkbox" class="checkbox">
            <p>${writeToDo.value}</p>
            <button id="remove-todo" class="remove-todo">X</button>
        </div>`
    } else {
        writeToDo.value = "Write something"
        setTimeout(() => {
            writeToDo.value = ""
        }, 1000)
    }

    todoArea.innerHTML += newContent

    const removeTodo = document.getElementsByClassName('remove-todo')

    for (let i = 0; i < removeTodo.length; i++) {
        removeTodo[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";

        }

    }

    let checkbox = document.getElementsByClassName('checkbox')
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].onchange = function () {
            let div = checkbox[i].parentElement
            div.classList.toggle('check')
        }

    }

}













