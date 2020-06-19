import React from "react";
import { Row, Col } from 'antd';
import '../Bimito/styles.css';
import Navbar from "../Navbar";
import Footer from "../Bimito/Footer";

export default class extends React.Component {
constructor(props){
    super(props);
    this.state={
        props : props
    }
}

render(){
    return (
        <div>
            <Navbar />
                {this.props.children}
                <div>
                    <h1 className="title-text">استعلام بیمه شخص ثالث</h1>
                    <Row>
                        <Col span={12}>
                        </Col>
                        <Col span={12}>
                            <h5>نوع، برند و سال ساخت خودروی خود را انتخاب کنید</h5>
                        </Col>
                    </Row>
                </div>
            <Footer />
        </div>
    );
}

}