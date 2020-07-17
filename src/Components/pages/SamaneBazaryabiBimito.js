import React from "react";
import { Row, Col } from 'antd';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Input } from 'antd';


function SamaneBazaryabiBimito() {
    return (
        <div>
            <Row>
                <Col span={9}>
                    <h6>برای ورود یا ثبت‌نام شماره تلفن همراه خود را وارد کنید</h6>
                    <Input placeholder="ادامه" />
                </Col>
                <Col span={15}>
                    <h2>!با بیمیتو پول دربیارید</h2>
                    <br/>
                    <h5>با ثبت نام به عنوان بازاریاب بیمیتو، به دیگران بیمه بفروشید
                        و به ازای هر بیمه از بیمیتو پورسانت بگیرید</h5>
                </Col>
            </Row>
        </div>
    );
}

export default SamaneBazaryabiBimito;

