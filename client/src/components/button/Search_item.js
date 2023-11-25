import React, { Component } from "react";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { placeRecommendation } from "../../api/MapAPI";
import "../../style/button/Search_item.scss";

class Search_item extends Component {
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
    return (
      <div className="Search_item-container">
        <MDBInputGroup>
          <div className="Search_item-container-input">
            <MDBInput
              label="Search"
              onChange={this.addressRecommend} // Chuyển hàm xử lý sự kiện vào props nếu cần
              value={this.state.address} // Chuyển giá trị vào props nếu cần
            />
            {this.state.address.length > 0 && (
              <div className="Search_item_li">
                {this.state.recommendations.length > 0 &&
                  this.state.recommendations.map((value, index) => (
                    <li key={index}> {value} </li>
                  ))}
              </div>
            )}
          </div>
        </MDBInputGroup>
        <MDBBtn rippleColor="dark" className="search_btn-size">
          <MDBIcon icon="search" />
        </MDBBtn>
      </div>
    );
  }
}

export default Search_item;
