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
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map( todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render(){
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} task={item} handleChange={this.handleChange}/>)

        return (
            <div className="todoList" >
                {todoItems}
            </div>
        )
    }
}

export default MainContent