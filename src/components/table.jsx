import React, { Component } from "react";

class Table extends Component {
  state = {};

  render() {
    const { employees } = this.props;
    console.log(employees);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Phone #</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr>
              <td>
                <img
                  src={emp.picture.thumbnail}
                  alt={emp.name.first + " " + emp.name.last}
                />
              </td>
              <td>{emp.name.first + " " + emp.name.last}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
