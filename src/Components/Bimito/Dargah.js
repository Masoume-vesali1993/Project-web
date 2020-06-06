import React from 'react';
import './styles.css';
import { Row, Col } from 'antd';
import mobilee from './Img/mobilee.svg'



export default class extends React.Component {

    constructor(props){
        super(props);
        this.state={
            props : props
        }
    }

    render(){
        return (
            <div className="dargah">
                <div className="img-bank">
                    <Row>
                        <Col span={2}>col-6</Col>
                        <Col span={2}>col-6</Col>
                        <Col span={2}>col-6</Col>
                        <Col span={2}>col-6</Col>
                        <Col span={2}>col-6</Col>
                        <Col span={2}>col-6</Col>
                        <Col span={2}>col-6</Col>
                        <Col span={2}>col-6</Col>
                        <Col span={2}>col-6</Col>
                        <Col span={2}>col-6</Col>
                        <Col span={2}>col-6</Col>
                        <Col span={2}>col-6</Col>
                        <Col span={2}>col-6</Col>
                    </Row>

                    {<img alt="example" src={mobilee} />} 

                </div>
            </div>
        );
    }

}