import React from "react";
import UserLogin from "../views/UserLogin";
import UserRegister from "../views/UserRegister";
import SubNavMain from "../components/Homepage/SubNavMain";
import { Link, useNavigate } from "react-router-dom";

class UserInfoComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openLoginModal: false,
			openRegisterModal: false,
		};
	}

	handleLogin = () => {
		this.setState({ openLoginModal: true });
	};

	toggleLoginModal = () => {
		const temp = !this.state.openLoginModal;
		this.setState({ openLoginModal: temp });
	};

	handleRegister = () => {
		this.setState({ openRegisterModal: true });
	};

	toggleRegisterModal = () => {
		const temp = !this.state.openRegisterModal;
		this.setState({ openRegisterModal: temp });
	};

	handleLogout = () => {
		// TODO: this logout is not finished, haven't call the API
		console.log("I want to logout");
		localStorage.clear();
		window.location.reload();
	};

	render() {
		return (
			<>
				<div className="main">
					<Link to="/" className="main-child">
						<img className="main-child" alt="" src="/logo__web.png" />
					</Link>
				</div>

				<UserLogin
					isOpenModal={this.state.openLoginModal}
					toggle={this.toggleLoginModal}
				/>
				<UserRegister
					isOpenModal={this.state.openRegisterModal}
					toggle={this.toggleRegisterModal}
				/>
				{localStorage.getItem("accessToken") == null ? (
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
							onClick={this.handleRegister}
						>
							Sign Up
						</button>
					</div>
				) : (
					<div className="btn-login_register">
						<Link to='/bookinginfo'>
							<button className="btn btn-primary btn-login">
								{" "}
								{localStorage.getItem("username")}{" "}
							</button>
						</Link>
						<button
							className="btn btn-primary btn-register"
							onClick={this.handleLogout}
						>
							{" "}
							Logout{" "}
						</button>
					</div>
				)}
			</>
		);
	}
}

export default UserInfoComponent;
