import AccordionButton from "./AccordionButton";
import FilterChip from "./FilterChip";

interface AccordionContainerProps {
  title: string;
  filterChips: {
    labelName: string;
    type: string;
    name: string;
    value: string;
    ariaLabel: string;
  }[];
  isExpanded: boolean;
  selectedFilters: { value: string, name: string }[];
  onClick: () => void;
  onChange: (selectedFilters: { value: string, name: string }[]) => void;
}

const AccordionContainer = ({ title, filterChips, onClick, isExpanded, selectedFilters, onChange }: AccordionContainerProps) => {

  const handleFilterChange = (filterValue: string, filterName: string) => {

    const filterExists = selectedFilters.some(
      (filter) => filter.name === filterName && filter.value === filterValue
    );

    const updatedFilters = filterExists
      ? selectedFilters.filter((filter) => !(filter.name === filterName && filter.value === filterValue))
      : [...selectedFilters, { value: filterValue, name: filterName }];

    onChange(updatedFilters);

  }

  return (
    <div className="accordion-container">
      <AccordionButton
        title={title}
        isExpanded={isExpanded}
        onClick={onClick}
      />

      <div className="accordion-content" id="timer-id">
        <div className="accordion-overflow" data-filter="timer">

          {filterChips.map((filterChip) => (

            <FilterChip
              key={filterChip.value}
              labelName={filterChip.value}
              value={filterChip.value}
              type={filterChip.type}
              name={filterChip.name}
              ariaLabel={filterChip.ariaLabel}
              onChange={() => handleFilterChange(filterChip.value, filterChip.name)}
              isSelected={selectedFilters.some(
                (filter) => filter.name === filterChip.name && filter.value === filterChip.value)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccordionContainer;