import React from "react"


function TodoItem(props){
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todoItem">
            <input 
                type="checkbox" 
                checked={props.task.completed}
                onChange={(event) => props.handleChange(props.task.id)}
            />
            <p style={props.task.completed ? completedStyle : null}>{props.task.text}</p>
        </div>
    )
}

export default TodoItem