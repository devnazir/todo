import '../../styles/List/list.scss'
import { useTodo } from '../../stores/todoContext'

function ListIncomplete() {
  const { data, addCompleted } = useTodo()

  return (
    <ul className='lists'>
      {data.length > 0 && <h3 className='box__status'>Incomplete</h3>}
      {data.map(incomplete => {
        return (
          <List key={incomplete.id} type={incomplete} hasHandleClickCompleted={addCompleted} />
        )
      })}
    </ul>
  )
}

function ListCompleted() {
  const { completed } = useTodo()

  return (
    <ul className='lists'>
      {completed.length > 0 && <h3 className='box__status'>Complete</h3>}
      {completed.map(completed => {
        return (
          <List type={completed} key={completed.id} checked={true} />
        )
      })}
    </ul>
  )
}

function List({ type, hasHandleClickCompleted = false, checked = false }) {
  return (
    <li className='list__wrapper' onClick={() => hasHandleClickCompleted ? hasHandleClickCompleted(type.id) : hasHandleClickCompleted}>
      <label htmlFor={`${type.id}`} className='list__wrapper__name'>
        <input type="checkbox" readOnly checked={checked} id={`${type.id}`} className='list__wrapper__input' />
        <p className='list__wrapper__text'>{type.text}</p>
        {checked && <span className='list__wrapper__completed'>Selesai pada {type.date}</span>}
        <span className="list__wrapper__checkbox"></span>
      </label>
    </li>
  )
}

export { ListIncomplete, ListCompleted }