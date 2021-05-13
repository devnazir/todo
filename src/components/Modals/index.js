import '../../styles/Modals/modals.scss'
import { useTodo } from '../../stores/todoContext'
import { useState } from 'react'
import generateID from '../../helper/generateID'
import generateDate from '../../helper/generateDate'

function Modals() {
  const { addTodo, setHiddenModalTodo } = useTodo()
  const [inputValue, setInputValue] = useState({
    id: generateID(),
    text: "",
    date: generateDate(),
  })

  const handleChangeInput = (e) => {
    const value = e.target.value
    setInputValue({
      ...inputValue,
      text: value
    })
  }

  return (
    <div className='modals'>
      <input type="text" className='modals__input' onChange={handleChangeInput} />
      <div className='modals__buttons'>
        {inputValue.text && <button className='modals__button modals__button--blue' onClick={() => addTodo(inputValue)}>Add</button>}
        <button className='modals__button modals__button--red' onClick={() => setHiddenModalTodo(true)}>Cancel</button>
      </div>
    </div>
  )
}

export default Modals