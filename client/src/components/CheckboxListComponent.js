import React from "react";

class CheckboxListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        {this.props.labels.map((val, index) => (
          <p key={index}>
            {/* <input
              name={this.props.name}
            />
            <label >
              {val}
            </label> */}
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                name={this.props.name}
              />
              <label class="form-check-label" for="flexCheckDefault">
                {val}
              </label>
            </div>
          </p>
        ))}
      </>
    );
  }
}

export default CheckboxListComponent;
