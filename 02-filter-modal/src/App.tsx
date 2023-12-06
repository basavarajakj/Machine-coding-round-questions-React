import Modal from "./components/Modal"
import useFilterModal from "./hooks/useFilterModal"

const App = () => {

  const { onOpen, queryLength } = useFilterModal()

  return (
    <div>
      <button
        onClick={onOpen} 
       className="btn btn-primary filter">
        Filter
        {queryLength > 0 && (
           <span className="badge">{queryLength}</span>
        )}
      </button>
      <Modal />
    </div>
  )
}

export default App