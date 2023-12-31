import { Todo } from "./Todo"

export const TodoList = ({ todos, toggleTodo }) => {
  return (
    todos.map(todo => {
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
    })
  )
}
