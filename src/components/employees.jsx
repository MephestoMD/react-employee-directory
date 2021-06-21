import React, { Component } from "react";
import Table from "./table";
import API from "../utils/API";

class Employees extends Component {
  state = {
    employees: [],
    sortedColumn: { header: "Name", order: "asc" },
  };

  componentDidMount() {
    API.getEmployees().then((res) =>
      this.setState({ employees: res.data.results })
    );
  }
  render() {
    const { employees, sortedColumn } = this.state;
    return (
      <>
        <Table sortedColumn={sortedColumn} employees={employees} />
      </>
    );
  }
}

export default Employees;
