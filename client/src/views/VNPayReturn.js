import React from 'react'
import queryString from 'query-string';
import { Navigate } from 'react-router';
import "../style/VNPayReturn.scss";

class VNPayReturn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: "",
            bank: "",
            bankTranNo: "",
            cardtype: "",
            orderInfo: "",
            paydate: "", // need to parse this as well 
            done: false,
        };
    }

    componentDidMount() {
        // TODO: Guard the page to check if it's the real result page ?? 
        const queryStringFromUrl = window.location.search;
        const queryParams = queryString.parse(queryStringFromUrl);
        if (Object.getOwnPropertyNames(queryParams).length === 0) {
            console.log("THIS PAGE DOESN'T WORK");
            this.setState({ done: true })
        }

        console.log(queryParams);
        this.setState({
            amount: queryParams.vnp_Amount,
            bank: queryParams.vnp_BankCode,
            bankTranNo: queryParams.vnp_BankTranNo,
            cardtype: queryParams.vnp_CardType,
            orderInfo: queryParams.vnp_OrderInfo,
            paydate: queryParams.vnp_PayDate,
        });
    }

    hoanthanh = (e) => {
        e.preventDefault();
        this.setState({ done: true });
    }

    render() {
        let content;
        if (this.state.done) {
            content = <Navigate to="/" />
        } else {
            content =
                <>
                    {/* <div>
                        <p>{this.state.amount}</p>
                        <p>{this.state.bank}</p>
                        <p>{this.state.bankTranNo}</p>
                        <p>{this.state.cardtype}</p>
                        <p>{this.state.orderInfo}</p>
                        <p>{this.state.paydate}</p>
                        <button onClick={this.hoanthanh}>Hoan Thanh</button>
                    </div> */}
                    <div className='pay-return-container'>
                        <div className='pay-return-content'>
                            <div className='head-text'>
                                Kết quả giao dịch
                            </div>
                            <div className='main-content'>
                                <div className='content-logo'>
                                    <img src='data:image/png;base64,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' />
                                </div>
                                <div className='head-content'>
                                    <i class="fa fa-check" aria-hidden="true"></i> Giao dịch thành công
                                </div>
                                <div className='detail-content'>
                                    <div className='head-money'>
                                        {this.state.amount} VND
                                        <hr />
                                    </div>
                                    <div className='detail-value'>
                                        <div className='first-line'>
                                            <div className='left-content'>
                                                Số tiền (VND)
                                            </div>
                                            <div className='right-content'>
                                                {this.state.amount}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='second-line'>
                                            <div className='left-content'>
                                                Ngân hàng
                                            </div>
                                            <div className='right-content'>
                                                {this.state.bank}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='third-line'>
                                            <div className='left-content'>
                                                Mã giao dịch
                                            </div>
                                            <div className='right-content'>
                                                {this.state.bankTranNo}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='fourth-line'>
                                            <div className='left-content'>
                                                Loại thẻ
                                            </div>
                                            <div className='right-content'>
                                                {this.state.cardtype}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='fifth-line'>
                                            <div className='left-content'>
                                                Thông tin giao dịch
                                            </div>
                                            <div className='right-content'>
                                                {this.state.orderInfo}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='sixth-line'>
                                            <div className='left-content'>
                                                Thời gian giao dịch
                                            </div>
                                            <div className='right-content'>
                                                {this.state.paydate}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='share-content-btn'>
                                            <button className='btn'><i class="fa fa-share-alt" aria-hidden="true"></i></button>
                                            Chia sẽ
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='return-btn'>
                                <button className='btn' onClick={this.hoanthanh}>Về trang chủ</button>
                            </div>
                        </div>
                    </div>
                </>;
        }

        return (
            content

        );
    }
}

export default VNPayReturn; 