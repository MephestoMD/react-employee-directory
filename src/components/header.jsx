import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col col-lg-auto">
            <h1>Employee Directory</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
