import React, {Component} from "react";
import { render } from "react-dom";
import { Row, Col } from 'antd';
import Plx from "react-plx";
import Asmari from "./Img/Asmari.png";
import anjoman from "./Img/anjoman.png"

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
        property: "backgroundColor"
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
  width: 100,
  height: 100,
  lineHeight: "100px",
  textAlign: "center",
  borderRadius: 20,
  backgroundColor: "#34ba9c",
  color: "#fff",
  left: "50%",
  marginLeft: -50,
  top: 2100,
  position:"absolute",
  fontFamily: "Helvetica, Arial, sans-serif"
};

const App = () => (
  <div>
    <Plx parallaxData={exampleParallaxData} style={styles}>
        <Row gutter={[24]}>

            <Col span={2}>
                {/* {<img alt="example" src={Asmari} />}  */}
            </Col>

            <Col className="gutter-row" span={2}>
                {<img alt="example" src={Asmari} />} 
            </Col>

            <Col className="gutter-row" span={2}>
                {<img alt="example" src={anjoman}/>}
            </Col>

            <Col className="gutter-row" span={2}>
                {<img alt="example" src={anjoman}/>}
            </Col>

            <Col className="gutter-row" span={2}>
                {<img alt="example" src={anjoman} />}
            </Col>
            
            <Col className="gutter-row" span={2}>
                {<img alt="example" src={anjoman} />}
            </Col>
            
            <Col className="gutter-row" span={2}>
                {<img alt="example" src={anjoman} />}
            </Col>
            
            <Col className="gutter-row" span={2}>
                {<img alt="example" src={anjoman} />}
            </Col>
            
            <Col className="gutter-row" span={2}>
                {<img alt="example" src={anjoman} />}
            </Col>
            
            <Col className="gutter-row" span={2}>
                {<img alt="example" src={anjoman} />}
            </Col>

            <Col className="gutter-row" span={2}>
                {<img alt="example" src={anjoman} style={{padding:100}}/>}
            </Col>

            <Col className="gutter-row" span={2}>
                {/* {<img alt="example" src={anjoman} style={{padding:100}}/>} */}
            </Col>

        </Row>
        
    </Plx>
  </div>
);

render(<App />, document.getElementById("root"));

export default App;
