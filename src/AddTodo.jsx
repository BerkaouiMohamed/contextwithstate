import React, { useContext, useRef } from 'react'
import { todosContext } from './TodosStore'


function AddTodo() {
    const inputRef=useRef()
    const [todos,setTodos]=useContext(todosContext)
  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={()=>{
            fetch("http://localhost:3000/todos",{method:"post",body:JSON.stringify({todo:inputRef.current.value})})
            .then((res)=>res.json())
            .then(res=>  setTodos([...todos,res]))
            inputRef.current.value=""
        }}>submit</button>
    </div>
  )
}

export default AddTodo