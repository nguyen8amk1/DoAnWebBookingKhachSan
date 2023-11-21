import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { register } from '../api/AuthenticationAPI';

class UserRegister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            role: ''
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggle();
    }

    register = async () => {
        console.log(this.state)
        try {
            const result = await register(this.state.firstname, this.state.lastname, this.state.username, this.state.password, this.state.role);
            console.log(result);
            console.log("TODO: Loading....");
            const success = true; // TODO: Check the result status 
            if(success) {
                console.log("TODO: show the Login with already filled information");
            } else {
                console.log("TODO: show error, the information is not valid");
            }
            
        } catch {
            // Display some error on the screen
        }


    }

    onRoleChange =  (e) => {
        this.setState({
          role: e.currentTarget.value,
        });
    }


    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        });

    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpenModal}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="md"
            >
                <ModalHeader toggle={() => { this.toggle() }}>Register</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container ">
                            <input type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, 'firstname') }}
                                placeholder="First Name"
                                value={this.state.firstname}
                            ></input>
                        </div>
                        <div className="input-container ">
                            <input type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, 'lastname') }}
                                placeholder="Last Name"
                                value={this.state.lastname}
                            ></input>
                        </div>
                        <div className="input-container ">
                            <input type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, 'username') }}
                                placeholder="Username"
                                value={this.state.username}
                            ></input>
                        </div>
                        <div className="input-container ">
                            <input type="email"
                                onChange={(event) => { this.handleOnChangeInput(event, 'email') }}
                                placeholder="Email"
                                value={this.state.email}
                            ></input>
                        </div>
                        <div className="input-container ">
                            <input type="password"
                                onChange={(event) => { this.handleOnChangeInput(event, 'password') }}
                                placeholder="Password"
                                value={this.state.password}
                            ></input>
                        </div>
                        <div className="input-container ">
                            <input type="password"
                                onChange={(event) => { this.handleOnChangeInput(event, 'passwordConfirm') }}
                                placeholder="Password Confirmation"
                                value={this.state.passwordConfirm}
                            ></input>
                        </div>
                        {/* <p>Please select your role: </p>
                        <div>
                            <input type="radio" id="customer" name="role" value="customer" onChange={this.onRoleChange}></input>
                            <label for="customer">Customer</label><br/>
                            <input type="radio" id="manager" name="role" value="manager" onChange={this.onRoleChange}></input> 
                            <label for="manager">Hotel Manager</label><br/>  
                        </div> */}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => { this.toggle(); this.register(); }}>
                        Register
                    </Button>{' '}
                    <Button color="secondary" onClick={() => { this.toggle() }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

export default UserRegister;
