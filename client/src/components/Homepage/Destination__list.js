import React, { Component } from "react";
import "../../style/Homepage/Destination__list.scss";

class Destination__list extends Component {
  render() {
    const { name, quantity, img } = this.props;

    return (
      <div className="Destination__cart-group">
        <div className="Destination__name ">{name}</div>
        <div className="Destination__quantity ">{quantity}</div>
        <img className="Destination__img " alt="" src={img} />
      </div>
    );
  }
}

export default Destination__list;
