import '../../styles/BoxLists/boxlist.scss'

function BoxList({ children }) {
  return (
    <div className='box'>
      {children}
    </div>
  )
}

export default BoxList