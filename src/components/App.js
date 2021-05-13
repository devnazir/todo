import '../styles/App/app.scss'
import Header from './Header'
import BoxList from './BoxLists'
import { ListIncomplete, ListCompleted } from './List'
import Modals from './Modals'
import { useTodo } from '../stores/todoContext'
import { useRef } from 'react'

function App() {
  const { hiddenModalTodo, setHiddenModalTodo } = useTodo()
  const containerRef = useRef()

  const showOrHiddenModal = () => {
    containerRef.current.style.cssText = 'position: relative'
    setHiddenModalTodo(false)
  } 

  return (
    <div className="container" ref={containerRef}>
      <Header />
      <BoxList>
        <ListIncomplete />
      </BoxList>
      <BoxList>
        <ListCompleted />
      </BoxList>
      {!hiddenModalTodo && <Modals />}
      <button className="container__button" onClick={showOrHiddenModal}>+</button>
    </div>
  );
}

export default App;
