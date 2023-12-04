
interface Props {
  ariaLabel?: string;
  labelName: string;
  name: string;
  type?: string;
  isSelected: boolean;
  onChange: (selectedFilters: {value: string, name: string}[]) => void;
  value: string;
}

const FilterChip = ({ 
  labelName,
  name, 
  value, 
  ariaLabel, 
  type, 
  isSelected,
  onChange
}: Props) => {

  const handleChange = () => {
    onChange(isSelected ? [] : [{ value, name }])
  }
  return (
    <label className="filter-chip label-large">
      {labelName}

      <input
        type={type}
        name={name}
        value={value}
        aria-label={ariaLabel}
        className="checkbox"
        onChange={handleChange}
        checked={isSelected}
      />
    </label>
  )
}

export default FilterChip