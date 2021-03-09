import React from "react"
import TodoItem from "./TodoItem"
import todosData from "../todosData"

function MainContent(){

    const todosComponent = todosData.map(item => <TodoItem key={item.id} task={item.text} />)
    return (
        <div className="todoList" >
             {todosComponent}
        </div>
    )
}

export default MainContent