const AddTodos = ({todos}) => {
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h3>{todo.text}</h3>
                </div>

            ))}
        </div>
    )
}

export default AddTodos