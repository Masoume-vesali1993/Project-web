import React from 'react';
import './styles.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import bimito from './Img/bimito.png'


const { SubMenu } = Menu;

class App extends React.Component {
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
              <SettingOutlined />
            </>
          }
        >
            <Menu.Item key="setting:1">بیمه مسئولیت پزشگان</Menu.Item>
        </SubMenu>

        <SubMenu
          title={
            <>
              بیمه اموال
              <SettingOutlined />
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
              <SettingOutlined />
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
               <svg focusable="false" viewBox="64 64 896 896" class data-icon="down" width="1em" height="1em" >
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                <path fill="none" d="M0 0h24v24H0z"></path>
              </svg>
            </>
          }
        >
            <Menu.Item key="setting:1">بیمه شخص ثالث</Menu.Item>
            <Menu.Item key="setting:2">بیمه بدنه</Menu.Item>
            <Menu.Item key="setting:3">بیمه موتور</Menu.Item>
        </SubMenu>

        <Menu.Item key="alipay">
          <img src={bimito} />
        </Menu.Item>

      </Menu>
    );
  }
}

export default App;
