import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../../style/Global/FooterPage.scss";

export default function FooterPage() {
  return (
    <div className="footer">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Liên hệ với chúng tôi:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  Công Ty
                </h6>
                <p>
                  Bookinguit.click - Nền tảng đặt phòng khách sạn hàng đầu với
                  sự đơn giản và tiện lợi. Khám phá hàng ngàn lựa chọn từ các
                  địa điểm phổ biến đến những khu vực độc đáo.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Sản phẩm</h6>
                <p>
                  <a href="" className="text-reset">
                    Khách sạn
                  </a>
                </p>
                <p>
                  <a href="" className="text-reset">
                    Nhà khách
                  </a>
                </p>
                <p>
                  <a href="" className="text-reset">
                    Nhà trọ
                  </a>
                </p>
                <p>
                  <a href="" className="text-reset">
                    Nhà nghỉ B&B
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">links</h6>
                <p>
                  <a href="" className="text-reset">
                    Giá
                  </a>
                </p>
                <p>
                  <a href="" className="text-reset">
                    Cài đặt
                  </a>
                </p>
                <p>
                  <a href="" className="text-reset">
                    Đơn hàng
                  </a>
                </p>
                <p>
                  <a href="" className="text-reset">
                    Giúp đỡ
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  101, Linh Trung, TP. Thủ Đức, TP. Hồ Chí Minh, Việt Nam
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  bookinguit.click@gmail.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> 03 777 888 999
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> 02 777 888 999
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="">
            Bookinguit.click
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
