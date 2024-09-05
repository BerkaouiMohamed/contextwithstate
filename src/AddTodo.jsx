import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import { toast } from 'react-toastify';
function AddTodo({handleAddTodo}) {

    const referance=useRef()
    function add(){
        handleAddTodo(referance.current.value)
      
    }
  return (
    <div style={{width:"70%",margin:"auto"}}>
    <Form.Label htmlFor="inputPassword5">todo</Form.Label>
    <Form.Control
      type="text"
    ref={referance}
    />
    <Form.Text id="passwordHelpBlock" muted>
      Your password must be 8-20 characters long, contain letters and numbers,
      and must not contain spaces, special characters, or emoji.
    </Form.Text>

    <Button onClick={add}>add todo</Button>
  </div>
  )
}

export default AddTodo