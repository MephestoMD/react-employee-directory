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
                ? "list-group-item list-group-item-action list-group-item-light clickable active"
                : "list-group-item list-group-item-action list-group-item-light clickable"
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
