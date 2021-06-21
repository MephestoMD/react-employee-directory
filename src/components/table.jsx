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
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.dob.date}>
              <td>
                <img
                  src={emp.picture.thumbnail}
                  alt={emp.name.first + " " + emp.name.last}
                />
              </td>
              <td>{emp.name.first + " " + emp.name.last}</td>
              <td>{emp.phone}</td>
              <td>{emp.email}</td>
              <td>{emp.dob.date}</td>
              <td>
                {emp.location.city}, {emp.location.state}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
