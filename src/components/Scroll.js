import React from "react";
import Plx from "react-plx";

import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import Iran from "../assets/images/Iran.png"
import anjoman from "../assets/images/anjoman.png"
import Asia from "../assets/images/Asia.png"
import Parsian from "../assets/images/Parsian.png"
import Dana from "../assets/images/Dana.png"
import Razi from "../assets/images/Razi.png"
import Ma from "../assets/images/Ma.png"
import Moalem from "../assets/images/Moalem.png"
import Pasargad from "../assets/images/Pasargad.png"
import Alborz from "../assets/images/Alborz.png"
import Dey from "../assets/images/Dey.png"
import Melat from "../assets/images/Melat.png"
import KarAfarin from "../assets/images/KarAfarin.png"
import Novin from "../assets/images/Novin.png"
import Saman from "../assets/images/Saman.png"
import Tejarat from "../assets/images/Tejarat.png"
import Kosar from "../assets/images/Kosar.png"
import Arman from "../assets/images/Arman.png"
import Sina from "../assets/images/Sina.png"
import Tavon from "../assets/images/Tavon.png"

const exampleParallaxData = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 0,
        endValue: 90,
        property: "rotate"
      },
      {
        startValue: 1,
        endValue: 1.5,
        property: "scale"
      },
      {
        startValue: 1,
        endValue: 0.75,
        property: "opacity"
      }
    ]
  },
  {
    start: 350,
    duration: 300,
    properties: [
      {
        startValue: "#3cb99c",
        endValue: "rgba(50,50,200,0.8)",
      },

      {
        startValue: 0,
        endValue: 100,
        property: "translateY"
      },

      {
        startValue: 0.75,
        endValue: 1,
        property: "opacity"
      }
    ]
  },

  {
    start: 700,
    duration: 1000,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "translateY"
      },

      {
        startValue: 1.5,
        endValue: 2,
        property: "scale"
      },

      {
        startValue: 90,
        endValue: 0,
        property: "rotate"
      },

      {
        startValue: 0,
        endValue: 2,
        property: "blur"
      }
    ]
  }
];

const styles = {
  width: "480px",
  height: "100px",
  lineHeight: "100px",
  color: "#fff",
  left: "50%",
  top: 2100,
  position:"absolute",
};

export default () => (
  <div>
    <Plx parallaxData={exampleParallaxData} style={styles} className="scroll-img">
        <Row gutter={[12]}>

            <Col span={1}>

            </Col>

            <Col  span={1}>
                {<img alt="example" src={Iran} />} 
            </Col>

            <Col  span={1}>
                {<img alt="example" src={anjoman}/>}
            </Col>

            <Col  span={1}>
                {<img alt="example" src={Asia}/>}
            </Col>

            <Col  span={1}>
                {<img alt="example" src={Parsian} />}
            </Col>
            
            <Col  span={1}>
                {<img alt="example" src={Dana} />}
            </Col>
            
            <Col  span={1}>
                {<img alt="example" src={Razi} />}
            </Col>
            
            <Col  span={1}>
                {<img alt="example" src={Ma} />}
            </Col>
            
            <Col  span={1}>
                {<img alt="example" src={Moalem} />}
            </Col>
            
            <Col  span={1}>
                {<img alt="example" src={Pasargad} />}
            </Col>

            <Col  span={1}>
                {<img alt="example" src={Alborz} />}
            </Col>

            <Col  span={1}>

            </Col>

        </Row>

        <Row gutter={[12]}>

            <Col span={1}>

            </Col>

            <Col className="gutter-row" span={1}>
                {<img alt="example" src={Dey} />} 
            </Col>

            <Col className="gutter-row" span={1}>
                {<img alt="example" src={Melat}/>}
            </Col>

            <Col className="gutter-row" span={1}>
                {<img alt="example" src={KarAfarin}/>}
            </Col>

            <Col className="gutter-row" span={1}>
                {<img alt="example" src={Novin} />}
            </Col>
            
            <Col className="gutter-row" span={1}>
                {<img alt="example" src={Saman} />}
            </Col>
            
            <Col className="gutter-row" span={1}>
                {<img alt="example" src={Tejarat} />}
            </Col>
            
            <Col className="gutter-row" span={1}>
                {<img alt="example" src={Kosar} />}
            </Col>
            
            <Col className="gutter-row" span={1}>
                {<img alt="example" src={Arman} />}
            </Col>
            
            <Col className="gutter-row" span={1}>
                {<img alt="example" src={Sina} />}
            </Col>

            <Col className="gutter-row" span={1}>
                {<img alt="example" src={Tavon} />}
            </Col>

            <Col className="gutter-row" span={1}>

            </Col>

        </Row>

        
    </Plx>
  </div>
);

// متوجه نشدم که چرا اینجا App رو داشتی توی React-dom میریختی
// اینها فقط کامپوننت هستند و باید در نهایت اکسپورت بشن
// همه کامپوننت ها و پیج ها توی App اصلی هستند که باید توی DOM تزریق بشن نه جای دیگه
// اینکه برای کامپوننت هات اسم نذاری یا اینکه همشون رو App بذاری هم جالب نیستش واقعا
// هر کامپوننت میتونه اسم همون پوشه یا فایل رو داشته باشه و خیلی قشنگ تر میشه این شکلی
// مثلا اینجا اسم این کامپوننت رو متیونستی بذاری Scroll