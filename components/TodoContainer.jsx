import TodoItem from "./Todoitem"


function TodoContainer(props) {
    const {todos} = props
  return (
    <div className="todo-container">
        { todos.map(el => (
           <TodoItem key={el.id} job={el}/>
        ))}
        
    </div>
  )
}

export default TodoContainer