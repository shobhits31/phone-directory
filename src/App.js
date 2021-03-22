import React, { Component } from "react";
import Header from "./Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="component-body-container">
        <Header />
        <button className="custom-btn add-btn">Add</button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <br />
          <span className="grid-item phone-heading">Phone</span>
        </div>
      </div>
    );
  }
}

export default App;
