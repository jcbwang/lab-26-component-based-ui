import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./design/app.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrementButtonClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrementButtonClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <a href="/#" onClick={this.handleDecrementButtonClick}>
          subtract
        </a>
        <a href="/#" onClick={this.handleIncrementButtonClick}>
          add
        </a>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
