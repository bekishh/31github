import React, {useState} from "react";

const TodoForm = () => {
  const [value, setValue] = useState('')
  return <div>
    <input type="text"/>
    <button>submit</button>
  </div>;
};

export default TodoForm;
