import React from "react";
import { getBookInfo } from "../api/PageApi";
import BookedInformation from "./BookedInformation";
import BookingPlaceInfo from "./BookingPlaceInfo";
import UserInfoComponent from "./UserInfoComponent";
import "../style/BookingInfo.scss";
import SubNavMain from "./Homepage/SubNavMain";
import { Link, Navigate } from "react-router-dom";
import NavBar from "./NavBar";

class BookingInformation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bookingplaces: [],
			bookedplaces: [],
			shownTabId: 1,
			error: false
		}
	}

	removeOrder = (index) => {
		// TODO: CALL THE API TO REMOVE THE DAMN THING IN DATABASE AS WELL 

		const newArray = [
			...this.state.bookingplaces.slice(0, index),
			...this.state.bookingplaces.slice(index + 1)
		];

		this.setState({
			bookingplaces: newArray
		});

		console.log(this.state.bookingplaces);
	}

	async componentDidMount() {
		// TODO: call hotel api
		// input: id
		const result = await getBookInfo(localStorage.getItem("userid"));
		console.log("booking info ", result);

		if (result === -1) {
			this.setState({ error: true });
		}

		// <<<<<<< HEAD
		// 		this.setState({
		// 			bookingplaces: result.booked,
		// 			bookedplaces: result.booking,
		// 		});

		// 	}

		// 	showTab = (id) => {
		// 		this.setState({
		// 			shownTabId: id
		// 		});
		// 	}

		// 	render() {
		// 		const content = <>
		// 			<div className="homepage">
		// 				<div className="main">
		// 					<Link to="/" className="main-child">
		// 						<img className="main-child" alt="" src="/logo__web.png" />
		// 					</Link>

		// 					<NavBar />

		// 					<UserInfoComponent />
		// 				</div>
		// 			</div>

		// 			<div className='main-content-container'>
		// 				<div className='left-container'>
		// 					<b>Clap 2K3</b>
		// 					<p>Sửa hồ sơ</p>
		// 					<hr />
		// 					<p>Tài khoản của tôi</p>
		// 					<p><i className="fa fa-bell" aria-hidden="true"></i>  Thông Báo</p>
		// 				</div>

		// 				<div className='right-container'>
		// 					<div className='right-content'>
		// 						<div className='left-banner'>
		// 							<button onClick={() => this.showTab(1)}>Chỗ nghĩ đang thuê</button>
		// 						</div>
		// 						<div className='right-banner'>
		// 							<button onClick={() => this.showTab(2)}>Chỗ nghĩ đang cho thuê</button>
		// 						</div>
		// 					</div>
		// 					<hr />

		// 					{this.state.shownTabId == 1 && <div>
		// 						{this.state.bookingplaces.length > 0 && <div>
		// 							{this.state.bookingplaces.map((place, index) => (
		// 								<BookingPlaceInfo index={index} removeOrder={this.removeOrder} key={index} info={place} />
		// 							))}
		// 							{/* <BookingPlaceInfo info={this.state.bookingplaces[0]} className='left-banner-detail' /> */}
		// 							{/* <BookingPlaceInfo info={this.state.bookingplaces[1]} className='right-banner-detail' /> */}
		// 						</div>}
		// 					</div>}

		// 					{this.state.shownTabId == 2 && <div>
		// 						{this.state.bookedplaces.length > 0 && <div>

		// 							{this.state.bookedplaces.map((place, index) => (
		// 								<BookedInformation key={index} info={place} />
		// 							))}

		// 							{/* <BookedInformation info={this.state.bookedplaces[0]} className='left-banner-detail' /> */}
		// 							{/* <BookedInformation info={this.state.bookedplaces[1]} className='right-banner-detail' /> */}
		// 						</div>}
		// 					</div>}

		// 				</div>
		// 			</div>

		// 			{/* <button onClick={() => this.showTab(1)}>Chổ nghỉ đang thuê</button>
		//       <button onClick={() => this.showTab(2)}>Chổ nghỉ đang cho thuê</button> */}
		// =======
		this.setState({
			bookingplaces: result.booked,
			bookedplaces: result.booking,
		});
	}

	showTab = (id) => {
		this.setState({
			shownTabId: id,
		});
	};

	render() {
		const content = (
			<>
				<div className="homepage">
					<div className="main">
						<Link to="/" className="main-child">
							<img className="main-child" alt="" src="/logo__web.png" />
						</Link>

						<NavBar />

						<UserInfoComponent />
					</div>
				</div>

				<div className="main-content-container">
					<div className="right-container">
						<div className="right-content">
							<div className="left-banner">
								<button onClick={() => this.showTab(1)}>
									Chỗ nghỉ đang thuê
								</button>
							</div>
							<div className="right-banner">
								<button onClick={() => this.showTab(2)}>
									Chỗ nghỉ đang cho thuê
								</button>
							</div>
						</div>
						<hr className="line-container" />
						{/* >>>>>>> uploadHotel */}

						{this.state.shownTabId == 1 && (
							<div>
								{this.state.bookingplaces.length > 0 && (
									<div>
		 							{this.state.bookingplaces.map((place, index) => (
		 								<BookingPlaceInfo index={index} removeOrder={this.removeOrder} key={index} info={place} />
		 							))}
										{/* <BookingPlaceInfo
											info={this.state.bookingplaces[0]}
											removeOrder={this.removeOrder}
											className="left-banner-detail"
										/>
										<BookingPlaceInfo
											info={this.state.bookingplaces[0]}
											removeOrder={this.removeOrder}
											className="left-banner-detail"
										/> */}
										{/* <BookingPlaceInfo
											info={this.state.bookingplaces[1]}
											removeOrder={this.removeOrder}
											className="right-banner-detail"
										/> */}
									</div>
								)}
							</div>
						)}

						{/* <<<<<<< HEAD */}
						{/* booking tab: anyone can view, if logged in  */}

						{/* {this.state.shownTabId == 1 && this.state.bookingplaces.map((place, index) => (
        <BookingPlaceInfo key={index} info={place} />
      ))} */}

						{/* booked tab: only manager can view */}
						{/* TODO: restrict non manager user */}
						{/* {this.state.shownTabId == 2 && this.state.bookedplaces.map((place, index) => (
        <BookedInformation key={index} info={place} />
      ))} */}

						{this.state.shownTabId == 2 && (
							<div>
								{this.state.bookedplaces.length > 0 && (
									<div>

		 							{this.state.bookedplaces.map((place, index) => (
		 								<BookedInformation key={index} info={place} />
		 							))}

										{/* <BookedInformation
											info={this.state.bookedplaces[0]}
											className="left-banner-detail"
										/> */}
										{/* <BookedInformation
											info={this.state.bookedplaces[1]}
											className="right-banner-detail"
										/> */}
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</>
		);

		const redirect = <Navigate to="/" />;

		let c;
		if (this.state.error) {
			c = redirect;
		} else {
			c = content;
		}
		return (
			c
		);
	}
}

export default BookingInformation;
