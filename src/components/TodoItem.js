import React from "react"


function TodoItem(props){
    return (
        <div className="todoItem">
            <input type="checkbox" />
            <p>{props.task}</p>
        </div>
    )
}

export default TodoItem