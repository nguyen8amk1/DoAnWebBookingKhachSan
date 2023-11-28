import React from "react";
import PlusMinusComponent from "../PlusMinusComponent";
import CheckboxListComponent from "../CheckboxListComponent";
import UserInfoComponent from "../UserInfoComponent";
import UploadImages from "./UploadImages";
import { uploadPlace } from "../../api/PageApi";
import { uploadImages } from "../../api/ImageUploadAPI";
import LocationOnMapSetting from "../Map/LocationOnMapSetting";
import { placeRecommendation } from "../../api/MapAPI";
import "../../style/UploadPlacesStyle.scss";
import Increase_decrease from "../button/Increase_decrease";
import Reviews from "../reviews/reviews";
import Search_item from "../button/Search_item";
import FooterPage from "../Footer/FooterPage";
import NavBar from "../NavBar";
import { Navigate } from "react-router";

class UploadPlaces extends React.Component {
	constructor(props) {
		super(props);
		this.fileInputRef = React.createRef();
		this.state = {
			type: "",
			count: 0,
			name: "",
			userid: "", 
			address: "",
			bedroomCount: 0,
			bedCount: 0,
			tiennghi: [],
			giaitri: [],
			naunuong: [],
			khongian: [],
			gia: 0,
			images: [],
			recommendations: [],
		};
	}

	addNewAbility(array, abi) {
		array.push(abi);
		console.log(array);
	}

	changeCount = (value) => {
		this.setState({ count: value });
	}

	changeBedRoomCount = (value) => {
		this.setState({ bedCount: value });
	}

	changeBedCount = (value) => {
		this.setState({ bedroomCount: value });
	}

	trackMoney = (event) => {
		this.setState({ gia: event.target.value });
		// console.log(this.state.gia);
	}

	trackTen = (event) => {
		this.setState({ name: event.target.value });
		// console.log(this.state.name);
	}
	
	changeDiaChi = (value) => {
		this.setState({ address: value });
		console.log(this.state.address);
	}

	upload = async (e) => {
		this.setState({userid: localStorage.getItem("userid")});

		e.preventDefault();
		const formData = new FormData();
		const fileInput = this.fileInputRef.current;

		// Append all selected files to the FormData object
		for (const file of fileInput.files) {
			formData.append("images", file);

			// Log metadata information to the console
			console.log(`File Name: ${file.name}`);
			console.log(`File Type: ${file.type}`);
			console.log(`File Size: ${file.size} bytes`);
			console.log("------------------------");
		}

		const imagesLink = await uploadImages(formData);
		console.log(imagesLink);
		this.setState({ images: imagesLink.data });
		const result = await uploadPlace(this.state);

		alert(result.data.msg);
		if(result.status == 200) {
			// console.log("TODO: show some ");
			window.location.reload();
		} else {

		}
	};

	changeLoaiNhaNghi = (event) => {
		console.log(event.target.value);
	}

	async componentDidMount() { }

