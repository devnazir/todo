import { createContext, useContext, useEffect, useState } from 'react'

const TodoContext = createContext({
  incompleted: [],
  completed: [],
})

function Todo() {
  const [todo, setTodo] = useState(
    localStorage.getItem('todo') ? storageTODO() : {
      incompleted: [],
      completed: []
    }
  )
  const [typeModalTodo, setTypeModalTodo] = useState('')
  const [hiddenModalTodo, setHiddenModalTodo] = useState(true)

  const openModal = (type) => {
    if (type === 'add') {
      setTypeModalTodo('add')
    } else if (type === 'update') {
      setTypeModalTodo('update')
    }

    setHiddenModalTodo(false)
  }

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  const addInCompleted = (newList) => {
    setTodo({
      ...todo,
      incompleted: [...todo.incompleted, newList]
    })
    setHiddenModalTodo(true)
  }

  const addCompleted = (id) => {
    setTodo({
      incompleted: todo.incompleted.filter(list => list.id !== id),
      completed: [...todo.completed, ...todo.incompleted.filter(list => list.id === id)]
    })
  }

  const updateIncompleted = (prevID, newValue) => {
    const id = parseInt(prevID)
    setTodo({
      ...todo,
      incompleted: todo.incompleted.map(list => list.id === id ? { ...list, ...newValue } : list)
    })
  }

  const event = {
    addCompleted,
    addInCompleted,
    updateIncompleted,
    setHiddenModalTodo,
    openModal,
  }

  return {
    todo,
    event,
    hiddenModalTodo,
    typeModalTodo,
  }
}

export const TodoProvider = ({ children }) => {
  const store = Todo()

  return (
    <TodoContext.Provider value={store}>
      {children}
    </TodoContext.Provider >
  )
}

export const useTodo = () => useContext(TodoContext)

function storageTODO() {
  return JSON.parse(localStorage.getItem('todo'))
}
