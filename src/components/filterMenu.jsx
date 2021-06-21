import React from "react";

const FilterMenu = ({ selectedFilter, filters, onFilterSelect }) => {
  return (
    <>
      <p> Filter employees:</p>
      <ul className="list-group list-group-horizontal">
        {filters.map((filter) => (
          <li
            key={filter}
            onClick={() => onFilterSelect(filter)}
            className={
              selectedFilter === filter
                ? "list-group-item clickable active"
                : "list-group-item clickable"
            }
          >
            {filter}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilterMenu;
