import React from 'react';
import { Row, Col} from 'antd';
import 'antd/dist/antd.css';
import { Form, Select } from 'antd';
import BemeShaghseSales2 from './BemeShaghseSales2';


const { Option } = Select;
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
        };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
        };

class Demo extends React.Component {
    formRef = React.createRef();

    onGenderChange = value => {
        this.formRef.current.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };

    onFinish = values => {
        console.log(values);
    };

    onReset = () => {
        this.formRef.current.resetFields();
    };

    onFill = () => {
        this.formRef.current.setFieldsValue({
        note: 'Hello world!',
        gender: 'male',
        });
    };

    render() {
        return (
        <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
            <div className="title-text-main">
                <h1 className="title-main">استعلام بیمه مسئولیت پزشکان</h1>
                <Row>
                    <Col span={12}></Col>
                    <Col span={12} className="main-box">
                        <h5 className="textboxone">پزشک هستید یا پیراپزشک؟</h5>

                        <Row>
                            <Col span={2}>مرحله قبل</Col>
                            <Col span={10} className="box2">
                                <Form.Item
                                    name="gender"
                                    rules={[
                                        {
                                        required: true,
                                        },
                                    ]}
                                >

                                    <Select
                                        placeholder="پزشک"
                                        onChange={this.onGenderChange}
                                        allowClear
                                    >
                                        <Option value="car">یک واحد در آپارتمان</Option>
                                        <Option value="car2">یک ساختمان ویلایی</Option>
                                        <Option value="car3">آپارتمان یا مجتمع</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col span={10} className="box2">
                                <Form.Item
                                    name="gender"
                                    rules={[
                                        {
                                        required: true,
                                        },
                                    ]}
                                    >

                                    <Select
                                            placeholder="پیراپزشک"
                                            onChange={this.onGenderChange}
                                            allowClear
                                    >
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={2}>مرحله بعد</Col>
                        </Row>                
                    </Col>
                </Row>
            </div>

        <BemeShaghseSales2 />

    </Form>
);
    }
        }


export default Demo;