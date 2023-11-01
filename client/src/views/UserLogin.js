import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../utils/emitter';

class UserLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
            })
        })
    }
    componentDidMount() {
    }

    toggle = () => {
        this.props.toggle();
    }

    handleOnChangeInput = (event, id) => {

        /**
         * 
         * this.state.email = this.state['email']
         * ..this.state <=> copy current state
         *
         */
        let copyState = { ...this.state };
        copyState[id] = event.target.value;

        this.setState({
            ...copyState
        })

    }

    handleUserLogin = () => {
        console.log(this.state)
        this.props.handleLoginData(this.state);
        this.props.toggle();
    }

    render() {
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
                    <Button color="success" onClick={() => { this.handleUserLogin() }}>
                        Login
                    </Button>{' '}
                    <Button color="secondary" onClick={() => { this.toggle() }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal >
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
