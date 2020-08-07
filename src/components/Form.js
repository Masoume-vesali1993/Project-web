import React from 'react';
import MenuForm from './MenuForm';

import punchHoles from '../assets/images/punchHoles.svg'
import iconersal from '../assets/images/icon-ersal.svg'
import iconsupport from '../assets/images/icon-support.svg'
import iconspeed from '../assets/images/icon-speed.svg'
import iconsimple from '../assets/images/icon-simple.svg'

import './styles.css';
import {Row, Col} from 'antd';


export default function () {
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
                        <MenuForm/>
                    </div>
                </div>
                <div className="backup">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <img src={iconersal} width="70px" alt="what is my alt?"/>
                            <div>
                                <p>ارسال رایگان</p>
                            </div>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <img src={iconsupport} width="70px" alt="what is my alt?"/>
                            <div>
                                <p>پشتیبانی در همه مراحل</p>
                            </div>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <img src={iconspeed} width="70px" alt="what is my alt?"/>
                            <div>
                                <p>سرعت در صدور</p>
                            </div>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <img src={iconsimple} width="70px" alt="what is my alt?"/>
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