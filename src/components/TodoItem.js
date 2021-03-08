import React from "react"


function TodoItem(props){
    return (
        <div className="todoItem">
            <input type="checkbox" />
            <p>{props.item}</p>
        </div>
    )
}

export default TodoItem