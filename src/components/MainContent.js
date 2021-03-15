import React from "react"
import TodoItem from "./TodoItem"
import todosData from "../todosData"

class MainContent extends React.Component {
    constructor(){
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        console.log("Task status changed!", id)
    }

    render(){
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} task={item} />)
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} task={item} handleChange={this.handleChange}/>)

        return (
            <div className="todoList" >
                {todoItems}
            </div>
        )
    }
}

export default MainContent