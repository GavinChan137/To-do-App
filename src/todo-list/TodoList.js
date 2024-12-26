import { useState } from "react"
import TodoItem from "./TodoItem"
import Header from "../todo-header/Header"
import "../todo-list/TodoList.css"
function TodoList() {
    const [todoData, setToDoData] = useState(
        [
            { id: 0, title: "go to the gym" },
            { id: 1, title: "eat food" },
            { id: 2, title: "play videogames" },
        ]
    )
    const [newToDo, setNewToDo] = useState("")

    function addTodo() {
        let newId = Date.now() + Math.random()
        let todo = { id: newId, title: newToDo }
        setToDoData([...todoData, todo])
        setNewToDo("")
    }
    function onDelete(id) {
        let newToDoList = todoData.filter(item => item.id !== id);
        setToDoData(newToDoList)
    }
    function onEdit(id, updatedTitle) {
        const newToDoList = todoData.map(item => {
            if (item.id === id) {
                return { id: item.id, title: updatedTitle }
            }
            return item;
        });
        setToDoData(newToDoList);
    }

    return (
        <div>
            <Header percentage={todoData.length} />
            <div className="addInputContainer">
                <input
                    value={newToDo}
                    onChange={(e) => setNewToDo(e.target.value)}
                />
                <div className="addInputButton" onClick={() => addTodo()}>
                    add
                </div>

            </div>
            {
                todoData.map((item, index) => (
                    <TodoItem
                        key={index}
                        id={item.id}
                        title={item.title}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                )
                )
            }

        </div>
    )
}
export default TodoList