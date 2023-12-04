import { MdExpandMore } from "react-icons/md"

interface Props {
  title: string;
  isExpanded: boolean;
  onClick: () => void;
}

const AccordionButton = ({title, onClick, isExpanded}: Props) => {
  return (
    <button
      className="accordion-button"
      aria-controls={title}
      aria-expanded={isExpanded}
      onClick={onClick}
    >
      <p className="label-large">{title}</p>

     <span className="trailing-icon">
       <MdExpandMore size={24} />
     </span>
    </button>
  )
}

export default AccordionButton