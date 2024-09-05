import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import handleDeleteTodo from './handleDeleteTodo';
import { useState } from 'react';
import UpdateTodo from './UpdateTodo';


function Box(props) {
    const [show,setShow]=useState(false)
  return (
    <Card style={{ width: '18rem' }} >
      <Card.Img onClick={()=>setShow(false)} variant="top" src="./logo192.png" />
      <Card.Body>
        <Card.Title onDoubleClick={()=>setShow(true)}>{props.todo.id}</Card.Title>
        <Card.Text >
        {props.todo.todo}
        </Card.Text>
        <Button variant="danger" onClick={()=>handleDeleteTodo(props.todos,props.setTodos,props.todo)}>Go somewhere</Button>
      </Card.Body>
      {show ? <UpdateTodo setShow={setShow} todos={props.todos} setTodos={props.setTodos}  todo={props.todo}  />:null}
    </Card>
  )
}

export default Box