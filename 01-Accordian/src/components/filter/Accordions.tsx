import { useState } from "react";
import { CaloriesConstants, DietConstants, HealthConstants } from "../../constants";
import AccordionContainer from "./AccordionContainer";

interface Props {
  selectedFilters: {value: string, name: string}[];
  onChange: (selectedFilters: {value: string, name: string}[]) => void;
}


const Accordions = ({selectedFilters, onChange}: Props) => {
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    if(expandedAccordion === index) {
      setExpandedAccordion(null);
    }else {
      setExpandedAccordion(index);
    }
  }

  return ( 
    <div className="">
      <AccordionContainer 
        title="Calories"
        filterChips={CaloriesConstants}
        isExpanded={expandedAccordion === 0}
        onChange={onChange}
        selectedFilters={selectedFilters}
        onClick={() => handleAccordionClick(0)}
      />

      <AccordionContainer 
        title="Diet"
        filterChips={DietConstants}
        isExpanded={expandedAccordion === 1}
        selectedFilters={selectedFilters}
        onChange={onChange}
        onClick={() => handleAccordionClick(1)}
      />

      <AccordionContainer 
        title="Health"
        filterChips={HealthConstants}
        selectedFilters={selectedFilters}
        onChange={onChange}
        isExpanded={expandedAccordion === 2}
        onClick={() => handleAccordionClick(2)}
      />
    </div>
   );
}
 
export default Accordions;