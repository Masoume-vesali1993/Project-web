import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Row, Col } from 'antd';
import MainPart from './Components/Bimito/MainPart';
import corona from "../src/Components/Bimito/Img/corona-large.png"
import Menupart from './Components/Bimito/Menupart';
import sales from './Components/Bimito/Img/thirdparty.svg'
import carBody from './Components/Bimito/Img/carBody.svg'
import motorcycle_1 from './Components/Bimito/Img/motorcycle_1.svg'
import fire_2 from './Components/Bimito/Img/fire_2.svg'
import earthquake from './Components/Bimito/Img/earthquake.svg'
import travel from './Components/Bimito/Img/travel.svg'
import medical from './Components/Bimito/Img/medical.svg'
import life from './Components/Bimito/Img/life.svg'
import health from './Components/Bimito/Img/health.svg'
import corporate from './Components/Bimito/Img/corporate.svg'
import Form from './Components/Bimito/Form'
import punchHoles from './Components/Bimito/Img/punchHoles.svg'
import iconsimple from './Components/Bimito/Img/icon-simple.svg'
import iconspeed from './Components/Bimito/Img/icon-speed.svg'
import iconsupport from './Components/Bimito/Img/icon-support.svg'
import iconersal from './Components/Bimito/Img/icon-ersal.svg'
import MenuForm from './Components/Bimito/MenuForm';
import index from './Components/Bimito/index';
import Dargah from './Components/Bimito/Dargah';
import Application from './Components/Bimito/Application';







function App() {
  return (
    <div className="App">
        {/* ---------------------------------------------------------------- TopHeader*/}   
        <div className="topheader">
            <Row>          
                <Col span={6}>
                    <img src={corona} alt=""  className="top-img1"/>
                </Col>

                <Col span={6} className="tow-img">
                    <img src={corona} alt="" className="top-img2"/>
                </Col>

                <Col span={6} className="there-img">
                    <img src={corona} alt="" className="top-img3"/>
                </Col>

                <Col span={6}>
                  <img src={corona} alt="" className="top-img4"/>
                </Col>
            </Row>

            <div className="text-header">
              <h3> طبق اعلام بیمه مرکزی، با توجه به شیوع کرونا، دریافت نسخه فیزیکی بیمه‌نامه تا 15 اردیبهشت ضروری نیست</h3>
            </div>

          </div> 
        {/* ---------------------------------------------------------------- */}
        <div className="menu">
          <Menupart/>
        </div>
        {/* ---------------------------------------------------------------- */}
        <div className="main">
          <MainPart />
          <h2 id="text-main">سامانه مقایسه و خرید آنلاین بیمه</h2>
          <p>بیمه مورد نظر خودتون رو انتخاب کنید</p>
          <p>در صورت خرید تا ساعت 21 در روزهای عادی و تا ساعت 19 در روزهای پنج‌شنبه و تعطیل، بیمه‌نامه شما همان روز صادر می‌شود</p>

          <Row className="online-Buy">
            
          <Col span={4} className="img-persone">
              <img src={earthquake} alt="" height="45px"/>
              <span>زلزله</span>
            </Col>

            <Col span={4} className="img-persone">
              <img src={fire_2} alt="" height="45px"/>
              <span>آتش سوزی</span>
            </Col>

            <Col span={4} className="img-persone">
              <img src={motorcycle_1} alt="" height="45px"/>
              <span>موتور سیکلت</span>
            </Col>

            <Col span={4} className="img-persone">
              <img src={carBody} alt="" height="45px"/>
              <span>بدنه</span>
            </Col>

            <Col span={4} className="img-persone">
              <img src={sales} alt="" height="45px"/>
              <span>شخص ثالث</span>
            </Col>

          </Row>

          <Row className="online-Buy">
             <Col span={4} className="img-persone">
              <img src={corporate} alt="" height="45px"/>
              <span>سازمانی</span>
            </Col>

            <Col span={4} className="img-persone">
              <img src={health} alt="" height="45px"/>
              <span>درمان</span>
            </Col>

            <Col span={4} className="img-persone">
              <img src={life} alt="" height="45px"/>
              <span>عمر</span>
            </Col>

            <Col span={4} className="img-persone">
              <img src={medical} alt="" height="45px"/>
              <span>مسئولیت پزشکان</span>
            </Col>

            <Col span={4} className="img-persone">
              <img src={travel} alt="" height="45px"/>
              <span>مسافرتی</span>
            </Col>
          </Row>
        </div>

        {/* ---------------------------------------------------------------- */}
        <Form/>
        <div className="allpart-form">
          <div className="form">
            <div className="add-form">
                <img src={punchHoles} alt="" className="img-form"/>
                <img src={punchHoles} alt="" className="img-form-tow"/>
                <h2>یادآور تمدید یا اقساط بیمه</h2>
            </div>
          <div>
            
          <div className="box-form">
              <MenuForm />
            </div>
          </div>
        </div>

          <div className="backup">
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <img src={iconersal} width="70px"/>
                <div>ارسال رایگان</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <img src={iconsupport} width="70px"/>
                <div>پشتیبانی در همه مراحل</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <img src={iconspeed} width="70px"/>
                <div>سرعت در صدور</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <img src={iconsimple} width="70px"/>
                <div>سادگی در خرید</div>
              </Col>
            </Row>
          </div>
        </div>
        {/* ---------------------------------------------------------------- */}
        <index />


        {/* ---------------------------------------------------------------- */}
          {/* <Dargah /> */}
          {/* <div>
            <Row>
              <Col span={2}>col-6</Col>
              <Col span={2}>col-6</Col>
              <Col span={2}>col-6</Col>
              <Col span={2}>col-6</Col>
              <Col span={2}>col-6</Col>
              <Col span={2}>col-6</Col>
              <Col span={2}>col-6</Col>
              <Col span={2}>col-6</Col>
              <Col span={2}>col-6</Col>
              <Col span={2}>col-6</Col>
              <Col span={2}>col-6</Col>
              <Col span={2}>col-6</Col>
              <Col span={2}>col-6</Col>
            </Row>
          </div> */}
        {/* ---------------------------------------------------------------- */}
          <Application />
    </div>
  );
}

export default App;