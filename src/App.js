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
import Index from './Components/Bimito/Index';
import Dargah from './Components/Bimito/Dargah';
import Application from './Components/Bimito/Application';
import Footer from './Components/Bimito/Footer';
import samandehi from './Components/Bimito/Img/samandehi.png'
import enamad from './Components/Bimito/Img/enamad.png'
import anjoman from './Components/Bimito/Img/anjoman.png'
import Bimito from './Components/Bimito/Biminto';

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
          
          <Index />

          <Dargah />
         

            <Application />
            <Bimito />
                

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



