// ایمپورت های اصلی ری اکتی
import React from 'react';
// فایل ها ما و کامپوننت هایی که نوشتیم
import ios from '../assets/images/ios.png'
import charkhone from '../assets/images/charkhone.png'
import iranapps2 from '../assets/images/iranapps2.png'
import mayket from '../assets/images/mayket.png'
import bazar from '../assets/images/bazar.png'
import google from '../assets/images/google.png'
// استایل ها
import './styles.css';
import {Row, Col} from 'antd';


// سعی کن فانکشن نوشتن رو تمرین کنی که هم ساده تره هم کاربردی تر
export default function () {
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

// چه طوری اینجا برای عکس ها الت گذاشتی اما جای دیگه یادت رفته ؟‌
// بیشتر دقت کن !