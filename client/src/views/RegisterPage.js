import React, { Component } from 'react';
import '../style/User/RegisterPage.scss'


class RegisterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            isShowPassword: false,
            errMessage: '',
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        })
    }


    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        })
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
    handleLogin = () => {
        console.log(this.state)
    }
    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content'>
                        <div className='col-12 login-text'>Register</div>
                        <div className='col-12 form-group login-input'>
                            <input type="text" className='form-control'
                                placeholder='Enter your username'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeInput(event, 'username')} />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <div className='custom-input-password'>
                                <input
                                    className='form-control'
                                    placeholder='Enter your password'
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangeInput(event, 'password')}
                                />
                            </div>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <input type="text" className='form-control'
                                placeholder='Enter your first name'
                                value={this.state.firstName}
                                onChange={(event) => this.handleOnChangeInput(event, 'firstName')} />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <input type="text" className='form-control'
                                placeholder='Enter your last name'
                                value={this.state.lastName}
                                onChange={(event) => this.handleOnChangeInput(event, 'lastName')} />
                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12 '>
                            <button className='btn-login' onClick={() => { this.handleLogin() }}>Register</button>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>Or login with</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
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

export default RegisterPage;
