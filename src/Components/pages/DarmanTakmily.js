import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Form, Select } from 'antd';


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
        <div className="title-text">
            <h1>استعلام بیمه عمر</h1>
            <Row>
                <Col span={12}>
                    <svg height="210" width="500">
                    <polygon points="200,10 250,190 160,210"  />
                    </svg>
                </Col>

                <Col span={12} className="main-box">
                    <h5 className="textboxone">استعلام بیمه درمان تکمیلی</h5>
                    <Row>
                        <Col span={12} className="box2">
                            <Form.Item
                                name="gender"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                            >

                                <Select className="select-one"
                                    placeholder="انفرادی"
                                    onChange={this.onGenderChange}
                                    allowClear
                                >
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col span={12} className="box2">
                            <Form.Item
                                name="gender"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                            >

                                <Select className="select-one"
                                    placeholder="شرکتی"
                                    onChange={this.onGenderChange}
                                    allowClear
                                >
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>         
                </Col>
            </Row>                           
        </div>
    </Form>
        );
            }
                }


export default Demo;