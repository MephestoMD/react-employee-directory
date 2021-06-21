import React, { Component } from "react";

class TableHeader extends Component {
  renderIcon = (header) => {
    const { sortedColumn } = this.props;
    if (header !== sortedColumn.header) return null;
    if (sortedColumn.order === "asc") {
      return <i className="fa fa-sort-asc" />;
    } else {
      return <i className="fa fa-sort-desc" />;
    }
  };
  render() {
    const { headers, handleSort } = this.props;
    return (
      <tr>
        {headers.map((header) => (
          <th
            key={header}
            className="clickable"
            onSort={() => handleSort(header)}
          >
            {header} {this.renderIcon(header)}
          </th>
        ))}
      </tr>
    );
  }
}

export default TableHeader;
