import React,{Component} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Row, Col } from 'antd';
import MainPart from './Components/Bimito/MainPart';
import corona from "../src/Components/Bimito/Img/corona-large.png"
import MenuPart from './Components/Bimito/MenuPart';
import Form from './Components/Bimito/Form'
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
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import TopHeader from './Components/Bimito/TopHeader';
// import Navbar from './Components/Bimito/Navbar';
// import BemeAmval from './Components/pages/BemeAmval';
// import BemeAshkhas from './Components/pages/BemeAshkhas';
// import BemeMasoliat from './Components/pages/BemeMasoliat';
// import BemeVasaiNaglie from './Components/pages/BemeVasaiNaglie';
// import Blog from './Components/pages/Blog';
// import ComponyBime from './Components/pages/ComponyBime';
// import LoginUsing from './Components/pages/Login-Using';
// import SamaneBazaryabiBimito from './Components/pages/SamaneBazaryabiBimito';





class App extends Component {
  render() {
    return (
    <div>
      <BrowserRouter>
          <div>
            {/* <Route path="/" component={Navbar} /> */}

            <Switch>
              {/* <Route path="/new-post" render={(props) => <NewPost {...props} onPostCreated={this.addNewPost} />} /> */}
              {/* <Route path="/blog" exact render={(props) => <Blog {...props} posts={this.state.posts} x={true} /> } /> */}
              {/* <Route path="/blog/list" render={(props) => <h1>blog list</h1> } /> */}
              {/* <Route path="/blog/:id" render={(props) => <SinglePost post={this.findPostById(props.match.params.id)} /> } /> */}
            </Switch>
          </div>
       </BrowserRouter>

       {/* ************************************************************************ ُ*/}
          <TopHeader />

          <MenuPart/>

          <MainPart />

          <Form/>
          
         {/* <div className="allpart-form">
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
         </div> */}


           <Index />

          <Dargah />
            <div className="img-bank">
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

            <Application />
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

              <Bimito />
                <div className="biminto">
                  <h2>بیمنتو چیست؟</h2>
                  <p>از طریق اپلیکیشن و وب‌سایت بیمیتو هر لحظه و هر جایی که هستی می‌تونی به صورت آنلاین بیمه بخری. فقط کافیه به چند تا سوال ساده، جواب بدی تا بتونی کیفیت و قیمت ده‌ها شرکت بیمه مورد تایید بیمه مرکزی رو مقایسه کنی. آخر سر بیمه‌ای که به نظرت مناسب‌تر هست رو انتخاب کنی و بخری و در خونه تحویل بگیری.</p>
                </div>
                

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
  };

  export default App;



