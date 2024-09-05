import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import appAxios from "./axiosConfig";
import { toast } from "react-toastify";
import { toastValidation } from "./variabels";

function UpdateTodo(props) {
  const [todo, setTodo] = useState(props.todo);
  function handleUpdateTodo(){
   toast.promise(
    appAxios.put('/todos/'+todo.id,todo).then((res)=>{props.setTodos(props.todos.map((e)=>{
        if(e.id===res.data.id){
            return res.data
        }
        return e
    }));props.setShow(false)}).catch((e)=>console.log(e))

    ,toastValidation)
  }
  return (
    <div
      className="update-todo"
      style={{
        position: "absolute",
        width: "80%",
        height: "80%",
        background: "white",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        boxShadow: "2px 2px 4px 2px black",
      }}
    >
      <input
        type="text"
        value={todo.todo}
        onChange={(e) => setTodo({ ...todo, todo: e.target.value })}
      />
      <Button variant="primary" onClick={handleUpdateTodo}> submit</Button>
    </div>
  );
}

export default UpdateTodo;
