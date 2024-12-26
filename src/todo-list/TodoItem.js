import { useState } from 'react'
import '../todo-list/TodoItem.css'

function TodoItem({ id, title, onDelete, onEdit }) {
    const [editEnabled, setEditEnabled] = useState(false)
    const [editTitle, setEditTitle] = useState(title)
    function onEditToDo() {
        if (editTitle !== title) {
            onEdit(id, editTitle)
        }
        setEditEnabled(!editEnabled)
    }
    return (
        <div className="toDoItemContainer">
            {
                editEnabled ? (
                    <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)}
                    />
                ) : (
                    <div className='toDoItemTitle'>{title}</div>
                )
            }

            <div className='toDoItemButton' onClick={onEditToDo}>
                edit
            </div>
            <div className='toDoItemButton' onClick={() => onDelete(id)}>
                delete
            </div>
        </div>
    )
}
export default TodoItem