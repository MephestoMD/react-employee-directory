import React, { Component } from "react";

class TableHeader extends Component {
  renderIcon = (path) => {
    const { sortedColumn } = this.props;
    if (path !== sortedColumn.path) return null;
    if (sortedColumn.order === "asc") {
      return <i className="fa fa-sort-asc" />;
    } else {
      return <i className="fa fa-sort-desc" />;
    }
  };

  raiseSortEvent = (path) => {
    const sortedColumn = { ...this.props.sortedColumn };
    if (sortedColumn.path === path) {
      sortedColumn.order = sortedColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortedColumn.path = path;
      sortedColumn.order = "asc";
    }
    this.props.onSort(sortedColumn);
  };

  render() {
    const { headers } = this.props;
    console.log(headers);
    return (
      <tr>
        {headers.map((header) => {
          if (header.label !== "Photo") {
            return (
              <th
                key={header.path}
                className="clickable"
                onClick={() => this.raiseSortEvent(header.path)}
              >
                {header.label} {this.renderIcon(header.path)}
              </th>
            );
          }
          return <th key={header.path}>{header.label}</th>;
        })}
      </tr>
    );
  }
}

export default TableHeader;
