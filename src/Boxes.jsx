import { useContext } from "react"
import React from 'react'
import { todosContext } from "./TodosStore"
import TodoBox from "./TodoBox"


function Boxes() {
    const todos=useContext(todosContext)
  return (
    <div>
    {todos[0].map(todo =><TodoBox key={todo.id} todo={todo}/>)}
  </div>
  )
}

export default Boxes