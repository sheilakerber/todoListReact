import React from "react"

function Header(){
    const name = "Sheila"
    return (
        <header className="classHeader">
            <h1>To-do list of: {name}</h1>
        </header>
    )
}

export default Header