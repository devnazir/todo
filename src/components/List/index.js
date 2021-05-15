import { useTodo } from '../../stores/todoContext'

function ListIncomplete() {
  const { todo, event: { addCompleted, openModal } } = useTodo()

  return (
    <ul className='lists'>
      <div className='list__detail'>
        {todo.incompleted.length > 0 && <h3 className='box__status'>Incomplete</h3>}
        {todo.incompleted.length > 0 && <button className='list__button' onClick={() => openModal('update')}>Update</button>}
      </div>
      {todo.incompleted.map(incomplete => {
        return (
          <List key={incomplete.id} type={incomplete} hasHandleClickCompleted={addCompleted} incomplete={true} />
        )
      })}
    </ul>
  )
}

function ListCompleted() {
  const { todo } = useTodo()

  return (
    <ul className='lists'>
      {todo.completed.length > 0 && <h3 className='box__status'>Complete</h3>}
      {todo.completed.map(completed => {
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
        <p className='list__wrapper__text'>{type.text} {checked && <span className='list__wrapper__completed'>Selesai pada {type.date}</span>}</p>
        <span className="list__wrapper__checkbox"></span>
      </label>
    </li>
  )
}

export { ListIncomplete, ListCompleted }