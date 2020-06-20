// import React from "react";
// import { Row, Col } from 'antd';
// import '../Bimito/styles.css';
// import Navbar from "../Navbar";
// import Footer from "../Bimito/Footer";

// export default class extends React.Component {
// constructor(props){
//     super(props);
//     this.state={
//         props : props
//     }
// }

// render(){
//     return (
//         <div>
//             <Navbar />
//                 {this.props.children}
//                 <div>
//                     <h1 className="title-text">استعلام بیمه شخص ثالث</h1>
//                     <Row>
//                         <Col span={12}>
//                         </Col>
//                         <Col span={12}>
//                             <h5>نوع، برند و سال ساخت خودروی خود را انتخاب کنید</h5>
                            
//                         </Col>
//                     </Row>
//                 </div>
//             <Footer />
//         </div>
//     );
// }

// }


import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Form, Input, Button, Select } from 'antd';
// import Navbar from "../Navbar";
// import Footer from "../Bimito/Footer";

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
                    <h1>استعلام بیمه شخص ثالث</h1>
                    <Row>
                        <Col span={12}></Col>

                        <Col span={12}>
                            <h5>نوع، برند و سال ساخت خودروی خود را انتخاب کنید</h5>
                            <Form.Item
                                name="gender"
                                label="نوع وسایل نقلیه"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >

                                <Select
                                    placeholder="Select a option and change input text above"
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
                            </Form.Item>

                            <Row>
                                <Col span={12}>
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
                                            placeholder="Select a option and change input text above"
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

                                <Col span={12}>
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
                            placeholder="Select a option and change input text above"
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
                            </Row>                
                                </Col>
                                </Row>
                                    </div>
                                        </Form>
                                            );
                                                }
                                                    }

ReactDOM.render(<Demo />, document.getElementById('container'));

export default Demo;