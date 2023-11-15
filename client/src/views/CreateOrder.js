import React from 'react'
import { createOrder } from '../api/MoneyAPI';

class CreateOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          amount: '',
          bankCode: '',
          language: 'vn', // Default language
        };
      }
    
      handleAmountChange = (e) => {
        this.setState({ amount: e.target.value });
      };
    
      handleBankCodeChange = (e) => {
        this.setState({ bankCode: e.target.value });
      };
    
      handleLanguageChange = (e) => {
        this.setState({ language: e.target.value });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      };
    
      waitForRedirect = async () => {
        const info = {};
        info['amount'] = this.state.amount;
        info['bankCode'] = this.state.bankCode;
        info['language'] = this.state.language;
        const result = await createOrder(info);
        console.log(result)
        window.location.href = result.data.redirectUrl;
        return null;
      }

      render() {
        const { amount, bankCode, language } = this.state;
    
        return (
          <div>
            <h3>Title</h3>
            <div className="table-responsive">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Số tiền</label>
                  <input
                    className="form-control"
                    id="amount"
                    name="amount"
                    placeholder="Số tiền"
                    value={amount}
                    onChange={this.handleAmountChange}
                  />
                </div>
                <div className="form-group">
                  <label>Chọn Phương thức thanh toán:</label>
                  <div className="controls">
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="bankCode"
                        value=""
                        checked={bankCode === ''}
                        onChange={this.handleBankCodeChange}
                      />
                      Cổng thanh toán VNPAYQR
                    </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="bankCode"
                        value="VNPAYQR"
                        checked={bankCode === 'VNPAYQR'}
                        onChange={this.handleBankCodeChange}
                      />
                      Thanh toán qua ứng dụng hỗ trợ VNPAYQR
                    </label>
                    {/* Add other radio options for different payment methods */}
                  </div>
                </div>
                <div className="form-group">
                  <label>Ngôn ngữ</label>
                  <div className="controls">
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="language"
                        value="vn"
                        checked={language === 'vn'}
                        onChange={this.handleLanguageChange}
                      />
                      Tiếng việt
                    </label>
                    <label className="radio-inline">
                      <input
                        type="radio"
                        name="language"
                        value="en"
                        checked={language === 'en'}
                        onChange={this.handleLanguageChange}
                      />
                      Tiếng anh
                    </label>
                  </div>
                </div>
                <button className="btn btn-default" type="submit" onClick={this.waitForRedirect}>Thanh toán</button>
              </form>
            </div>
            <p>&nbsp;</p>
          </div>
        );
      }
}

export default CreateOrder; 