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
                            {/* اینجا از تگ a استفاده کردی اما لینک نشده به هیچ جایی که مشکل ساز میشه این موضوع*/}
                            <h3><a href="/#" className="endpart">سامانه بازاریابی بیمنتو</a></h3>
                        </Col>
                    </Row>
                  </div>
            </div>
        );
    }

}

// وقتی از تگ a استفاده میکنی باید از پراپرتی href استفاده کنی حتما
// اگه میخوای با کلیک کردن روش هیج اتفاقی نیوفته این کاری که من کردم رو انجام بده