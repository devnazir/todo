import { useTodo } from '../../stores/todoContext'
import generateDate from '../../helper/generateDate'

function Header() {
  const { todo } = useTodo()

  return (
    <header>
      <h1>{generateDate()}</h1>
      <span>{todo.incompleted.length} incomplete, {todo.completed.length} completed</span>
    </header>
  )
}

export default Header