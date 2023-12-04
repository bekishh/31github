import React, {useState} from "react";

const TodoForm = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmitHandler = (e) => {
    e.preventDefault()
  }

  return <form onSubmit={handleSubmitHandler}>
    <input type="text" value={value}/>
    <button type="submit">submit</button>
  </form>;
};

export default TodoForm;
