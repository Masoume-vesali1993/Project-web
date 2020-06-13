import React from 'react';
import './styles.css';
import { Row, Col } from 'antd';


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
                <div className="endpartpage">
                    <Row>
                        <Col span={12}>
                          <p>لوگو</p>
                        </Col>

                        <Col span={12}>
                            <h3><a className="endpart">سامانه بازاریابی بیمنتو</a></h3>
                        </Col>
                    </Row>
                  </div>
            </div>
        );
    }

}