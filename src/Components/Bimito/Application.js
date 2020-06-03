import React from 'react';
import './styles.css';
import { Row, Col } from 'antd';
import ios from './Img/ios.png'
import charkhone from './Img/charkhone.png'
import iranapps2 from './Img/iranapps2.png'
import mayket from './Img/mayket.png'
import bazar from './Img/bazar.png'
import google from './Img/google.png'










export default class extends React.Component {

    constructor(props){
        super(props);
        this.state={
            props : props
        }
    }

    render(){
        return (
            <div className="application">
                <div className="crad-application">
                <h3 className="title-text">دانلود اپلیکیشن بیمنتو</h3>
                <Row>
                  <Col span={4}>
                    <img src={ios} alt="دانلود اپلیکیشن از ios" width="120px"/>
                  </Col>
                  <Col span={4}>
                    <img src={charkhone} alt="دانلود اپلیکیشن از چهارخونه" width="120px"/>
                  </Col>
                  <Col span={4}>
                    <img src={iranapps2} alt="دانلود اپلیکیشن از ایران اپس" width="120px"/>
                  </Col>
                  <Col span={4}>
                    <img src={mayket} alt="دانلود اپلیکیشن از مارکت" width="120px"/>
                  </Col>
                  <Col span={4}>
                    <img src={bazar} alt="دانلود اپلیکیشن از بازار" width="120px"/>
                  </Col>
                  <Col span={4}>
                    <img src={google} alt="دانلود اپلیکشن از گوگل" width="120px"/>
                  </Col>
                </Row>
              </div>
            </div>
        );
    }

}