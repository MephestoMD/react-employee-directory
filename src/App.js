import React, { Component } from "react";
import Header from "./components/header";
import Employees from "./components/employees";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Employees />
      </main>
    </>
  );
}

export default App;
