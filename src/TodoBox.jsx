import React, { useContext } from 'react'
import { todosContext } from './TodosStore'
import axios from 'axios'

function TodoBox({todo}) {
  const [todos,setTodos]=useContext(todosContext)
  function handleDeleteTodo(){
    axios.delete("http://localhost:3000/todos/"+todo.id)
    .then(res=>setTodos(todos.filter(ele=>ele.id!==todo.id)))
  }
  return (
    <div className='todo-box'>
        <h2>{todo.todo} </h2>
        <button onClick={handleDeleteTodo}>delete</button>
    </div>
  )
}

export default TodoBox