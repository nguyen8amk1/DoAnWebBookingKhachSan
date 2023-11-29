import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { login } from "../api/AuthenticationAPI";
import { Navigate } from "react-router-dom";

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {}

  toggle = () => {
    this.props.toggle();
  };

  login = async () => {
    console.log(this.state);
    try {
      const result = await login(this.state.email, this.state.password);
      console.log(result);
      if (result === -1) {
        return <Navigate to="/" replace={true} />;
      }
      // TODO:
      // Store the token into localstorage
      localStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("refreshToken", result.refreshToken);
      localStorage.setItem("username", result.userInfo.username);
      // Refresh the Homepage with the user information
      window.location.reload();
    } catch {
      // Display some error on the screen
    }
  };

  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;

    this.setState({
      ...copyState,
    });
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpenModal}
        toggle={() => {
          this.toggle();
        }}
        className={"modal-user-container"}
        size="md"
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
          Login
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container ">
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "email");
                }}
                placeholder="Email address or username "
                value={this.state.email}
              ></input>
            </div>
            <div className="input-container ">
              <input
                type="password"
                onChange={(event) => {
                  this.handleOnChangeInput(event, "password");
                }}
                placeholder="Password"
                value={this.state.password}
              ></input>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => {
              this.toggle();
              this.login();
            }}
          >
            Login
          </Button>{" "}
          <Button
            color="secondary"
            onClick={() => {
              this.toggle();
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default UserLogin;
