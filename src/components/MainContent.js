import React from "react"
import TodoItem from "./TodoItem"


function MainContent(){

    const name = "Sheila"
    return (
        <div className="todoList" >
            <h1>To do list of: {name}</h1>
            <TodoItem item="Buy fruits" />
            <TodoItem item="Water the plants"/>
            <TodoItem item="Call my office"/>
            <TodoItem item="Send Ana's gift"/> 
        </div>
    )
}

export default MainContent