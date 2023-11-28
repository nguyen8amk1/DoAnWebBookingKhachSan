import React from 'react'
import queryString from 'query-string';
import { Navigate } from 'react-router';


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
        if(Object.getOwnPropertyNames(queryParams).length === 0) {
            console.log("THIS PAGE DOESN'T WORK");
            this.setState({done: true})
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
        this.setState({done: true});
    }

    render() {
        let content; 
        if(this.state.done) {
            content = <Navigate to="/"/> 
        } else {
            content = 
            <>
                <div>
                    <p>{this.state.amount}</p>
                    <p>{this.state.bank}</p>
                    <p>{this.state.bankTranNo}</p>
                    <p>{this.state.cardtype}</p>
                    <p>{this.state.orderInfo}</p>
                    <p>{this.state.paydate}</p>
                    <button onClick={this.hoanthanh}>Hoan Thanh</button>
                </div>
            </>;
        }

        return (
            content
        );
    }
}

export default VNPayReturn; 