	render() {
		const userLogged = localStorage.getItem("accessToken") != null;
		const content = 
			<>
				<NavBar />
				{userLogged && (
					<div className="upload-container">
						<form className="form_upload-container">
							<div className="upload_head-container">
								<div class="form-group">
									<label
										className="upload_fontsize-container"
										for="exampleFormControlSelect1"
									>
										Loại chỗ nghỉ
									</label>
									<select onChange={this.changeLoaiNhaNghi} class="form-control" id="exampleFormControlSelect1">
										<option value="canho">Căn hộ</option>
										<option value="nha">Nhà</option>
										<option value="khachsan">Khách sạn</option>
										<option value="cac loai nha nghi khac">
											Các loại nhà nghỉ khác
										</option>
									</select>
								</div>

								<div class="form-group">
									<label
										className="upload_fontsize-container"
										for="exampleFormControlInput1"
									>
										Tên chỗ nghỉ
									</label>
									<input
										type="email"
										class="form-control"
										id="exampleFormControlInput1"
										placeholder="vd: Hà Nội"
										onChange={this.trackTen}
									/>
								</div>
								<div class="form-group">
									<label
										className="upload_fontsize-container"
										for="exampleFormControlInput1"
									>
										Số lượng chỗ nghỉ
									</label>
									<Increase_decrease changeValue={this.changeCount} />
								</div>
								<Search_item changeValue={this.changeDiaChi}/>
							</div>
							<div className="upload_quantity-container">
								<div class="form-group">
									<label
										className="upload_fontsize-container"
										for="exampleFormControlInput1"
									>
										Bao nhiêu phòng ngủ ?
									</label>
									<Increase_decrease changeValue={this.changeBedRoomCount} />
								</div>
								<div class="form-group">
									<label
										className="upload_fontsize-container"
										for="exampleFormControlInput1"
									>
										Bao nhiêu giường ?
									</label>
									<Increase_decrease changeValue={this.changeBedCount} />
								</div>
							</div>

							<div className="checkbox-container">
								<div className="upload_checkbox-container">
									{/* <h3>Tiện nghi chung</h3> */}
									<label
										className="upload_fontsize-container"
										for="exampleFormControlInput1"
									>
										Tiện nghi chung
									</label>
									<CheckboxListComponent
										labels={[
											"Điều hòa nhiệt độ",
											"Hệ thống sưởi",
											"WIFI miễn phí",
											"Trạm sạc xe điện",
										]}
										name="tiennghi"
										addNewAbility={this.addNewAbility}
										array={this.state.tiennghi}
									/>

									{/* <h3>Giải trí</h3> */}
									<label
										className="upload_fontsize-container"
										for="exampleFormControlInput1"
									>
										Giải trí
									</label>
									<CheckboxListComponent
										labels={[
											"TV màn hình phẳng",
											"Hồ bơi",
											"Bể sục",
											"Minibar",
										]}
										name="giaitri"
										addNewAbility={this.addNewAbility}
										array={this.state.giaitri}
									/>

									{/* <h3>Nấu nướng và giặt rửa</h3> */}
									<label
										className="upload_fontsize-container"
										for="exampleFormControlInput1"
									>
										Nấu nướng và giặt rửa
									</label>
									<CheckboxListComponent
										labels={["Bếp", "Bếp nhỏ", "Máy giặt"]}
										name="naunuong"
										addNewAbility={this.addNewAbility}
										array={this.state.naunuong}
									/>

									{/* <h3>Không gian ngoài trời</h3> */}
									<label
										className="upload_fontsize-container"
										for="exampleFormControlInput1"
									>
										Không gian ngoài trời
									</label>
									<CheckboxListComponent
										labels={[
											"Ban công",
											"Nhìn ra vườn",
											"Sân thượng/hiên",
											"Tầm nhìn ra khung cảnh",
										]}
										name="khonggian"
										addNewAbility={this.addNewAbility}
										array={this.state.khongian}
									/>
								</div>

								<div className="upload_foot-container">
									{/* <h3>Giá mỗi đêm</h3> */}
									<label
										className="upload_fontsize-container"
										for="exampleFormControlInput1"
									>
										Giá mỗi đêm
									</label>
									<div class="form-group">
										<input
											type="email"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="vd: 500.000"
											onChange={this.trackMoney}
										/>
									</div>
									{/* <h3>Ảnh</h3> */}
									<div className="choose_files-container">
										{/* <label
                      className="upload_fontsize-container choose_files-container-img"
                      for="exampleFormControlInput1"
                    >
                      Ảnh
                    </label> */}
										{/* <p>Đăng tải ít nhất 5 ảnh của chỗ nghỉ</p> */}
										<label
											className="upload_fontsize-container"
											for="exampleFormControlInput1"
										>
											Đăng tải ít nhất 5 ảnh của chỗ nghỉ
										</label>
										<div class="mb-3">
											<input
												class="form-control"
												type="file"
												ref={this.fileInputRef}
												id="formFileMultiple"
												multiple
											/>
										</div>
									</div>

									<br />
									<button
										type="submit"
										className="btn btn-primary btn-form-success"
										onClick={this.upload}
									>
										Hoàn thành
									</button>
								</div>
							</div>
						</form>
						<FooterPage />
					</div>
				)}
				<UserInfoComponent />
			</>;

		const redirect = <Navigate to="/" />

		let c; 
		if(userLogged) {
			c = content;
		} else {
			c = redirect; 
		}

		return (
			c
		);
	}
}

export default UploadPlaces;
