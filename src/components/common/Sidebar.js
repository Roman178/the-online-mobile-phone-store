import React from "react";
import { Layout, Menu } from "antd";
import NaVLink from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Sider
        className="site-layout-background"
        width={200}
        style={{ marginTop: "100px" }}
      >
        <Menu mode="vertical" style={{ height: "100%" }}>
          <SubMenu key="sub1" title={<span>Apple</span>}>
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span>Samsung</span>}>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span>Xiaomi</span>}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;