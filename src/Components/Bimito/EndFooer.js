import React from 'react';
import './styles.css';
import { Row, Col } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });

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
                            <IconFont type="icon-tuichu" />
                            <IconFont type="icon-facebook" />
                            <IconFont type="icon-twitter" />
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