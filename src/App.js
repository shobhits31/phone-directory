import React, { Component } from "react";
import Header from "./Header";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      subscribersListToShow: [],
    };
  }
  render() {
    return (
      <div className="component-body-container">
        <Header heading="Phone Directory" />
        <button className="custom-btn add-btn">Add</button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <br />
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {this.state.subscribersListToShow.map((sub) => {
          return (
            <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <br />
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                <button
                  className="custom-btn delete-btn"
                  onClick={this.deleteHandler.bind(this, "Delete Clicked")}
                >
                  Delete
                </button>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
