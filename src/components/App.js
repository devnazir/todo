import { useTodo } from '../stores/todoContext'
import Header from './Header'
import BoxList from './BoxLists'
import { ListIncomplete, ListCompleted } from './List'
import Modals from './Modals'

function App() {
  const { hiddenModalTodo, typeModalTodo, event: { openModal } } = useTodo()

  return (
    <div className="container">
      <Header />
      <BoxList>
        <ListIncomplete />
      </BoxList>
      <BoxList>
        <ListCompleted />
      </BoxList>
      {!hiddenModalTodo && <Modals type={typeModalTodo} />}
      <button className="container__button container__button--add" onClick={() => openModal('add')}>+</button>
    </div>
  );
}

export default App;
