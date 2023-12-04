import React, {useState} from "react";
import AddTodos from "./AddTodos";

const TodoForm = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmitHandler = (e) => {
    e.preventDefault()
    const newTodos = {
      id: Math.random().toFixed(1),
      text: value
    }
    setTodos([...todos, newTodos])
  }

  return <form onSubmit={handleSubmitHandler}>
    <input type="text" value={value}/>
    <button type="submit">submit</button>
    <AddTodos todos={todos}/>
  </form>;
};

export default TodoForm;
