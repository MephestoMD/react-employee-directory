import React, { Component } from "react";
import Table from "./table";
import API from "../utils/API";

class Employees extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    API.getEmployees().then((res) =>
      this.setState({ employees: res.data.results })
    );
  }
  render() {
    const employees = this.state.employees;
    return (
      <>
        <Table employees={employees} />
      </>
    );
  }
}

export default Employees;
