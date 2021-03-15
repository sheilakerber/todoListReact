import React from "react"


function TodoItem(props){
    return (
        <div className="todoItem">
            <input 
                type="checkbox" 
                checked={props.task.completed}
                onChange={(event) => props.handleChange(props.task.id)}
            />
            <p>{props.task.text}</p>
        </div>
    )
}

export default TodoItem