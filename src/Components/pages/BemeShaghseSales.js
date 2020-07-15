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
                <h1 className="title-main">استعلام بیمه شخص ثالث</h1>
                <Row>
                    <Col span={12}></Col>
                    <Col span={12} className="main-box">
                        <h5 className="textboxone">نوع، برند و سال ساخت خودروی خود را انتخاب کنید</h5>
                        <Form.Item
                            name="gender"
                            label="نوع وسایل نقلیه"
                            rules={[
                                {
                                required: true,
                                },
                            ]}
                            >
                        <div className="box1">
                            <Select

                                placeholder="کامیون"
                                onChange={this.onGenderChange}
                                allowClear
                            >

                                <Option value="car">سواری</Option>
                                <Option value="car2">وانت</Option>
                                <Option value="car3">تاکسی درون شهری</Option>
                                <Option value="car4">تاکسی برون شهری</Option>
                                <Option value="car5">کامیون</Option>
                                <Option value="car6">کامیونت</Option>

                            </Select>
                        </div>
                        
                        </Form.Item>

                        <Row>
                            <Col span={12} className="box2">
                                <Form.Item
                                    name="gender"
                                    label="برند"
                                    rules={[
                                        {
                                        required: true,
                                        },
                                    ]}
                                >

                                    <Select
                                        placeholder="پژو"
                                        onChange={this.onGenderChange}
                                        allowClear
                                    >
                                        <Option value="car">پژو</Option>
                                        <Option value="car2">پراید</Option>
                                        <Option value="car3">تیبا</Option>
                                        <Option value="car4">رنو</Option>
                                        <Option value="car5">سمند</Option>
                                        <Option value="car6">کیا</Option>
                                        <Option value="car7">هیوندای</Option>
                                        <Option value="car8">تویوتا</Option>
                                        <Option value="car9">فوتون</Option>
                                        <Option value="car10">سابرینا</Option>
                                        <Option value="car11">سایپا</Option>
                                        <Option value="car12">آریو</Option>
                                        <Option value="car13">اویکو</Option>
                                        <Option value="car14">اسکودا</Option>
                                        <Option value="car15">اسمارت</Option>
                                        <Option value="car16">لندمارک</Option>
                                        <Option value="car17">رولزرویس</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col span={12} className="box2">
                                <Form.Item
                                    name="gender"
                                    label="ظرفیت"
                                    rules={[
                                        {
                                        required: true,
                                        },
                                    ]}
                                    >

                                        <Select
                                            placeholder="جستجو"
                                            onChange={this.onGenderChange}
                                            allowClear
                                        >
                                        </Select>
                                    </Form.Item>
                                        </Col>
                                            </Row>                
                                                </Col>
                                                </Row>

                        <Row>
                            <Col span={12}></Col>
                            <Col span={12} className="box3">
                            <Form.Item
                                    name="gender"
                                    label="سال ساخت"
                                    rules={[
                                        {
                                        required: true,
                                        },
                                    ]}
                                    >

                                    <Select
                                        placeholder="1389"
                                        onChange={this.onGenderChange}
                                        allowClear
                                    >
                                        <Option value="car">89-90</Option>
                                        <Option value="car2">91-92</Option>
                                        <Option value="car3">93-94</Option>
                                        <Option value="car4">95-96</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>

                    </div>

                <BemeShaghseSales2 />

                </Form>
                    );
                        }
                            }


export default Demo;