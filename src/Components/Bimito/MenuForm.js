import React from 'react';
import 'antd/dist/antd.css';
import { Form , Button, Select } from 'antd';
import { Row, Col } from 'antd';


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

const Demo = () => {
  const [form] = Form.useForm();
    const onGenderChange = value => {
        switch (value) {
        case 'male':
            form.setFieldsValue({
            note: 'Hi, man!',
            });
            return;

        case 'female':
            form.setFieldsValue({
            note: 'Hi, lady!',
            });
            return;

        case 'other':
            form.setFieldsValue({
            note: 'Hi there!',
            });
        }
    };

    const onFinish = values => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
        note: 'Hello world!',
        gender: 'male',
        });
    };

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Row>
            <Col span={8}>

                <Form.Item
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Select
                    placeholder="توضیحات یادآوری"
                    onChange={onGenderChange}
                    allowClear
                    >
                    </Select>
                </Form.Item>

            </Col>

            <Col span={8}>
                <Form.Item
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                    >
                    <Select
                    placeholder="نحوه تکرار"
                    onChange={onGenderChange}
                    allowClear
                    >
                    <Option value="everymonth">هرماه</Option>
                    <Option value="everythreemonths">هر سه ماه</Option>
                    <Option value="everysixemonths">هر شش ماه</Option>
                    <Option value="yearly">سالانه</Option>
                    <Option value="repeat">تکرار نشود</Option>
                    </Select>
                </Form.Item>
            </Col>

                <Col span={8}>

                    <Form.Item
                        rules={[
                        {
                            required: true,
                        },
                        ]}
                        >
                        <Select
                        placeholder="یادآور برای بیمه"
                        onChange={onGenderChange}
                        allowClear
                        >
                        <Option value="pesone">بیمه شخص ثالث</Option>
                        <Option value="body">بیمه بدنه</Option>
                        <Option value="fire">بیمه آتش سوزی</Option>
                        <Option value="Social">بیمه تامین اجتماعی</Option>
                        <Option value="Accidents">بیمه حوادث</Option>
                        <Option value="Responsibility">بیمه مسئولیت</Option>
                        <Option value="Engine">بیمه موتور سیکلت</Option>
                        <Option value="Health">بیمه سلامت</Option>
                        <Option value="Transportation">بیمه حمل و نقل</Option>
                        </Select>
                    </Form.Item>

                </Col>
            </Row>

            <Row>
              <Col span={8}>
                <Form.Item
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Select
                    placeholder="شهر"
                    onChange={onGenderChange}
                    allowClear
                    >
                    </Select>
                </Form.Item>
            </Col>

            <Col span={8}>
                <Form.Item
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                    >
                    <Select
                    placeholder="استان"
                    onChange={onGenderChange}
                    allowClear
                    >
                    <Option value="Eastazarbaijan">آذربایجان شرقی</Option>
                    <Option value="Westernazerbaijan">آذربایجان غربی</Option>
                    <Option value="Ardabil">اردبیل</Option>
                    <Option value="Esfahan">اصفهان</Option>
                    <Option value="Alborz">البرز</Option>
                    <Option value="Ilam">ایلام</Option>
                    <Option value="Bushehr">بوشهر</Option>
                    <Option value="Tehran">تهران</Option>
                    <Option value="ChaharMahalBakhtiari">چهارمحال بختیاری</Option>
                    <Option value="southernKhorasan">خراسان جنوبی</Option>
                    <Option value="KhorasanRazavi">خراسان رضوی</Option>
                    <Option value="NorthKhorasan">خراسان شمالی</Option>
                    <Option value="Khuzestan">خوزستان</Option>
                    <Option value="Zanjan">زنجان</Option>
                    <Option value="Semnan">سمنان</Option>
                    <Option value="SistanandBaluchestan">سیستان و بلوچستان</Option>
                    <Option value="Fars">فارس</Option>
                    <Option value="Qazvin">قزوین</Option>
                    <Option value="Qom">قم</Option>
                    <Option value="Kurdistan">کردستان</Option>
                    <Option value="Kerman">کرمان</Option>
                    <Option value="Kermanshah">کرمانشاه</Option>
                    <Option value="KohkiluyehandBoyerAhmad">کهکیلویه و بویراحمد</Option>
                    <Option value="Golestan">گلستان</Option>
                    <Option value="Gilan">گیلان</Option>
                    <Option value="Lorestan">لرستان</Option>
                    <Option value="Mazandaran">مازندران</Option>
                    <Option value="Markaze">مرکزی</Option>
                    <Option value="Hormozgan">هرمزگان</Option>
                    <Option value="Hamedan">همدان</Option>
                    <Option value="Yazd">یزد</Option>


                    

                    </Select>
                </Form.Item>
            </Col>

            <Col span={8}>
                <Form.Item
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                    >
                    <Select
                    placeholder="یادآور برای بیمه"
                    onChange={onGenderChange}
                    allowClear
                    >
                    <Option value="pesone">بیمه شخص ثالث</Option>
                    <Option value="body">بیمه بدنه</Option>
                    <Option value="fire">بیمه آتش سوزی</Option>
                    <Option value="Social">بیمه تامین اجتماعی</Option>
                    <Option value="Accidents">بیمه حوادث</Option>
                    <Option value="Responsibility">بیمه مسئولیت</Option>
                    <Option value="Engine">بیمه موتور سیکلت</Option>
                    <Option value="Health">بیمه سلامت</Option>
                    <Option value="Transportation">بیمه حمل و نقل</Option>
                    </Select>
                </Form.Item>
            </Col>
        </Row>



        <Form.Item {...tailLayout}>
            <Row>
                <Col span={12}>
                    <Button type="primary">
                        ثبت
                    </Button>
                </Col>
                
            </Row>
        </Form.Item>
    </Form>
    );
 };

export default Demo;

