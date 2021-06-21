import React, { Component } from "react";
import TableHeader from "./tableHeaders";
import { formatDate } from "../utils/formatDate";

class Table extends Component {
  headers = [
    { path: "picture.thumbnail", label: "Photo" },
    { path: "name.first", label: "Name" },
    { path: "phone", label: "Phone #" },
    { path: "email", label: "Email" },
    { path: "dob.date", label: "DOB" },
    { path: "location.city", label: "Location" },
  ];

  render() {
    const { employees, sortedColumn, onSort } = this.props;
    return (
      <table className="table table-hover ">
        <thead>
          <TableHeader
            headers={this.headers}
            sortedColumn={sortedColumn}
            onSort={onSort}
          />
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
              <td>{formatDate(emp.dob.date)}</td>
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
