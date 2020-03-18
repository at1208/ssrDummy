import React from 'react';
import { Drawer, Button } from 'antd';
import { GiHamburgerMenu } from "react-icons/gi";
import style from './header.module.css'
import Google from './google';
import Facebook from './facebook';

class SideBar extends React.Component {
  state = { visible: false };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <GiHamburgerMenu type="primary" onClick={this.showDrawer} className={`${style.drawer_icon}`}/>
        <Drawer
          title="Side menu"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
        <Google />
        <Facebook />
        <Button block className='btn-style'>LOGIN WITH EMAIL</Button>
        <Button block className='btn-style'>CREATE ACCOUNT</Button>
        </Drawer>

      <style global jsx>{`
        .btn-style{
          margin:5px;
        }
        .ant-drawer-title{
          color: white!important;
        }
        .ant-drawer-header, .ant-drawer-header-no-title{
          background-color: #17a2b8;!important;
        }
        .ant-drawer-body{
          background-color: #FFFFFF!important;
        }
      `}</style>
      </div>
    );
  }
}

export default SideBar;
