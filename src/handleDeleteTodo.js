import { toast } from "react-toastify";
import appAxios from "./axiosConfig";
import { toastValidation as validation } from "./variabels";

function handleDeleteTodo(state, setState, element) {
    toast.promise(  appAxios
        .delete("/todos/" + element.id)
        .then((res) => setState(state.filter((ele) => ele.id !== element.id)))
    ,validation)
}
export default handleDeleteTodo