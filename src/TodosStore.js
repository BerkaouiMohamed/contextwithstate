import React, { createContext, useEffect, useState } from "react";
export const todosContext = createContext();
function TodosStore({ children }) {
  const [todos, setTodos] = useState([{ todo: "hello", id: 1 }]);

  useEffect(()=>{
fetch("http://localhost:3000/todos")
.then(res=>res.json())
.then(res=>setTodos(res))
.catch(e=>console.log(e))
  },[])
  return (
    <todosContext.Provider value={[todos, setTodos]}>
      {children}
    </todosContext.Provider>
  );
}

export default TodosStore;
