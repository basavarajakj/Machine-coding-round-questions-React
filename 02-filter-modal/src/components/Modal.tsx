import { useState } from "react";
import { RESOURCES, TAILORED } from "../constant";
import useFilterModal from "../hooks/useFilterModal";

const Modal = () => {
  const [checkedFilters, setCheckedFilters] = useState<{ value: string, name: string }[]>([]);

  const { isOpen, onClose, setQueryLength } = useFilterModal();

  const handleFilterChange = (filterValue: string, filterName: string) => {
    const filterExists = checkedFilters.some((filter) => filter.name === filterName && filter.value === filterValue);

    const updatedFilters = filterExists
      ? checkedFilters.filter((filter) => !(filter.name === filterName && filter.value === filterValue))
      : [...checkedFilters, { value: filterValue, name: filterName }];

    setCheckedFilters(updatedFilters);
  };

  const handleApplyFilters = () => {
    const params = new URLSearchParams();

    for (const filter of checkedFilters) {
      params.append(filter.name, filter.value);
    }

    const queryString = params.toString();
    window.history.pushState(null, '', queryString);

    const numOfQueries = queryString ? queryString.slice(1).split('&').map((query) => query.split('=')).length : 0;
    setQueryLength(numOfQueries);
    onClose();
  }


  const handleClearFilters = () => {
    setCheckedFilters([]);
    const params = new URLSearchParams();
    const queryString = params.toString();
    window.history.pushState(null, '', queryString);
  }
  return (
    <>
      <div className={`modal ${isOpen ? '' : 'close'}`}>

        <button
          onClick={onClose}
          className="icon-btn large"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32" fill="none">
            <g clipPath="url(#clip0_1_8)">
              <path d="M24 8L8 24" stroke="#536784" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 8L24 24" stroke="#536784" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1_8">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="state-layer"></div>
        </button>

        <h1 className="title-large">Filter content just for you</h1>

        <p className="title-medium">RESOURCES</p>

        <ul className="resource-list">
          {RESOURCES.map((resource) => (
            <li key={resource.label} className="resource-item">

              <input
                type={resource.type}
                name={resource.name}
                value={resource.value}
                aria-label={resource.ariaLabel}
                checked={checkedFilters.some((filter) => filter.name === resource.name && filter.value === resource.value)}
                onChange={() => {
                  handleFilterChange(resource.value, resource.name);
                }}
                className="checkbox"
              />
              <label className="filter-label label-small">
                {resource.label}
              </label>

            </li>
          ))}
        </ul>

        <p className="title-medium title">TAILORED TO</p>

        <ul className="resource-list list">
          {TAILORED.map((tailored) => (

            <li key={tailored.label} className="resource-item">

              <input
                type={tailored.type}
                name={tailored.name}
                value={tailored.value}
                aria-label={tailored.ariaLabel}
                checked={checkedFilters.some((filter) => filter.name === tailored.name && filter.value === tailored.value)}
                onChange={() => {
                  handleFilterChange(tailored.value, tailored.name);
                }}
              />
              <label className="filter-label label-small">
                {tailored.label}
              </label>
            </li>

          ))}
        </ul>
        <div className="modal-action-btns">

          <button
            onClick={() => handleClearFilters()}
            aria-label="Clear filters"
            className="btn btn-secondary"
          >
            Clear

            <div className="state-layer"></div>
          </button>

          <button
            aria-label="Apply filters"
            className="btn btn-primary"
            onClick={handleApplyFilters}
          >
            Apply Filters
            <div className="state-layer"></div>
          </button>

        </div>
      </div>

      <div className={`overlay ${isOpen ? 'active modal-overlay' : ''}`}></div>

    </>
  );
}

export default Modal;