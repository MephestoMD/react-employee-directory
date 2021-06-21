import React, { Component } from "react";
import FilterMenu from "./filterMenu";
import Table from "./table";
import API from "../utils/API";
import _ from "lodash";

class Employees extends Component {
  state = {
    employees: [],
    sortedColumn: { path: "name.first", order: "asc" },
  };

  componentDidMount() {
    API.getEmployees().then((res) =>
      this.setState({ employees: res.data.results })
    );
  }

  handleSort = (sortedColumn) => {
    this.setState({ sortedColumn });
  };

  handleFilter = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  getSortedData = () => {
    const { employees, sortedColumn, selectedFilter } = this.state;

    const filtered = selectedFilter
      ? employees.filter((employee) => {
          switch (selectedFilter) {
            case "Male":
              return employee.gender === "male";
            case "Female":
              return employee.gender === "female";
            case "Over 40":
              return employee.dob.age >= 40;
            default:
              return employee.dob.age < 40;
          }
        })
      : employees;

    const sorted = _.orderBy(
      filtered,
      [sortedColumn.path],
      [sortedColumn.order]
    );
    return { sorted };
  };

  render() {
    const filters = ["Male", "Female", "Over 40", "Under 40"];
    const { sortedColumn } = this.state;
    const { sorted } = this.getSortedData();
    return (
      <>
        <FilterMenu
          filters={filters}
          selectedFilter={this.state.selectedFilter}
          onFilterSelect={this.handleFilter}
        />
        <Table
          sortedColumn={sortedColumn}
          employees={sorted}
          onSort={this.handleSort}
        />
      </>
    );
  }
}

export default Employees;
