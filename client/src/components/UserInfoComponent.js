import React from 'react'
import UserLogin from '../views/UserLogin';

class UserInfoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false
        }
    }

    handleLogin =  () => {
        this.setState({openModal: true})
    }

    handleLogout =  () => {
        // TODO: this logout is not finished, haven't call the API 
        console.log("I want to logout");
        localStorage.clear();
        window.location.reload();
    }

    toggleUserModal =  () => {
        const temp = !this.state.openModal;
        this.setState({openModal: temp})
    }

    render() {
        return <>
            <UserLogin
            isOpenModal={this.state.openModal}
            toggle={this.toggleUserModal}
            />
          {
           localStorage.getItem("accessToken") == null ? 
          <div className="btn-login_register">
            <button
              type="button"
              className="btn-login btn btn-primary"
              onClick={this.handleLogin}
            >
              Login
            </button>
            <button
              type="button"
              className="btn-register btn btn-primary"
              onClick={() => alert("button click catched")}
            >
              Sign Up
            </button>
          </div>
          :
          <div className="btn-login_register">
           <button className='btn btn-primary btn-login'> {localStorage.getItem('username')} </button>
           <button className='btn btn-primary btn-register' onClick={this.handleLogout}> Logout </button>
          </div>
          }
        </>;
    }
}

export default UserInfoComponent;