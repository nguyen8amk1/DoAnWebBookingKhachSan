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

class UploadPlaces extends React.Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.state = {
      type: "",
      count: 0,
      name: "",
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

  upload = async (e) => {
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
    uploadPlace(this.state);
  };

  async componentDidMount() {}

  addressRecommend = async (e) => {
    this.setState({ address: e.target.value });
    if (this.state.address.length > 0) {
      const result = await placeRecommendation(this.state.address);
      this.setState({ recommendations: result });
    } else if (this.state.address.length == 0) {
      this.setState({ recommendations: [] });
    }
    console.log(this.state.address.length);
  };

  render() {
    const userLogged = localStorage.getItem("accessToken") != null;
    return (
      <>
        {userLogged && (
          // <form>
          //   <h2>Loại chỗ nghỉ</h2>
          //   <select>
          //     <option value="canho">Căn hộ</option>
          //     <option value="nha">Nhà</option>
          //     <option value="khachsan">Khách sạn</option>
          //     <option value="cac loai nha nghi khac">
          //       Các loại nhà nghỉ khác
          //     </option>
          //   </select>
          //   <h2>Tên và địa điểm</h2>
          //   <PlusMinusComponent
          //     label={"Đăng bao nhiêu chổ nghỉ"}
          //     positive={true}
          //   />
          //   <label>Tên chổ nghỉ</label>
          //   <input type="text" />
          //   <br />
          //   <br />
          //   {/* TODO: HAVE RECOMMENDATION OF PLACES */}
          //   <div class="container">
          //     <div class="searchInput">
          //       <label>Địa chỉ</label>
          //       <input
          //         type="text"
          //         onChange={this.addressRecommend}
          //         value={this.state.address}
          //       />
          //       <br />
          //       <br />
          //       {this.state.address.length > 0 && (
          //         <div class="resultBox">
          //           {this.state.recommendations.length > 0 &&
          //             this.state.recommendations.map((value, index) => (
          //               <li key={index}> {value} </li>
          //             ))}
          //         </div>
          //       )}
          //       <div class="icon">
          //         <i class="fas fa-search"></i>
          //       </div>
          //     </div>
          //   </div>
          //   {/* TODO: chon dia chi xong -> hien ra chon dia chi tren ban do */}
          //   <h2>Vị trí trên bản đồ</h2>
          //   <LocationOnMapSetting />
          //   <h2>Cài đặt chổ nghỉ</h2>
          //   <h3>Chi tiết chổ nghỉ</h3>
          //   <PlusMinusComponent
          //     label={"Bao nhiêu phòng ngủ ?"}
          //     positive={true}
          //   />
          //   <PlusMinusComponent label={"Bao nhiêu giường ?"} positive={true} />
          //   <h3>Tiện nghi chung</h3>
          //   <CheckboxListComponent
          //     labels={[
          //       "Điều hòa nhiệt độ",
          //       "Hệ thống sưởi",
          //       "WIFI miễn phí",
          //       "Trạm sạc xe điện",
          //     ]}
          //     name="tiennghi"
          //   />

          //   <h3>Giải trí</h3>
          //   <CheckboxListComponent
          //     labels={["TV màn hình phẳng", "Hồ bơi", "Bể sục", "Minibar"]}
          //     name="giaitri"
          //   />

          //   <h3>Nấu nướng và giặt rửa</h3>
          //   <CheckboxListComponent
          //     labels={["Bếp", "Bếp nhỏ", "Máy giặt"]}
          //     name="naunuong"
          //   />

          //   <h3>Không gian ngoài trời</h3>
          //   <CheckboxListComponent
          //     labels={[
          //       "Ban công",
          //       "Nhìn ra vườn",
          //       "Sân thượng/hiên",
          //       "Tầm nhìn ra khung cảnh",
          //     ]}
          //     name="khonggian"
          //   />

          //   <h3>Giá mỗi đêm</h3>
          //   <input />
          //   <h3>Ảnh</h3>
          //   <p>Đăng tải ít nhất 5 ảnh của chỗ nghỉ</p>
          //   <input type="file" ref={this.fileInputRef} multiple />
          //   <br />
          //   <button type="submit" onClick={this.upload}>
          //     Hoàn thành
          //   </button>
          // </form>
          <div>
            <form>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Loại chỗ nghỉ</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option value="canho">Căn hộ</option>
                  <option value="nha">Nhà</option>
                  <option value="khachsan">Khách sạn</option>
                  <option value="cac loai nha nghi khac">
                    Các loại nhà nghỉ khác
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Tên chỗ nghỉ</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="vd: Hà Nội"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Số lượng chỗ nghĩ</label>
                <Increase_decrease />
              </div>
              <div class="form-group">
                <Reviews />
              </div>
            </form>
          </div>
        )}
        <UserInfoComponent />
      </>
    );
  }
}

export default UploadPlaces;
