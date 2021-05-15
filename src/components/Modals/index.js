import { useTodo } from '../../stores/todoContext'
import { useState, useRef, useEffect } from 'react'
import generateID from '../../helper/generateID'
import generateDate from '../../helper/generateDate'

function Modals({ type }) {
  return (
    <div className='modals'>
      {(type === 'add' && <ModalAdd />) || (type === 'update' && <ModalUpdate />)}
    </div>
  )
}

function ModalAdd() {
  const inputRef = useRef()
  const { event: { addInCompleted, setHiddenModalTodo } } = useTodo()
  const [newValue, setNewValue] = useState({
    id: generateID(),
    text: "",
    date: generateDate(),
  })

  const handleChangeInput = (e) => {
    const value = e.target.value
    setNewValue({
      ...newValue,
      text: value
    })
  }

  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <>
      <input placeholder='Input value' ref={inputRef} maxLength={50} type="text" className='modals__input' onChange={handleChangeInput} />
      <div className='modals__buttons'>
        {newValue.text && <button className='modals__button modals__button--blue' onClick={() => addInCompleted(newValue)}>Add</button>}
        <button className='modals__button modals__button--red' onClick={() => setHiddenModalTodo(true)}>Cancel</button>
      </div>
    </>
  )
}

function ModalUpdate() {
  const { todo, event: { setHiddenModalTodo, updateIncompleted } } = useTodo()
  const [prevValueID, setPrevValueID] = useState('')
  const [newValue, setNewValue] = useState({
    text: ''
  })

  const handleSelectChange = (e) => {
    const value = e.target.value
    setPrevValueID(value)
  }

  const handleChangeInput = (e) => {
    const newValue = e.target.value
    setNewValue({
      text: newValue
    })
  }

  return (
    <>
      <div className='modal__select'>
        <select className='modal__select__value' onChange={handleSelectChange} value={prevValueID}>
          <option value="">--Please choose an option--</option>
          {
            todo.incompleted.map(list => {
              return <option key={list.id} value={list.id} >{list.text}</option>
            })
          }
        </select>
      </div>
      {prevValueID && <input placeholder='Input new value' maxLength={50} type="text" className='modals__input' onChange={handleChangeInput} />}
      <div className='modals__buttons'>
        {newValue && <button className='modals__button modals__button--blue' onClick={() => updateIncompleted(prevValueID, newValue)}>Update</button>}
        <button className='modals__button modals__button--red' onClick={() => setHiddenModalTodo(true)}>Cancel</button>
      </div>
    </>
  )
}

export default Modals