import React from 'react';
import './styles.css';
import { Row, Col } from 'antd';
import earthquake from './Img/earthquake.svg'
import fire_2 from './Img/fire_2.svg'
import motorcycle_1 from './Img/motorcycle_1.svg'
import carBody from './Img/carBody.svg'
import sales from './Img/thirdparty.svg'
import corporate from './Img/corporate.svg'
import health from './Img/health.svg'
import life from './Img/life.svg'
import medical from './Img/medical.svg'
import travel from './Img/travel.svg'












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
                <div className="main">
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
            </div>
        );
    }

}