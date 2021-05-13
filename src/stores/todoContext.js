import { createContext, useContext, useEffect, useState } from 'react'

const TodoContext = createContext({
  data: [],
  completed: [],
  addTodo: () => { },
  addCompleted: () => {},
  hiddenModalTodo: () => { },
  setHiddenModalTodo: () => { }
})

function Todo() {
  const [list, setList] = useState(
    localStorage.getItem('list') ? storageTodoIncomplete() : []
  )

  const [completed, setCompleted] = useState(
    localStorage.getItem('completed') ? storageTodoCompleted() : []
  )

  const [hiddenModalTodo, setHiddenModalTodo] = useState(true)

  useEffect(() => {
    localStorage.setItem('completed', JSON.stringify(completed))
    localStorage.setItem('list', JSON.stringify(list))
  }, [list, completed])

  const addTodo = (newList) => {
    setList([...list, newList])
    setHiddenModalTodo(true)
  }

  const addCompleted = (id) => {
    setList(list.filter(data => data.id !== id))
    setCompleted([...completed, ...list.filter(data => data.id === id)])
  }

  return {
    data: list,
    completed,
    addCompleted,
    addTodo,
    hiddenModalTodo,
    setHiddenModalTodo
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

function storageTodoIncomplete() {
  return JSON.parse(localStorage.getItem('list'))
}

function storageTodoCompleted() {
  return JSON.parse(localStorage.getItem('completed'))
}

