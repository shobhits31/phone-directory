import React, { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Route } from "react-router-dom";

class PhoneDirectory extends Component {
  constructor() {
    super();
    this.state = {
      subscribersList: [
        {
          id: 1,
          name: "Shilpa Bhat",
          phone: "9999999999",
        },
        {
          id: 2,
          name: "Srishti Gupta",
          phone: "8888888888",
        },
      ],
    };
  }

  addSubscriberHandler = (newSubscriber) => {
    let subscribersList = this.state.subscribersList;
    if (subscribersList.length > 0) {
      newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }
    subscribersList.push(newSubscriber);
    this.setState({ subscribersList: subscribersList });
  };

  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={
            ({ history },
            (props) => {
              <ShowSubscribers
                history={history}
                {...props}
                subscribersList={this.state.subscribersList}
              />;
            })
          }
        />
        <Route
          exact
          path="/add"
          render={(props) => (
            <AddSubscriber
              {...props}
              addSubscriberHandler={this.addSubscriberHandler}
            />
          )}
        />
      </Router>
    );
  }
}

export default PhoneDirectory;
