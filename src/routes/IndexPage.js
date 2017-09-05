import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import {Link} from 'dva/router'
import './IndexPage.css';

import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
class IndexPage extends React.Component{
  state = {
    theme: 'white',
    current: '1',
    openKeys: [],
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  onSwitchChange = (e) => {
    return
  }
  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }
  getAncestorKeys = (key) => {
    const map = {
      sub2: ['sub1'],
      sub4: ['sub3'],
    };
    return map[key] || [];
  }
  render(){
    return (
      <div style={{height:'100%',width:'100%'}}>
        <div className="header">
          <div className="title_con">
            <h1>WELCOME</h1>
          </div>
        </div>
        <div style={{width:240,background:this.state.theme,flexDirection:'column',display:'flex'}}>
          <Menu
            mode="inline"
            style={{ width: 'auto' }}
            theme={this.state.theme}
            onClick={this.handleClick}
            openKeys={this.state.openKeys}
            //defaultOpenKeys={['sub1']}
            selectedKeys={[this.state.current]}
            onOpenChange={this.onOpenChange}
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>HTML/CSS</span></span>}>
              <SubMenu key="sub2" title="Submenu">
                <Menu.Item key="1">
                  <Link to={'/main/products'}>option 1</Link>
                </Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>JavaScript</span></span>}>
              <SubMenu key="sub4" title="Submenu">
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="setting" /><span>JavaScript</span></span>}>
            </SubMenu>
          </Menu>
          <div style={{display:'flex',flex:1,alignItems:'flex-end',justifyContent:'flex-end'}}>
            <Switch
              onChange={this.onSwitchChange}
            />
          </div>
        </div>
        <div>{this.props.children}</div>
      </div>
    )
  }
  ;
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
