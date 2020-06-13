import React from 'react';
import './styles.css';
import { Row, Col } from 'antd';
import punchHoles from './Img/punchHoles.svg'
import iconersal from './Img/icon-ersal.svg'
import iconsupport from './Img/icon-support.svg'
import iconspeed from './Img/icon-speed.svg'
import iconsimple from './Img/icon-simple.svg'
import MenuForm from './MenuForm';



export default class extends React.Component {

    constructor(props){
        super(props);
        this.state={
            props : props
        }
    }

    render(){
        return (
          <div className="mainpart">
             <div className="allpart-form">
                <div className="form">
                    <div className="add-form">
                        <img src={punchHoles} alt="" className="img-form"/>
                        <img src={punchHoles} alt="" className="img-form-tow"/>
                        <h2>یادآور تمدید یا اقساط بیمه</h2>
                    </div>

                    
                  <div className="box-form">
                    <MenuForm />
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
            </div>
        );
    }

}