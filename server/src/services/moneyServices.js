const axios = require('axios');
let dateFormat = require('dateformat');
let querystring = require('qs');
let crypto = require("crypto");     

const createZaloOrder = async ()  => {
    let data = JSON.stringify({
        "app_id": 0,
        "app_user": "string",
        "app_trans_id": "string",
        "app_time": 0,
        "amount": 0,
        "title": "string",
        "description": "string",
        "callback_url": "string",
        "redirect_url": "string",
        "device_info": "string",
        "item": "string",
        "embed_data": "string",
        "mac": "string",
        "product_code": "AGREEMENT",
        "bank_code": "string",
        "phone": "string",
        "email": "string",
        "address": "string"
    });

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://sb-openapi.zalopay.vn/v2/create',
    headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
    },
    data : data
    };

    axios(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
    console.log(error);
    });

}

const getRequestSourceIP = (req) => {
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
}

const vnPayCreateOrder = async (orderInfo) => {
    const vnp_TmnCode = process.env.VNPAY_CODE;
    const vnp_HashSecret = process.env.VNPAY_SECRET; 
    const vnp_Url = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html';

    const ipAddr = orderInfo.sentDeviceIpAddress;
    
    let tmnCode = vnp_TmnCode;
    let secretKey = vnp_HashSecret;
    let returnUrl = config.get('vnp_ReturnUrl');

    let date = new Date();

    let createDate = dateFormat(date, 'yyyymmddHHmmss');
    let orderId = dateFormat(date, 'HHmmss');
    let amount = orderInfo.amount;
    let bankCode = orderInfo.bankCode;
    
    let orderInfo = "taodeobietcailongihet";
    let locale;

    if(locale === null || locale === ''){
        locale = 'vn';
    }

    let currCode = 'VND';
    let vnp_Params = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    // vnp_Params['vnp_Merchant'] = ''
    vnp_Params['vnp_Locale'] = locale;
    vnp_Params['vnp_CurrCode'] = currCode;
    vnp_Params['vnp_TxnRef'] = orderId;
    vnp_Params['vnp_OrderInfo'] = orderInfo;
    // vnp_Params['vnp_OrderType'] = orderType;
    vnp_Params['vnp_Amount'] = amount * 100;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;

    if(bankCode !== null && bankCode !== ''){
        vnp_Params['vnp_BankCode'] = bankCode;
    }

    vnp_Params = sortObject(vnp_Params);
    let signData = querystring.stringify(vnp_Params, { encode: false });
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex"); 
    vnp_Params['vnp_SecureHash'] = signed;
    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

    console.log("vnpUrl", vnpUrl);    

    // router.post('/create_payment_url', function (req, res, next) {
    //     res.redirect(vnpUrl)
    // });
    // Vui lòng tham khảo thêm tại code demo
}

export default {
    getRequestSourceIP: getRequestSourceIP, 
    vnPayCreateOrder: vnPayCreateOrder, 
}