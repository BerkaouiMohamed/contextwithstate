import { useEffect, useState } from "react";
import "./App.css";
import appAxios from "./axiosConfig";
import Box from "./Box";
import AddTodo from "./AddTodo";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastValidation } from "./variabels";
import PlaceholderComp from "./Placeholder";
function App() {
  const [todos, setTodos] = useState([]);
  const [loading,setLoading]=useState(false)


  useEffect(function () {
    setLoading(true)
      appAxios.get("/todos").then(function (res) {
        if (res.status === 200) {
          setTodos(res.data.toReversed());
          setLoading(false)
        }
      }).catch((e)=>console.log(e)
      )
    
    
  }, []);

  function handleAddTodo(todo) {
    // toast.loading("loading");
    // appAxios
    //   .post("/todos", { todo: todo })
    //   .then((res) => {
    //     setTodos([res.data, ...todos]);
    //     toast.dismiss()
    //     toast.success("done")
    //   })
    //   .catch((e) => { toast.dismiss();toast.error(e.message)});
    toast.promise(
      appAxios
        .post("/todos", { todo })
        .then((res) => setTodos([res.data, ...todos])),
      toastValidation
    );
  }

    
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <AddTodo handleAddTodo={handleAddTodo} />
 <div
        className="App"
        style={{ display: "flex", flexWrap: "wrap", gap: 30 }}
      >
    {loading?[0,0,0,0,0,0,0].map((e)=><PlaceholderComp/>): 
        todos.map((element, i) => (
          <Box todos={todos} setTodos={setTodos}  key={i} todo={element} />
        ))
     } </div>
    </>
  );
}

export default App;
