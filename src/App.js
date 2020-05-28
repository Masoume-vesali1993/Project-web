import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Row, Col } from 'antd';
import MainPart from './Components/Bimito/MainPart';
import corona from "../src/Components/Bimito/Img/corona-large.png"
import MenuPart from './Components/Bimito/MenuPart';
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
import Index from './Components/Bimito/Index';
import Dargah from './Components/Bimito/Dargah';
import Application from './Components/Bimito/Application';
import google from './Components/Bimito/Img/google.png'
import bazar from './Components/Bimito/Img/bazar.png'
import mayket from './Components/Bimito/Img/mayket.png'
import iranapps2 from './Components/Bimito/Img/iranapps2.png'
import charkhone from './Components/Bimito/Img/charkhone.png'
import ios from './Components/Bimito/Img/ios.png'
import Bimito from './Components/Bimito/Biminto';
import Footer from './Components/Bimito/Footer';
import samandehi from './Components/Bimito/Img/samandehi.png'
import enamad from './Components/Bimito/Img/enamad.png'
import anjoman from './Components/Bimito/Img/anjoman.png'
import EndFooer from './Components/Bimito/EndFooer';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
// import Scrool from './Components/Bimito/Scrool';








function App() {
  return (
    <div className="App">
      {/* <Scrool /> */}
        {/* ---------------------------------------------------------------- TopHeader*/}   
        <div className="topheader">

            <div className="text-header">
              <h3> طبق اعلام بیمه مرکزی، با توجه به شیوع کرونا، دریافت نسخه فیزیکی بیمه‌نامه تا 15 اردیبهشت ضروری نیست</h3>
            </div>

          </div> 
        {/* ---------------------------------------------------------------- */}
        <div className="menu">
          <MenuPart/>
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


          <div className="first-section">
              <div className="airplane">

                <svg height="210" width="500">
                  <polygon points="1388.31 20.69 1421.4 67.45 1471.98 55.42 1407.06 15.99 1388.31 20.69 1388.31 20.69" fill="#fff" fill-role="evenodd" />
                </svg>
  
              </div>
          </div>


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
                <div>
                  <p>ارسال رایگان</p>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <img src={iconsupport} width="70px"/>
                <div>
                  <p>پشتیبانی در همه مراحل</p>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <img src={iconspeed} width="70px"/>
                <div>
                  <p>سرعت در صدور</p>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <img src={iconsimple} width="70px"/>
                <div>
                  <p>سادگی در خرید</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* ---------------------------------------------------------------- */}
        <Index />


        {/* ---------------------------------------------------------------- */}
          <Dargah />
          <div>
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
          </div>
        {/* ---------------------------------------------------------------- */}
          <Application />
          <div>
            <h3>دانلود اپلیکیشن بیمنتو</h3>
            <Row>
              <Col span={4}>
                <img src={ios} alt="دانلود اپلیکیشن از ios" width="80%"/>
              </Col>
              <Col span={4}>
                <img src={charkhone} alt="دانلود اپلیکیشن از چهارخونه" width="80%"/>
              </Col>
              <Col span={4}>
                <img src={iranapps2} alt="دانلود اپلیکیشن از ایران اپس" width="80%"/>
              </Col>
              <Col span={4}>
                <img src={mayket} alt="دانلود اپلیکیشن از مارکت" width="80%"/>
              </Col>
              <Col span={4}>
                <img src={bazar} alt="دانلود اپلیکیشن از بازار" width="80%"/>
              </Col>
              <Col span={4}>
                <img src={google} alt="دانلود اپلیکشن از گوگل" width="80%"/>
              </Col>
            </Row>
          </div>
        {/* ---------------------------------------------------------------- */}
        <Bimito />
        <div className="biminto">
          <h2>بیمنتو چیست؟</h2>
          <p>از طریق اپلیکیشن و وب‌سایت بیمیتو هر لحظه و هر جایی که هستی می‌تونی به صورت آنلاین بیمه بخری. فقط کافیه به چند تا سوال ساده، جواب بدی تا بتونی کیفیت و قیمت ده‌ها شرکت بیمه مورد تایید بیمه مرکزی رو مقایسه کنی. آخر سر بیمه‌ای که به نظرت مناسب‌تر هست رو انتخاب کنی و بخری و در خونه تحویل بگیری.</p>
        </div>
        {/* ---------------------------------------------------------------- */}
        <Footer />
        <div className="footer">
          <Row>
            <Col span={6}>
              <Row>

                <Col span={8}>
                  <img src={enamad} width="100%" />
                </Col>
                
                <Col span={8}>
                  <img src={samandehi} width="100%"/>
                </Col>

                <Col span={8}>
                  <img src={anjoman} width="100%"/>
                </Col>

              </Row>
              <p>masoumevsl198@gmail.com:ایمیل</p>
              </Col>
              <Col span={6}>
                <p>تهران خیابان وزرا،خیابان هفتم</p>
                <p>تلفن02112356</p>
              </Col>
              <Col span={6}>
                <p>ورود به پنل</p>
                <p>شاریط و قوانین</p>
                <p>سوالات متداول</p>
                <p>همکاری با ما</p>
                <p>تماس با ما</p>
                <p>درباره ما</p>
                <p>فرصت های شغلی</p>
              </Col>
              <Col span={6}>
                <p>بیمه شخص ثالث</p>
                <p>بیمه بدنه</p>
                <p>بیمه آتش سوزی</p>
                <p>بیمه مسافرتی</p>
                <p>بیمه عمر</p>
                <p>بیمه موتور سیکلت</p>
                <p>بیمه درمان تکمیلی</p>
              </Col>
          </Row>
        </div>
        {/* ---------------------------------------------------------------- */}
        <EndFooer />
        <div className="endpartpage">
          <Row>
          <Col span={12}>
                <p>لوگو</p>
            </Col>

            <Col span={12}>
              <h3><a className="endpart">سامانه بازاریابی بیمنتو</a></h3>
            </Col>
          </Row>
        </div>
    </div>
  );
}

export default App;