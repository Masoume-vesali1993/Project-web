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
                    <h5 className="textboxone">تاریخ تولد خود را وارد کنید</h5>
                    <Row>
                        <Col span={2}>مرحله قبل</Col>
                        <Col span={6} className="box2">
                            <Form.Item
                                name="gender"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                            >

                                <Select className="select-one"
                                    placeholder="روز تولد"
                                    onChange={this.onGenderChange}
                                    allowClear
                                >
                                    <Option value="car">1</Option>
                                    <Option value="car2">2</Option>
                                    <Option value="car3">3</Option>
                                    <Option value="car4">4</Option>
                                    <Option value="car5">5</Option>
                                    <Option value="car6">6</Option>
                                    <Option value="car7">7</Option>
                                    <Option value="car8">8</Option>
                                    <Option value="car9">9</Option>
                                    <Option value="car10">10</Option>
                                    <Option value="car11">11</Option>
                                    <Option value="car12">12</Option>
                                    <Option value="car13">13</Option>
                                    <Option value="car14">14</Option>
                                    <Option value="car15">15</Option>
                                    <Option value="car16">16</Option>
                                    <Option value="car17">17</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col span={6} className="box2">
                            <Form.Item
                                name="gender"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                            >

                                <Select className="select-one"
                                    placeholder="ماه تولد"
                                    onChange={this.onGenderChange}
                                    allowClear
                                >
                                    <Option value="car">فروردین</Option>
                                    <Option value="car2">اردیبهشت</Option>
                                    <Option value="car3">خرداد</Option>
                                    <Option value="car4">تیر</Option>
                                    <Option value="car5">مرداد</Option>
                                    <Option value="car6">شهریور</Option>
                                    <Option value="car7">مهر</Option>
                                    <Option value="car8">آبان</Option>
                                    <Option value="car9">آذر</Option>
                                    <Option value="car10">دی</Option>
                                    <Option value="car11">بهمن</Option>
                                    <Option value="car12">اسفند</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col span={6} className="box2">
                            <Form.Item
                                name="gender"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                            >

                                <Select className="select-one"
                                    placeholder="سال تولد"
                                    onChange={this.onGenderChange}
                                    allowClear
                                >
                                    <Option value="car">1390</Option>
                                    <Option value="car">1391</Option>
                                    <Option value="car">1392</Option>
                                    <Option value="car">1393</Option>
                                    <Option value="car">1394</Option>
                                    <Option value="car">1395</Option>
                                    <Option value="car">1396</Option>
                                    <Option value="car">1397</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col span={2}>مرحله بعد</Col>
                    </Row>         
                </Col>
            </Row>                           
        </div>
    </Form>
        );
            }
                }


export default Demo;