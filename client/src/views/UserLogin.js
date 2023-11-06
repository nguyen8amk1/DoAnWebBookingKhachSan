import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class UserLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggle();
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        })

    }

    render() {
        console.log(this.state)
        return (
            <Modal
                isOpen={this.props.isOpenModal}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="md"
            >
                <ModalHeader toggle={() => { this.toggle() }}>Login</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container ">
                            <input type="text"
                                onChange={(event) => { this.handleOnChangeInput(event, 'email') }}
                                placeholder="Email address or username "
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
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => { this.toggle() }}>
                        Login
                    </Button>{' '}
                    <Button color="secondary" onClick={() => { this.toggle() }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default UserLogin;
