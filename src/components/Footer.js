import React from 'react';
import './styles.css';
import {Row, Col} from 'antd';
import enamad from '../assets/images/enamad.png'
import samandehi from '../assets/images/samandehi.png'
import anjoman from '../assets/images/anjoman.png'

// اینجا برای عکس هات از alt استفاده نکردی
// استفاده از alt توی قسمت هایی که img هست خیلی مهمه
// من مرورگرم این مشکلات رو نمایش میده ! نه اینکه خودم برم دونه دونه ببینم که الت گذاشتی یا نه


export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            props: props
        }
    }

    render() {
        return (
            <div className="footer">
                <div className="footer">
                    <Row>
                        <Col span={6}>
                            <Row>

                                <Col span={8}>
                                    <img src={enamad} width="100%" alt="what is my alt?"/>
                                </Col>

                                <Col span={8}>
                                    <img src={samandehi} width="100%" alt="what is my alt?"/>
                                </Col>

                                <Col span={8}>
                                    <img src={anjoman} width="100%" alt="what is my alt?"/>
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
            </div>
        );
    }

}