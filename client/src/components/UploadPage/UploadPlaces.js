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

  render() {
    const userLogged = localStorage.getItem("accessToken") != null;
    return (
      <>
      <NavBar/>
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
          //   <label className="upload_fontsize-container">Tên chổ nghỉ</label>
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
                  />
                </div>
                <div class="form-group">
                  <label
                    className="upload_fontsize-container"
                    for="exampleFormControlInput1"
                  >
                    Số lượng chỗ nghỉ
                  </label>
                  <Increase_decrease />
                </div>
                <Search_item />
                {/* TODO: chon dia chi xong -> hien ra chon dia chi tren ban do */}
                {/* <div className="location-container">
                  <label
                    className="upload_fontsize-container upload_fontsize-container-location"
                    htmlFor=""
                  >
                    Vị trí trên bản đồ
                  </label>
                  <LocationOnMapSetting />
                </div> */}
              </div>
              {/* <h2>Cài đặt chổ nghỉ</h2>
              <h3>Chi tiết chổ nghỉ</h3> */}

              <div className="upload_quantity-container">
                <div class="form-group">
                  <label
                    className="upload_fontsize-container"
                    for="exampleFormControlInput1"
                  >
                    Bao nhiêu phòng ngủ ?
                  </label>
                  <Increase_decrease />
                </div>
                <div class="form-group">
                  <label
                    className="upload_fontsize-container"
                    for="exampleFormControlInput1"
                  >
                    Bao nhiêu giường ?
                  </label>
                  <Increase_decrease />
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
      </>
    );
  }
}

export default UploadPlaces;
