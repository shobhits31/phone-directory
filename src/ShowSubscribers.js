import React, { Component } from "react";
import Header from "./Header";
import "./ShowSubscribers.css";
import { Link } from "react-router-dom";

class ShowSubscribers extends Component {
  render() {
    return (
      <div className="component-body-container">
        <Header heading="Phone Directory" />
        <Link to="/add">
          <button className="custom-btn add-btn">Add</button>
        </Link>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <br />
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {this.props.subscribersList.map((sub) => {
          return (
            <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <br />
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn">Delete</button>
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ShowSubscribers;
