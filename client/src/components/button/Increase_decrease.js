import React from "react";
import "../../style/button/Increase_decrease.scss";

class Increase_decrease extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  // BUG: the increase/decrease not in sync with the parent state 
  increaseValue = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
    this.props.changeValue(this.state.value);
  }

  decreaseValue = () => {
    this.setState((prevState) => ({
      value: prevState.value > 0 ? prevState.value - 1 : 0,
    }));
    this.props.changeValue(this.state.value);
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
