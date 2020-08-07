import React from 'react';

import bimito from '../assets/images/bimito.png'
import './styles.css';
import {Menu} from 'antd';
import {SettingOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;

export default class extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">

                <SubMenu id="login"
                         title={
                             <>
                                 ورود/ثبتنام
                             </>
                         }
                >
                </SubMenu>

                <SubMenu id="samane"
                         title={
                             <>
                                 سامانه بازاریابان بیمنتو
                             </>
                         }
                >
                </SubMenu>

                <SubMenu
                    title={
                        <>
                            بلاگ
                        </>
                    }
                >
                </SubMenu>

                <SubMenu
                    title={
                        <>
                            شرکت های بیمه
                        </>
                    }
                >
                </SubMenu>

                <SubMenu
                    title={
                        <>
                            بیمه مسئولیت
                            <SettingOutlined/>
                        </>
                    }
                >
                    <Menu.Item key="setting:1">بیمه مسئولیت پزشگان</Menu.Item>
                </SubMenu>

                <SubMenu
                    title={
                        <>
                            بیمه اموال
                            <SettingOutlined/>
                        </>
                    }
                >
                    <Menu.Item key="setting:1">بیمه آتش سوزی</Menu.Item>
                    <Menu.Item key="setting:2">بیمه زلزله</Menu.Item>
                </SubMenu>


                <SubMenu
                    title={
                        <>
                            بیمه اشخاص
                            <SettingOutlined/>
                        </>
                    }
                >
                    <Menu.Item key="setting:1">بیمه مسافرتی</Menu.Item>
                    <Menu.Item key="setting:2">بیمه عمر</Menu.Item>
                    <Menu.Item key="setting:3">حوادث انفرادی</Menu.Item>
                    <Menu.Item key="setting:4">درمان تکمیلی</Menu.Item>
                </SubMenu>

                <SubMenu
                    title={
                        <>
                            بیمه وسایل نقلیه
                            {/*توی این تگ svg اومدی نوشتی کلاس که من  حذفش کردم ، دلیلش چی بود؟  */}
                            <svg focusable="false" viewBox="64 64 896 896" data-icon="down" width="1em"
                                 height="1em">
                                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                                <path fill="none" d="M0 0h24v24H0z"/>
                            </svg>
                        </>
                    }
                >
                    <Menu.Item key="setting:1">بیمه شخص ثالث</Menu.Item>
                    <Menu.Item key="setting:2">بیمه بدنه</Menu.Item>
                    <Menu.Item key="setting:3">بیمه موتور</Menu.Item>
                </SubMenu>

                <Menu.Item key="alipay">
                    <img src={bimito} alt="where is my alt? "/>
                </Menu.Item>

            </Menu>
        );
    }
}
