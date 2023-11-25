import React from "react";
import "../../style/button/Increase_decrease.scss";

class Increase_decrease extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  increaseValue() {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  }

  decreaseValue() {
    this.setState((prevState) => ({
      value: prevState.value > 0 ? prevState.value - 1 : 0,
    }));
  }

  render() {
    return (
      <form className="counter-form">
        <div
          className="value-button decrease"
          onClick={() => this.decreaseValue()}
        >
          -
        </div>
        <input
          type="number"
          id="number"
          value={this.state.value}
          readOnly
          tabIndex="0"
        />
        <div
          className="value-button increase"
          onClick={() => this.increaseValue()}
        >
          +
        </div>
      </form>
    );
  }
}

export default Increase_decrease;
