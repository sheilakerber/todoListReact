import React from "react"
import TodoItem from "./TodoItem"


function MainContent(){

    const name = "Sheila"
    return (
        <div className="todoList" >
            <h1>To do list of: {name}</h1>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem /> 
        </div>
    )
}

export default MainContent