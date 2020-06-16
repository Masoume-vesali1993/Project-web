// import React from 'react';
// import {Link} from 'react-router-dom';

// function NavBar(){
//     return(
//         <ul>
//             <li>
//                 <link to="/">Home</link>
//                 <link to="/about">About</link>
//                 <link to="/contact">Contact</link>
//                 <link to="/projects">Projects</link>
//             </li>
//         </ul>
//     )
// }

// export default NavBar;


import React from 'react';
// import './styles.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
// import bimito from './Img/bimito.png'
import {Link} from 'react-router-dom';



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
            <Link to="./About">
              ورود/ثبتنام
            </Link>
          }
        >
        </SubMenu>

        <SubMenu id="samane"
          title={
            <Link to="/contact">
              سامانه بازاریابان بیمنتو
            </Link>
          }
        >
        </SubMenu>

          <SubMenu
          title={
            <Link to="/projects">
              بلاگ
            </Link>
          }
        >
        </SubMenu>

        <SubMenu
          title={
            <Link to="/projects">
              شرکت های بیمه
            </Link>
          }
        >
        </SubMenu>

        <SubMenu
          title={
            <Link tp="/">
              بیمه مسئولیت
              <SettingOutlined />
            </Link>
          }
        >
            <Menu.Item key="setting:1">
              <Link to="/contact">
              بیمه مسئولیت پزشگان
              </Link>
            </Menu.Item>
        </SubMenu>

        <SubMenu
          title={
            <>
              بیمه اموال
              <SettingOutlined />
            </>
          }
        >
            <Menu.Item key="setting:1">
              <Link to="about">
              بیمه آتش سوزی
              </Link>
            </Menu.Item>

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
          {/* <img src={bimito} /> */}
        </Menu.Item>

      </Menu>
    );
  }
}

export default App;
