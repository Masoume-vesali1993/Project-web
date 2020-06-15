import React, {Component} from "react";
import { render } from "react-dom";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Plx from "react-plx";
import Iran from "./Img/Iran.png"
import anjoman from "./Img/anjoman.png"
import Asia from "./Img/Asia.png"
import Parsian from "./Img/Parsian.png"
import Dana from "./Img/Dana.png"
import Razi from "./Img/Razi.png"
import Ma from "./Img/Ma.png"
import Moalem from "./Img/Moalem.png"
import Pasargad from "./Img/Pasargad.png"
import Alborz from "./Img/Alborz.png"
import Dey from "./Img/Dey.png"
import Melat from "./Img/Melat.png"
import KarAfarin from "./Img/KarAfarin.png"
import Novin from "./Img/Novin.png"
import Saman from "./Img/Saman.png"
import Tejarat from "./Img/Tejarat.png"
import Kosar from "./Img/Kosar.png"
import Arman from "./Img/Arman.png"
import Sina from "./Img/Sina.png"
import Tavon from "./Img/Tavon.png"

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
        // property: "backgroundColor"
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
  // textAlign: "center",
  // borderRadius: 20,
  // backgroundColor: "#34ba9c",
  color: "#fff",
  left: "50%",
  // marginLeft: -50,
  top: 2100,
  position:"absolute",
  // fontFamily: "Helvetica, Arial, sans-serif"
};

const App = () => (
  <div>
    <Plx parallaxData={exampleParallaxData} style={styles} className="scroll-img">
        <Row gutter={[12]}>

            <Col span={1}>
                {/* {<img alt="example" src={Asmari} />}  */}
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
                {/* {<img alt="example" src={anjoman} style={{padding:100}}/>} */}
            </Col>

        </Row>

        <Row gutter={[12]}>

            <Col span={1}>
                {/* {<img alt="example" src={Asmari} />}  */}
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
                {/* {<img alt="example" src={anjoman} style={{padding:100}}/>} */}
            </Col>

        </Row>

        
    </Plx>
  </div>
);

render(<App />, document.getElementById("root"));

export default App;
