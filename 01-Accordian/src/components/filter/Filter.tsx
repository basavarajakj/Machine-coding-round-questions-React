
import { useState } from "react";
import { MdFilterList, MdClose } from "react-icons/md";
import Accordions from "./Accordions";

const Filter = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<{ value: string, name: string}[]>([]);

  const handleFilterChange = (selectedFilter: { value: string, name: string}[]) => {
    setSelectedFilters(selectedFilter)
   }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
  }

  const handleApplyFilter = () => {
    const params = new URLSearchParams();

    if(searchValue.length) {
      params.append('q', searchValue.toLowerCase());
    }

    for(const item of selectedFilters) {
      params.append(item.name, item.value);
    }

    console.log(params.toString());
    
  }

  const clearFilters = () => { 
    setSelectedFilters([]);
    setSearchValue("");
  }
  return (

    <article className="article filter-articles">

      {/* Filter Bar  */}
      <div className="filter-bar active">

        <div className="title-wrapper">

          <MdFilterList size={22} />

          <p className="title-medium">Filters</p>

          <button className="icon-btn close-btn">
            <MdClose size={22} />
          </button>

        </div>



        <div className="filter-content">

          <div className="search-wrapper">

            <div className="input-outlined">
              <label className="label">Search</label>

              <input
                type="search"
                name="search"
                id="search"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Search Recipes"
                className="input-field"
              />
            </div>

          </div>

          <Accordions 
            onChange={handleFilterChange}
            selectedFilters={selectedFilters}
          />

          <div className="filter-actions">

            <button 
              className="btn btn-secondary"
              onClick={() => clearFilters()}
            >
              Clear
            </button>
            <button
              className="btn btn-primary label-large"
              onClick={() => handleApplyFilter()}
            >
              Apply
            </button>

          </div>

        </div>
      </div>
    </article>
  )
}

export default Filter