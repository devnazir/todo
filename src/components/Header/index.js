import { useTodo } from '../../stores/todoContext'
import '../../styles/Header/header.scss'
import generateDate from '../../helper/generateDate'

function Header() {
  const { data, completed } = useTodo()

  return (
    <header>
      <h1>{generateDate()}</h1>
      <span>{data.length} incomplete, {completed.length} completed</span>
    </header>
  )
}

export default Header