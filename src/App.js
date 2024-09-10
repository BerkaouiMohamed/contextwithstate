
import Boxes from "./Boxes";
import AddTodo from "./AddTodo";
import TodosStore from "./TodosStore";


function App() {
  return (
<TodosStore>

      <div>
      <AddTodo/>
        <Boxes/>
      </div>
</TodosStore>
)}

export default App;
